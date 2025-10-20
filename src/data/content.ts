export const videoContent = {
  hook: {
    title: "Et si chaque lead WhatsApp recevait une réponse immédiate, même quand vous êtes en rendez-vous ?"
  },

  problem: {
    title: "Le problème des courtiers",
    subtitle: "Vous dépensez du budget pub ou payez des apporteurs de leads… mais beaucoup de prospects partent chez un concurrent faute de réponse rapide.",
    stats: [
      { value: "500€", label: "Budget pub mensuel moyen" },
      { value: "1 sur 3", label: "Leads perdus sans réponse" },
      { value: "72h", label: "Délai moyen avant premier contact" }
    ],
    notification: "Nouveau lead WhatsApp : 'Bonjour, j’ai une demande de prêt immobilier'"
  },

  solution: {
    chatHeader: {
      name: "Agent IA Courtier",
      status: "En ligne"
    },
    conversation: [
      { id: 1, text: "Bonjour, j’aimerais connaître les taux pour un prêt immobilier.", isBot: false, delay: 500 },
      { id: 2, text: "Bonjour 👋 Je peux vous aider tout de suite. Pouvez-vous me dire si vous êtes en CDI ou indépendant ?", isBot: true, delay: 2000 },
      { id: 3, text: "Je suis en CDI depuis 3 ans.", isBot: false, delay: 3500 },
      { id: 4, text: "Parfait ! Votre dossier est éligible. Je propose un rendez-vous demain à 10h avec un conseiller ?", isBot: true, delay: 5000 },
      { id: 5, text: "Oui, parfait !", isBot: false, delay: 6500 }
    ],
    features: [
      { icon: "Zap", text: "Réponses automatiques 24/7 ⚡", color: "primary" },
      { icon: "Bot", text: "Qualification instantanée des leads 🤖", color: "secondary" },
      { icon: "Calendar", text: "Rendez-vous planifiés automatiquement 📅", color: "primary" }
    ]
  },

  result: {
    title: "Des résultats concrets pour les courtiers",
    subtitle: "dès la première semaine d’utilisation",
    stats: [
      { value: 40, label: "de conversions en plus", prefix: "+", suffix: "%" },
      { value: 0, label: "lead perdu", prefix: "", suffix: "" },
      { value: 10, label: "heures gagnées par semaine", prefix: "+", suffix: "h" }
    ]
  },

  cta: {
    title: "Automatisez vos leads WhatsApp",
    subtitle: "et concentrez-vous sur les dossiers qui comptent",
    buttonText: "Réservez une démo gratuite",
    badge: "✨ Sans engagement • Installation en 10 minutes"
  }
};
