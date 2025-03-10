import soldesk from "../assets/images/soldesk.png";
import hr from "../assets/images/hr.png";
import replace from "../assets/images/replace.png";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Features" },
    { href: "#products", label: "Clients" },
    { href: "/contact", label: "Contact " },
    { href: "#contact-us", label: "More" },
];
export const activités = [
    {
        label: "Conseil",
        subtext: "SOLWAY accompagne les entreprises dans leur transformation digitale."
    },
   
    {
        label: "Formation",
        subtext: "SOLWAY offre désormais la possibilité de se former sur SAP ainsi sur d’autres langages et frameworks."
    },
    {
        label: "Sourcing",
        subtext: "SOLWAY vous aide à satisfaire vos besoins en recrutement en ayant les bons talents pour votre entreprise."
    },
    {
        label: "Innovation",
        subtext: "SOLWAY développe ses propres outils pour faciliter et améliorer votre quotidien."
    },
    {
        label: "Itégration",
        subtext: "SOLWAY intervient à la mise en place de vos solutions SAP, spécialement dans le module HR, ainsi sur d’autres périmètres : Linux, Base de données, Réseau …"
    },
];
export const innovations = [
    {
      label: "VERIF'DSN PLUS",
      subtext: "VERIF’DSN PLUS est un outil complémentaire de VERIF’DSN qui  permet de contrôler votre DSN sur plusieurs périodes de paie. Cela \n vous permettra de réaliser facilement et rapidement des contrôles \n trimestrielle, semestrielle ou annuelle de vos cotisations. \nPour plus d’informations, veuillez nous contacter, nous serons ravis\n à répondre à vos interrogations."
    }
  ];
  export const solutions = [
    {
      label: "SOLDESK",
      subtext: "SOLDESK est un outil interne de gestion \n de tickets permettant de traiter efficacement \n les demandes clients (anomalies, évolutions,\n etc.) via une interface simple et rapide",
      img: soldesk,
    },
    {
        label:"SOLWAY HR",
        subtext:"SOLWAY HR est une solution complète pour\n optimiser la gestion des ressources\n  humaines, couvrant l'embauche, le \n recrutement, la paie, et plus encore.",
        img: hr,
    },
    {
        label:"SOLWAY INVOICE",
        subtext:"SOLWAY INVOICE est un outil interne qui \n simplifie la facturation en permettant la\n saisie facile des comptes rendus d'activité et la génération automatique de factures pour les clients finaux.",
        img: replace,
    }
  ];

  export const More = [
    {
      label: "Nos Solutions",
      subtext: [
        { name: "VERIFI'DSN", path: "/verifi-dsn" },
        { name: "VERIFI'DSN PLUS", path: "/verifi-dsn-plus" },
        { name: "SOLWAY Synchronisation HR", path: "/solway-synchronisation-hr" },
        { name: "SOLDESK", path: "/soldesk" },
        { name: "SOLWAY HR", path: "/solway-hr" },
        { name: "SOLWAY INVOICE", path: "/solway-invoice" },
        { name: "ASSOCIATION SOLWAY POUR LA SOLIDARITE", path: "/association-solway" }
      ]
    },
    {
      label: "Carrières",
      subtext: [
        { name: "Nos offres D'emploi", path: "/offres-emploi" },
        { name: "Candidatures", path: "/candidatures" },
        { name: "Nos Missions", path: "/nos-missions" },
        { name: "Vos Missions", path: "/vos-missions" }
      ]
    },
    {
      label: "Formations",
      subtext: [{ name: "SOLWAY EXECUTIVE Education", path: "/solway-education" }]
    }
  ];
  
  export const dsns = [
    { 
      label: "ETAPE 2 : Sélection des données",
      subtext: "Cette étape permet de :",
      text: [
        "Sélectionner la source des données : Un fichier texte ou B2A",
        "Renseigner la période de la paie.",
        "Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés",
        "Choisir le mode d’exécution du programme",
        "Précisez la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers excel en local/ serveur)."
      ]
    }
  ];
  