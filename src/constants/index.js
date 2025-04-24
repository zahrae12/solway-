import soldesk from "../assets/images/soldesk.png";
import hr from "../assets/images/hr.png";
import replace from "../assets/images/replace.png";


export const navLinks = [
    { href: "/", label: "Acceuil" },
    { href: "/about-us", label: "Fonctionnalités" },
    { href: "/products", label: "Clients" },
    { href: "/contact", label: "Contact " },
    { href: "/more", label: "Plus" },
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
        label: "Intégration",
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
      subtext: "SOLDESK est un outil interne de gestion de tickets permettant de traiter efficacement les demandes clients (anomalies, évolutions, etc.) via une interface simple et rapide",
      img: soldesk,
    },
    {
        label:"SOLWAY HR",
        subtext:"SOLWAY HR est une solution complète pour optimiser la gestion des ressources\n  humaines, couvrant l'embauche, le \n recrutement, la paie, et plus encore.",
        img: hr,
    },
    {
        label:"SOLWAY INVOICE",
        subtext:"SOLWAY INVOICE est un outil interne qui \n simplifie la facturation en permettant la\n saisie facile des comptes rendus d'activité et la génération automatique de factures pour les clients finaux.",
        img: replace,
    }
  ];

  export const Plus = [
    {
      label: "Nos Solutions",
      subtext: [
        { name: "VERIFI'DSN", path: "/verifi-dsn" },
        { name: "VERIFI'DSN PLUS", path: "/verifi-dsn-plus" },
        { name: "SOLWAY Synchronisation HR", path: "/solway-synchronisation-hr" },
        { name: "SOLDESK", path: "/soldesk" },
        { name: "SOLWAY HR", path: "/solway-hr" },
        { name: "SOLWAY INVOICE", path: "/solway-invoice" },
        { name: "ASSOCIATION SOLWAY POUR LA SOLIDARITÉ", path: "/association-solway" }
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
      label: "step2.selection_data.label", // Reference translation key for label
      subtext: "step2.selection_data.subtext", // Reference translation key for subtext
      text: [
        "step2.selection_data.item1", // Reference translation key for items
        "step2.selection_data.item2",
        "step2.selection_data.item3",
        "step2.selection_data.item4",
        "step2.selection_data.item5"
      ]
    }
  ];
  
  