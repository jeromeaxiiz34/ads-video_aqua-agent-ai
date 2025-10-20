export const videoContent = {
  hook: {
    title: "💬 Et si chaque prospect recevait une réponse instantanée sur WhatsApp ?"
  },

  problem: {
    title: "Le vrai problème des courtiers",
    subtitle: "Trop de leads. Pas assez de temps. Et des ventes qui s’envolent.",
    stats: [
      { value: "500€", label: "de pub dépensés / mois" },
      { value: "1/3", label: "des leads perdus" },
      { value: "72h", label: "pour répondre parfois..." }
    ],
    notification: "Nouveau message : 'Bonjour, je cherche un prêt immo 👋'"
  },

  solution: {
    chatHeader: {
      name: "Agent IA Courtier",
      status: "En ligne"
    },
    conversation: [

conversation: [
  { id: 1, text: "Bonjour, je cherche un prêt immobilier.", isBot: false, delay: 500 },
  { id: 2, text: "Bonjour, je peux vous aider. Vous achetez une résidence principale ou un investissement locatif ?", isBot: true, delay: 1800 },
  { id: 3, text: "Résidence principale.", isBot: false, delay: 3600 },
  { id: 4, text: "Très bien. Vous êtes en CDI ou indépendant ?", isBot: true, delay: 4600 },
  { id: 5, text: "CDI depuis 3 ans.", isBot: false, delay: 5600 },
  { id: 6, text: "Parfait. Je peux vous proposer un rendez-vous pour étudier votre dossier.", isBot: true, delay: 6600 },
  { id: 7, text: "Oui, je veux bien.", isBot: false, delay: 7600 },
  { id: 8, text: "Voici mon lien pour choisir le créneau qui vous convient :", isBot: true, delay: 8800 },
  { id: 9, text: "https://calendly.com/30min", isBot: true, delay: 9200 },
  { id: 10, text: "Merci, je viens de réserver pour demain matin.", isBot: false, delay: 10400 },
  { id: 11, text: "Parfait, je vous confirme le rendez-vous. Vous recevrez un rappel automatique avant l’appel.", isBot: true, delay: 11600 },
  { id: 12, text: "Très bien, merci et à demain.", isBot: false, delay: 12600 }
],

],
    features: [
      { icon: "Zap", text: "Réponse immédiate ⚡", color: "primary" },
      { icon: "Bot", text: "Leads qualifiés automatiquement 🤖", color: "secondary" },
      { icon: "Calendar", text: "RDV pris 24/7 📅", color: "primary" }
    ]
  },

  result: {
    title: "Résultats 🔥",
    subtitle: "Plus de réponses. Plus de dossiers signés.",
    stats: [
      { value: 40, label: "de conversions", prefix: "+", suffix: "%" },
      { value: 0, label: "lead perdu", prefix: "", suffix: "" },
      { value: 10, label: "heures gagnées / semaine", prefix: "+", suffix: "h" }
    ]
  },

  cta: {
    title: "Votre agent IA WhatsApp travaille pour vous 🧠",
    subtitle: "Répond. Qualifie. Relance. 24/7.",
    buttonText: "🚀 Réservez votre démo gratuite",
    badge: "Sans engagement • Installation en 10 min"
  }
};
