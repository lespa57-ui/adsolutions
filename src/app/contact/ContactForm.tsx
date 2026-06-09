"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

const besoins = [
  "Logiciel métier sur mesure",
  "Application web",
  "Site internet professionnel",
  "Automatisation Excel",
  "Autre",
];

const tailles = [
  "Indépendant",
  "1 à 5 salariés",
  "6 à 20 salariés",
  "21 à 50 salariés",
  "Plus de 50 salariés",
];

type FormData = {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  besoin: string;
  taille: string;
  situation: string;
};

const empty: FormData = {
  nom: "",
  entreprise: "",
  email: "",
  telephone: "",
  besoin: "",
  taille: "",
  situation: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = `Bonjour Arnaud,%0A%0AUn nouveau message de contact a été reçu :%0A%0A` +
      `Nom : ${encodeURIComponent(form.nom)}%0A` +
      `Entreprise : ${encodeURIComponent(form.entreprise)}%0A` +
      `Email : ${encodeURIComponent(form.email)}%0A` +
      `Téléphone : ${encodeURIComponent(form.telephone || "Non renseigné")}%0A` +
      `Besoin : ${encodeURIComponent(form.besoin)}%0A` +
      `Taille entreprise : ${encodeURIComponent(form.taille || "Non renseignée")}%0A%0A` +
      `Situation :%0A${encodeURIComponent(form.situation)}%0A%0AMerci !`;

    const subject = encodeURIComponent(`Nouveau projet – ${form.nom} (${form.besoin})`);

    setTimeout(() => {
      window.location.href = `mailto:contact@adsolutions47.fr?subject=${subject}&body=${body}`;
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-200";

  const labelBase = "block text-white/50 text-xs uppercase tracking-wider font-medium mb-1.5";

  if (submitted) {
    return (
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-pink-600/10" />
        <div className="absolute inset-[1px] bg-[#080C22] rounded-3xl" />
        <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[300px] gap-5">
          <div className="w-16 h-16 rounded-full bg-violet-500/15 flex items-center justify-center">
            <CheckCircle className="text-violet-400" size={32} />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Votre messagerie s'est ouverte</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
              Envoyez l'email pré-rempli. Je vous réponds sous 24h.
            </p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(empty); }}
            className="text-violet-400 hover:text-violet-300 text-sm flex items-center gap-1 transition-colors"
          >
            Envoyer un autre message <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-pink-600/10" />
      <div className="absolute inset-[1px] bg-[#080C22] rounded-3xl" />
      <div className="relative z-10 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-1">Décrivez votre projet</h2>
        <p className="text-white/40 text-sm mb-6">
          Je vous réponds sous 24h avec une proposition adaptée.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nom + Entreprise */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className={labelBase}>
                Nom <span className="text-violet-400">*</span>
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Jean Dupont"
                value={form.nom}
                onChange={handle}
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="entreprise" className={labelBase}>
                Entreprise <span className="text-violet-400">*</span>
              </label>
              <input
                id="entreprise"
                name="entreprise"
                type="text"
                required
                placeholder="Mon Entreprise SAS"
                value={form.entreprise}
                onChange={handle}
                className={inputBase}
              />
            </div>
          </div>

          {/* Email + Téléphone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className={labelBase}>
                E-mail <span className="text-violet-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean@exemple.fr"
                value={form.email}
                onChange={handle}
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="telephone" className={labelBase}>
                Téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="06 12 34 56 78"
                value={form.telephone}
                onChange={handle}
                className={inputBase}
              />
            </div>
          </div>

          {/* Besoin */}
          <div>
            <label htmlFor="besoin" className={labelBase}>
              Votre besoin <span className="text-violet-400">*</span>
            </label>
            <select
              id="besoin"
              name="besoin"
              required
              value={form.besoin}
              onChange={handle}
              className={`${inputBase} cursor-pointer`}
            >
              <option value="" disabled className="bg-[#080C22]">
                Sélectionnez votre besoin…
              </option>
              {besoins.map((b) => (
                <option key={b} value={b} className="bg-[#080C22]">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Taille */}
          <div>
            <label htmlFor="taille" className={labelBase}>
              Taille de votre entreprise
            </label>
            <select
              id="taille"
              name="taille"
              value={form.taille}
              onChange={handle}
              className={`${inputBase} cursor-pointer`}
            >
              <option value="" className="bg-[#080C22]">
                Sélectionnez…
              </option>
              {tailles.map((t) => (
                <option key={t} value={t} className="bg-[#080C22]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Situation */}
          <div>
            <label htmlFor="situation" className={labelBase}>
              Décrivez votre situation <span className="text-violet-400">*</span>
            </label>
            <textarea
              id="situation"
              name="situation"
              required
              rows={4}
              placeholder="Expliquez votre activité, ce que vous souhaitez automatiser ou créer, vos contraintes éventuelles…"
              value={form.situation}
              onChange={handle}
              className={`${inputBase} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-semibold text-white text-base bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 disabled:opacity-60 shadow-[0_0_40px_rgba(124,58,237,0.3)] transition-all duration-300 mt-1"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Préparation…
              </>
            ) : (
              <>
                <Send size={18} />
                Envoyer ma demande
              </>
            )}
          </button>

          <p className="text-center text-white/25 text-xs">
            Votre client de messagerie s'ouvrira avec un email pré-rempli
          </p>
        </form>
      </div>
    </div>
  );
}
