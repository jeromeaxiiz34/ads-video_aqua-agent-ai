export const videoContent = {
  hook: {
    title: "💬 Et si chaque lead recevait une réponse instantanée sur WhatsApp ?"
  },

  problem: {
    title: "Le vrai défi des courtiers",
    subtitle: "Des leads qui tombent... et disparaissent.",
    stats: [
      { value: "500€", label: "de budget pub / mois" },
      { value: "1 sur 3", label: "prospects jamais rappelés" },
      { value: "72h", label: "de délai moyen avant réponse" }
    ],
    notification: "Nouveau message WhatsApp : « Bonjour, je cherche un prêt immo 👋 »"
  },

  solution: {
    chatHeader: {
      name: "Agent IA Courtier",
      status: "En ligne"
    },
    conversation: [
      { id: 1, text: "Bonjour, je cherche un prêt immobilier.", isBot: false, delay: 500 },
      { id: 2, text: "Bonjour 👋 Je peux vous aider ! Vous achetez une résidence principale ou un investissement ?", isBot: true, delay: 1800 },
      { id: 3, text: "Résidence principale.", isBot: false, delay: 3600 },
      { id: 4, text: "Très bien 👍 Vous êtes en CDI ou indépendant ?", isBot: true, delay: 4600 },
      { id: 5, text: "CDI depuis 3 ans.", isBot: false, delay: 5600 },
      { id: 6, text: "Parfait. Je peux vous proposer un rendez-vous pour étudier votre dossier.", isBot: true, delay: 6600 },
      { id: 7, text: "Oui, je veux bien.", isBot: false, delay: 7600 },
      { id: 8, text: "Voici le lien pour choisir votre créneau 👇", isBot: true, delay: 8800 },
      { id: 9, text: "https://calendly.com/30min", isBot: true, delay: 9200 },
      { id: 10, text: "Merci, je viens de réserver pour demain matin.", isBot: false, delay: 10400 },
      { id: 11, text: "Parfait ✅ Rendez-vous confirmé. Vous recevrez un rappel automatique avant l’appel.", isBot: true, delay: 11600 },
      { id: 12, text: "Merci et à demain.", isBot: false, delay: 12600 }
    ],
    features: [
      { icon: "Zap", text: "Réponse instantanée ⚡", color: "primary" },
      { icon: "Bot", text: "Qualification automatique 🤖", color: "secondary" },
      { icon: "Calendar", text: "RDV pris 24/7 📅", color: "primary" }
    ]
  },

  result: {
    title: "Résultats concrets 🔥",
    subtitle: "Plus de rendez-vous. Moins de pertes. Zéro effort.",
    stats: [
      { value: 40, label: "de conversions en plus", prefix: "+", suffix: "%" },
      { value: 0, label: "lead perdu", prefix: "", suffix: "" },
      { value: 10, label: "heures gagnées chaque semaine", prefix: "+", suffix: "h" }
    ]
  },

  cta: {
    title: "Votre agent IA WhatsApp travaille pendant que vous signez 🧠",
    subtitle: "Répond. Qualifie. Relance. 24h/24.",
    buttonText: "🚀 Réservez votre audit gratuit",
    badge: "Sans engagement • Premiers leads dès la 1ʳᵉ semaine"
  }
};
