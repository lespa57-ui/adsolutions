import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/LogoVF1.png");
const output = path.join(__dirname, "../public/LogoVF1-transparent.png");

const image = sharp(input);
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

let minX = width, minY = height, maxX = 0, maxY = 0;

// Step 1: find bounding box of non-white content
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels;
    const r = pixels[idx], g = pixels[idx + 1], b = pixels[idx + 2];
    const a = channels === 4 ? pixels[idx + 3] : 255;
    if (a > 10 && !(r > 240 && g > 240 && b > 240)) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const padding = 20;
minX = Math.max(0, minX - padding);
minY = Math.max(0, minY - padding);
maxX = Math.min(width - 1, maxX + padding);
maxY = Math.min(height - 1, maxY + padding);
const cropW = maxX - minX;
const cropH = maxY - minY;

console.log(`Cropping: ${minX},${minY} -> ${maxX},${maxY} (was ${width}x${height})`);

// Step 2: crop and make white background transparent
const cropped = await sharp(input)
  .extract({ left: minX, top: minY, width: cropW, height: cropH })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const cPixels = new Uint8Array(cropped.data);
const cW = cropped.info.width, cH = cropped.info.height;

for (let i = 0; i < cW * cH; i++) {
  const r = cPixels[i*4], g = cPixels[i*4+1], b = cPixels[i*4+2];
  // Make near-white pixels transparent
  if (r > 230 && g > 230 && b > 230) {
    const whiteness = Math.min(r, g, b);
    cPixels[i*4+3] = Math.round((1 - (whiteness - 230) / 25) * 255 * (1 - (whiteness-230)/25));
    if (whiteness > 248) cPixels[i*4+3] = 0;
  }
}

await sharp(Buffer.from(cPixels), { raw: { width: cW, height: cH, channels: 4 } })
  .png()
  .toFile(output);

console.log(`Done! Saved transparent PNG to ${output}`);
