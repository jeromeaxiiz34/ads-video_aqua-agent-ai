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
      { id: 1, text: "Bonjour, je cherche un prêt immobilier 👋", isBot: false, delay: 500 },
      { id: 2, text: "Bonjour ! Je peux vous aider tout de suite ⚡", isBot: true, delay: 1800 },
      { id: 3, text: "Vous êtes en CDI ou indépendant ?", isBot: true, delay: 2600 },
      { id: 4, text: "CDI depuis 3 ans ✅", isBot: false, delay: 3600 },
      { id: 5, text: "Parfait ! Je vous propose un RDV demain à 10h ☕", isBot: true, delay: 4800 },
      { id: 6, text: "Top, merci !", isBot: false, delay: 5800 }
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
