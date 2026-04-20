export type Language = 'en' | 'fr';

export const defaultLanguage: Language = 'en';
export const languages: Language[] = ['en', 'fr'];

export const chapterNav = [
	{ id: 'projects', prefix: 'Chapter 1', label: 'Work', kind: 'section' },
	{ id: 'play', prefix: '--Hidden Quest', label: 'Play', kind: 'page', path: '/play/' },
	{ id: 'about', prefix: '--Hidden Quest', label: 'About', kind: 'page', path: '/about/' },
	{ id: 'resume', prefix: 'Chapter 2', label: 'Resume', kind: 'section' },
	{ id: 'contact', prefix: 'Chapter 3', label: 'Contact', kind: 'section' },
];

const baseCopy = {
	name: 'Carodak',
	title: 'Carodak - Portfolio',
	description: 'Computer scientist, writer, and designer building thoughtful technology.',
	hero: {
		kicker: 'home',
		modelLabel: 'Interactive 3D chapter model',
		scrollLabel: 'scroll',
	},
	intro: {
		heading: 'I want to develop\ntechnology with insight\nand intention.',
		callout: "Don't you want\nto know more",
		body:
			'I am <i>Carodak</i>, a computer scientist by training (M.Sc.), and a writer and designer in my spare time. Computer science gives structure to my thinking, writing opens it up, and design lets me bring the two together to create technology projects that can have a tangible impact on people’s well-being.',
		link: 'About',
	},
	projects: {
		label: 'Recent favorite\ncreations!',
		heading: 'Projects',
		cardCta: 'Case study',
		filters: ['Featured', 'Web', 'XR', 'Fun&Games', 'AI', 'Experimental Tasks', 'Data Visualization'],
		items: [
			{
				slug: 'developing-e-cog-learning-platform',
				featuredPosition: 1,
				categories: ['Featured', 'Web'],
				year: '2026',
				title: 'E-Cog Learning Platform for Healthcare Professionals',
				description:
					'An online training platform designed to train healthcare professionals in two mental health programs across multiple Canadian research sites.',
				discipline: 'Web',
				role: 'Lead developer',
				timeline: '2020-2026',
				visual: {
					title: 'E-Cog',
					theme: 'dark',
					tags: ['online training', 'healthcare', 'SCORM', 'research'],
					media: [
						{ type: 'image', label: 'E-Cog: Front page, https://e-cog.ca (2026-04-20)', src: '/projects/ecog/ecog-fronpage.png' },
						{ type: 'image', label: 'E-Cog: Pages I developed, figure taken from https://pmc.ncbi.nlm.nih.gov/articles/PMC12535630/', src: '/projects/ecog/ecog-pages.png' },
						{ type: 'image', label: 'E-Cog: Wireframes I developed', src: '/projects/ecog/ecog-wireframes.png' },
						{
							type: 'image',
							label: 'E-Cog: example of database schema I designed with my colleague Alexandre Caron',
							src: '/projects/ecog/ecog-db-schemas-supervision.png',
						},
					],
				},
				caseStudy: {
					kicker: 'Web Development / Online Training / Research Platform',
					heroTitle: 'Leading the Development of E-Cog, an Online Platform to Train Healthcare Professionals',
					heroSubtitle:
						'E-Cog is an online training platform designed to train healthcare professionals in two mental health programs, developed as part of a research project across multiple sites in Canada.',
					overview: [
						{
							label: 'My Role',
							value:
								'I was mostly the lead developer, but also contributed from early concept to implementation, including needs analysis, wireframing, user testing, course content creation, and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12535630/" target="_blank">scientific paper writing</a>.',
						},
						{
							label: 'Technical Details',
							value:
								'WordPress CMS, LearnDash LMS, PHP, JavaScript, HTML, CSS.',
						},
						{
							label: 'Timeline',
							value:
								'2020-2026, including platform development, evaluation, and deployment across multiple Canadian sites.',
						},
					],
					problem: {
						title: 'Healthcare professionals had limited access to online training for these two mental health programs.',
						description:
							'These trainings were mostly delivered in person, often in research contexts, which made them harder to scale and less visible outside specialized networks.',
						points: [
							'Training was mostly delivered in person or inside research contexts.',
							'That made the programs harder to scale and less visible outside specialized networks.',
						],
					},
					solution: {
						title: 'I built an asynchronous platform to make the programs accessible worldwide.',
						description:
							'Users can log in, follow their assigned training programs, and progress through interactive course content at their own pace. Four decisions shaped the platform: following the ADDIE framework across development phases; choosing an easy-to-maintain web stack for a small team; using a flexible self-hosted architecture for customization, updates, and maintenance; designing interactive SCORM-based training slides and course content; and building admin controls so non-technical colleagues could adjust basic content without developer support.',
						points: [
							'Users log in, follow assigned training programs, and progress at their own pace.',
							'The platform uses a maintainable WordPress/LearnDash stack with SCORM-based interactive course content.',
							'I kept it self-hosted, flexible, and ensured that new features were editable through the admin panel for non-technical collaborators.',
						],
					},
					process: [
						{
							title: 'Process',
							body:
								'I interviewed researchers and analyzed their functional needs. The main challenge was turning very specific research requirements into a flexible architecture that could evolve over time.',
						},
						{
							title: 'Process',
							body:
								'I defined the system architecture: technology stack, server setup, hosting, database, and overall system structure. The final stack included WordPress CMS, LearnDash LMS, other WordPress plugins, PHP, and JavaScript.',
						},
						{
							title: 'Process',
							body:
								'At one point, we had to change LMS because the previous system was outside our control and often unstable. I identified a new LMS and migrated the platform to a self-hosted setup.',
						},
						{
							title: 'Process',
							body:
								'I worked on system design, including database schemas, system interfaces, APIs, and class diagrams, while following practices that kept the platform scalable and easy to maintain.',
						},
						{
							title: 'Process',
							body:
								'I designed the UX flows and page mockups, then led platform development across the frontend in HTML, CSS, and JavaScript, and the backend in PHP.',
						},
					],
					challenges: [],
					impact: [
						{
							title: '74+',
							description:
								'healthcare professionals registered on the platform, showing successful uptake during the project.',
						},
						{
							title: '6/6',
							description:
								'credibility and trustworthiness score from tester research colleagues for the information provided.',
						},
						{
							title: '88%',
							description:
								'of these testing users would recommend the training program to others, and 100% would return to complete further trainings.',
						},
						{
							title: 'Outreach',
							description:
								'contribution to open science with a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12535630/" target="_blank">paper documenting our complete process</a>.',
						},
					],
				},
			},
			{
				slug: 'douglas-tools',
				featuredPosition: 2,
				categories: ['Featured', 'Web', 'Data Visualization'],
				year: '2025',
				title: 'Clinical Tools - Internal Systems',
				description:
					'Interface and workflow improvements for internal research and clinical support tools.',
				discipline: 'Software design',
				role: 'Developer',
				timeline: 'Ongoing',
				visual: {
					title: 'Clinical Tools',
					theme: 'light',
					tags: ['workflow', 'research', 'support', 'systems'],
					media: [
						{ type: 'mockup', label: 'Workflow overview' },
						{ type: 'mockup', label: 'Data table' },
						{ type: 'mockup', label: 'Review state' },
					],
				},
				caseStudy: {
					kicker: 'Software Development / Internal Tools',
					heroTitle: 'Building practical tools for research and clinical workflows.',
					heroSubtitle: 'A systems-focused project centered on clarity, maintainability, and daily use.',
					overview: [
						{ label: 'My Role', value: 'Developer' },
						{ label: 'Timeline', value: 'Ongoing' },
					],
					problem: {
						title: 'Good internal tools reduce friction where it matters most.',
						description:
							'I worked on interfaces and workflows that help teams move through complex information with fewer interruptions and clearer states.',
					},
					solution: {
						title: 'What the project looked like',
						description:
							'The process emphasized small, reliable improvements: clarifying requirements, shipping usable pieces, and refining with feedback.',
					},
					process: [
						{
							title: 'Process',
							body:
								'The process emphasized small, reliable improvements: clarifying requirements, shipping usable pieces, and refining with feedback.',
						},
					],
					challenges: [],
					impact: [
						{ title: 'ongoing', description: 'support and iteration' },
						{ title: 'team use', description: 'built for real workflows' },
					],
				},
			},
			{
				slug: 'vr-research',
				featuredPosition: 3,
				categories: ['Featured', 'XR', 'AI', 'Experimental Tasks'],
				year: '2020',
				title: 'VR Research Prototype',
				description:
					'A research prototype exploring virtual reality interactions and data-informed experience design.',
				discipline: 'Research prototype',
				role: 'Developer',
				timeline: 'Academic project',
				visual: {
					title: 'VR Research',
					theme: 'dark',
					tags: ['VR', 'prototype', 'AI', 'testing'],
					media: [
						{ type: 'mockup', label: 'VR scene' },
						{ type: 'mockup', label: 'Interaction flow' },
						{ type: 'mockup', label: 'Research notes' },
					],
				},
				caseStudy: {
					kicker: 'VR / Research Prototype',
					heroTitle: 'Exploring how immersive interactions can support research questions.',
					heroSubtitle: 'A prototype built at the intersection of software, experimentation, and experience.',
					overview: [
						{ label: 'My Role', value: 'Developer, researcher' },
						{ label: 'Timeline', value: 'Academic project' },
					],
					problem: {
						title: 'Research prototypes need to be clear enough to test, not perfect enough to ship.',
						description:
							'I focused on building usable interaction paths that could help answer the research question while keeping the prototype adaptable.',
					},
					solution: {
						title: 'What the project looked like',
						description:
							'The work combined technical exploration, interaction design, and iteration around what could be observed and measured.',
					},
					process: [
						{
							title: 'Process',
							body:
								'The work combined technical exploration, interaction design, and iteration around what could be observed and measured.',
						},
					],
					challenges: [],
					impact: [
						{ title: 'VR', description: 'immersive prototype' },
						{ title: 'AI', description: 'research context' },
					],
				},
			},
			{
				slug: 'writing-systems',
				featuredPosition: 4,
				categories: ['Featured', 'Fun&Games', 'Experimental Tasks'],
				year: '2024',
				title: 'Writing Systems - Narrative Tools',
				description:
					'A set of writing experiments about structure, reflection, and character-driven systems.',
				discipline: 'Writing',
				role: 'Writer',
				timeline: 'Personal',
				visual: {
					title: 'Writing Systems',
					theme: 'light',
					tags: ['fragments', 'structure', 'reflection', 'story'],
					media: [
						{ type: 'mockup', label: 'Fragment library' },
						{ type: 'mockup', label: 'Prompt system' },
						{ type: 'mockup', label: 'Draft board' },
					],
				},
				caseStudy: {
					kicker: 'Writing / Systems',
					heroTitle: 'Turning narrative fragments into reflective systems.',
					heroSubtitle: 'A personal project about writing as a way to organize thought and emotion.',
					overview: [
						{ label: 'My Role', value: 'Writer' },
						{ label: 'Timeline', value: 'Personal' },
					],
					problem: {
						title: 'Stories can become tools for noticing what is hard to name directly.',
						description:
							'I explored structures that make writing feel less like a blank page and more like a usable system for reflection.',
					},
					solution: {
						title: 'What the project looked like',
						description:
							'The work moved between fragments, prompts, recurring motifs, and small systems for developing ideas over time.',
					},
					process: [
						{
							title: 'Process',
							body:
								'The work moved between fragments, prompts, recurring motifs, and small systems for developing ideas over time.',
						},
					],
					challenges: [],
					impact: [
						{ title: 'daily', description: 'creative practice' },
						{ title: 'systems', description: 'for reflection' },
					],
				},
			},
			{
				slug: 'portfolio-system',
				featuredPosition: 5,
				categories: ['Featured', 'Web'],
				year: '2026',
				title: 'Portfolio System',
				description:
					'A lightweight personal site system designed to hold projects, hidden pages, and bilingual content.',
				discipline: 'Frontend',
				role: 'Designer, developer',
				timeline: 'Iterative',
				visual: {
					title: 'Portfolio',
					theme: 'dark',
					tags: ['Astro', 'static', 'chapters', 'bilingual'],
					media: [
						{ type: 'mockup', label: 'Home hero' },
						{ type: 'mockup', label: 'Project page' },
						{ type: 'mockup', label: 'Content system' },
					],
				},
				caseStudy: {
					kicker: 'Frontend / Personal System',
					heroTitle: 'Designing a portfolio that behaves like a small world.',
					heroSubtitle: 'A static Astro site with featured work, hidden quests, and editable content.',
					overview: [
						{ label: 'My Role', value: 'Designer, developer' },
						{ label: 'Timeline', value: 'Iterative' },
					],
					problem: {
						title: 'A portfolio can be more than a list of links.',
						description:
							'I designed the site as a quiet navigation system with chapters, hidden pages, and case studies that can grow over time.',
					},
					solution: {
						title: 'What the project looked like',
						description:
							'The implementation favors clean Astro components, simple data files, and CSS-driven visuals that work on GitHub Pages.',
					},
					process: [
						{
							title: 'Process',
							body:
								'The implementation favors clean Astro components, simple data files, and CSS-driven visuals that work on GitHub Pages.',
						},
					],
					challenges: [],
					impact: [
						{ title: '8+', description: 'static routes' },
						{ title: '0', description: 'extra runtime dependencies' },
					],
				},
			},
		],
	},
	testimonial: {
		heading: 'Apparently, I am\nfun to work with!',
		body:
			"<i>C. was our first point of contact for client support. Throughout her mandate, she delivered high-quality work. She demonstrated rigor, reliability, and great efficiency in carrying out her various responsibilities. I would not hesitate to entrust her with another mandate in an equivalent or higher-level position in the future. Annie Legault, Administrative Services Manager, Residences de l'Université de Montréal.</i>",
	},
	experience: {
		eyebrow: 'I am currently a Software Developer\n @ Douglas Mental Health Institute, Quebec, Canada.',
		heading: "Where\nI've been",
		cta: 'View Resume',
		items: [
			{ place: 'Douglas Mental Health Institute', role: 'Software Developer', date: '2020 - Present' },
			{ place: 'University of Montreal', role: 'Computer Science (AI) Master Student, AI prediction, VR development', date: '2018-2020' },
			{ place: 'LIRMM (Montpellier, France)', role: 'Student Trainee, AI prediction', date: 'July 2027' },
		],
	},
	contact: {
		teaser: 'Still here?',
		heading: 'Work with',
		headingEmphasis: 'me.',
		email: 'codeofcaro@gmail.com',
	},
	pages: {
		about: {
			title: 'About',
			body:
				'This page is ready for the next mockup. The layout will plug into the same content system and visual language.',
		},
		play: {
			title: 'Play',
			body:
				'This page is ready for experiments, games, side quests, and creative sketches.',
		},
		project: {
			back: 'Back to projects',
			nextMockup:
				'Project detail placeholder. Send the second mockup and this page can become the full case study layout.',
		},
	},
};

export const copyByLanguage: Record<Language, typeof baseCopy> = {
	en: baseCopy,
	fr: baseCopy,
};

export const getCopy = (language: Language = defaultLanguage) => copyByLanguage[language];

export const localizedPath = (language: Language, path: string) => {
	if (language === defaultLanguage) return path;
	return `/fr${path === '/' ? '/' : path}`;
};
