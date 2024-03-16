const INFO = {
	main: {
		title: "Portfolio de David",
		name: "David Allakedet",
		email: "allakedetdavid@gmail.com",
		logo: "homepage.webp",
	},

	socials: {
		twitter: "https://twitter.com/allakedet",
		github: "https://github.com/DavidAllakedet?tab=repositories",
		linkedin: "https://www.linkedin.com/in/david-allakedet-550594206/",
		instagram: "https://www.instagram.com/allakedetdavid/",
		
	},

	homepage: {
		title: "  Passionné par le développement web et mobile, amateur de football.",
		description:
		"Je suis un développeur fullstack débutant, spécialisé en Node.js. J'explore la création d'applications web complètes, de l'avant à l'arrière, en utilisant différents frameworks et technologies. Je suis motivé par la résolution de problèmes complexes et l'acquisition de nouvelles compétences. Mon objectif est de produire un code de qualité conforme aux normes de l'industrie Je suis toujours enthousiaste à l'idée de relever de nouveaux défis et de saisir les opportunités pour évoluer en tant que développeur.",
	},

	about: {
		title: "  Je suis David Allakedet, un jeune développeur passionné.",
		description:
			"Je suis un développeur junior passionné par la création de solutions innovantes et efficaces. Avec une solide formation en développement web et une volonté constante d'apprendre et de relever de nouveaux défis, je suis enthousiaste à l'idée de contribuer à des projets stimulants et de développer mes compétences au sein d'une équipe dynamique. Mon objectif est de mettre en pratique mes connaissances en programmation pour participer à la création de produits numériques de qualité et d'apporter une valeur ajoutée à chaque projet sur lequel je travaille.",
	},	
	
	projects: [

		{
			title: "Page d'accueil de Booki",
			image: "booki_mockop.webp",
			year: "2023",
			description: "Intégration de l'interface d'un site avec du code HTML et CSS.",
			problematique: "L'intégration réussie d'une interface utilisateur avec du code HTML et CSS présente des défis uniques, notamment en ce qui concerne la cohérence visuelle, la compatibilité multi-navigateurs et la gestion de la responsivité sur différents appareils. La principale problématique abordée dans ce projet consistait à garantir que l'interface de la page d'accueil de Booki soit fidèlement reproduite à partir de la maquette fournie, tout en assurant une expérience utilisateur optimale sur tous les appareils et navigateurs.",
			linkText: "Voir le projet",
			link: "https://github.com/DavidAllakedet/Booki.git",
			details: {
				
				mission: "Intégrer du contenu conformément à une maquette avec HTML et CSS.",
				technologies: ["HTML", "CSS"],
				images: [
					"booki.webp",
					"booki2.webp",
					"booki1.webp"
				],
			
			competencesDeveloppees: [
				"Maîtrise de l'intégration HTML et CSS",
				"Gestion de la cohérence visuelle et de la compatibilité multi-navigateurs",
				"Développement de l'interface utilisateur réactive et optimisée pour tous les appareils",
				"Utilisation efficace des maquettes pour reproduire fidèlement l'interface"
		  ]
			}
		},
		

		{
			title: "Site Kasa",
			image: "kasa_mockop.webp",
			year: "2023",
			description: "Développement du front d’un site de location d’hébergement avec React. Création de composants React et gestion des états.",
			problematique: "Le développement du front-end d'un site de location d'hébergement tel que Kasa nécessite une approche soigneusement planifiée pour assurer une expérience utilisateur efficace. La principale problématique de ce projet etait la création des composants React fonctionnels et réutilisables, ainsi que dans la gestion efficace des états pour garantir la cohérence et la réactivité de l'interface utilisateur. De plus, l'intégration de fonctionnalités complexes telles que la recherche et la réservation d'hébergements devait être réalisée de manière optimale pour offrir une expérience utilisateur fluide et intuitive.",
			linkText: "Voir le projet",
			link: "https://github.com/DavidAllakedet/kaza.git",
			details: {
			  mission: "Créez une application web de location immobilière avec React.",
			  technologies: [ "HTML", "SASS", "REACT"],
			  images: [
				"kasalocat.webp",
				"kasamo1.webp",
				"aproposkasa.webp",
				
			  ],
			  competencesDeveloppees: [
				"Maîtrise de la création de composants React réutilisables",
				"Gestion efficace des états avec React",
				"Intégration de fonctionnalités complexes dans une interface utilisateur",
				"Optimisation de la performance et de la réactivité de l'interface utilisateur"
			]
			}
		  },

		  {
			title: "Mon vieux Grimoire",
			image: "grimoire_mockop.webp",
			year: "2023",
			description: "Développement d’un site de notation de livres.",
			problematique: "La principale problématique rencontrée lors du développement de Mon vieux Grimoire était la gestion efficace des données des utilisateurs, des livres et des notations. Il était nécessaire de concevoir une architecture backend robuste capable de gérer les interactions avec la base de données de manière sécurisée et performante. De plus, l'intégration avec des technologies front-end telles que React devait être optimisée pour assurer une expérience utilisateur fluide.",
			linkText: "Voir le projet",
			link: "https://github.com/DavidAllakedet/P7_Mon_Vieux_Grimoire.git",
			details: {
				mission: "Développement du backend d’un site de notation de livre.",
				technologies: ["React", "Node.js", "CSS"],
				images: [
					"grimoire1.webp",
					"grimoire3.webp",
					"grimoire4.webp"
				],

				 competencesDeveloppees: [
					"Conception et développement d'une architecture backend robuste",
					"Gestion sécurisée et performante des interactions avec la base de données",
					"Intégration optimisée avec les technologies front-end telles que React",
					"Assurer une expérience utilisateur fluide à travers l'optimisation de l'intégration"
				]
			}
		}
		

	],
};

export default INFO;
