export const videoContent = {
  hook: {
    title: "Et si chaque prospect qui clique sur vos pubs d'assurance recevait une réponse immédiate sur WhatsApp ?"
  },
  
  problem: {
    title: "Le problème des courtiers d'assurance",
    subtitle: "Les courtiers dépensent des centaines d'euros en pub… mais perdent leurs leads faute de suivi rapide.",
    stats: [
      { value: "300€", label: "Budget pub mensuel" },
      { value: "67%", label: "Leads perdus" },
      { value: "48h", label: "Délai de réponse" }
    ],
    notification: "12 nouveaux prospects"
  },
  
  solution: {
    chatHeader: {
      name: "Agent IA Assurance",
      status: "En ligne"
    },
    conversation: [
      { id: 1, text: "Bonjour, je souhaite une assurance auto", isBot: false, delay: 500 },
      { id: 2, text: "Bonjour ! Je peux vous aider immédiatement. Quel type de véhicule ?", isBot: true, delay: 2000 },
      { id: 3, text: "Une Renault Clio essence", isBot: false, delay: 3500 },
      { id: 4, text: "Parfait ! Je propose un rendez-vous demain 14h avec un conseiller ?", isBot: true, delay: 5000 },
      { id: 5, text: "Oui parfait !", isBot: false, delay: 6500 },
    ],
    features: [
      { icon: "Zap", text: "Réponses instantanées ⚡", color: "primary" },
      { icon: "Bot", text: "Qualification automatique 🤖", color: "secondary" },
      { icon: "Calendar", text: "Rendez-vous pris 24/7 📅", color: "primary" }
    ]
  },
  
  result: {
    title: "Des résultats mesurables",
    subtitle: "dès les premières semaines",
    stats: [
      { value: 35, label: "De conversions", prefix: "+", suffix: "%" },
      { value: 0, label: "Lead perdu", prefix: "", suffix: "" },
      { value: 100, label: "Rendez-vous automatiques", prefix: "", suffix: "%" }
    ]
  },
  
  cta: {
    title: "Découvrez comment automatiser vos leads",
    subtitle: "dès aujourd'hui",
    buttonText: "Réservez une démo gratuite",
    badge: "✨ Sans engagement • Réponse sous 24h"
  }
};
