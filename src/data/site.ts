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
		link: 'About >',
	},
	projects: {
		label: 'Recent favorite\ncreations!',
		heading: 'Projects',
		cardCta: 'Case study',
		items: [
			{
				slug: 'flexd',
				featuredPosition: 1,
				year: '2026',
				title: 'E-Cog Learning Platform For Healthcare Professionals',
				description:
					'I explored the visual and product direction for Flex-d, a social fitness app built around supportive, movement-driven interactions across 50+ screens.',
				discipline: 'Visual design',
				role: 'Product concept',
				timeline: '4 weeks',
				visual: {
					title: 'Flex-d',
					theme: 'dark',
					tags: ['track result', 'check in', 'streak of 20 days', 'high five'],
					media: [
						{ type: 'mockup', label: 'Product dashboard' },
						{ type: 'mockup', label: 'Social feed' },
						{ type: 'mockup', label: 'Progress view' },
					],
				},
				caseStudy: {
					kicker: 'Visual Concept Design / Product Thinking',
					heroTitle: 'Lead Developing the E-Cog Learning Platform for .',
					heroSubtitle:
						'A product concept exploring motivation, accountability, and friendly movement rituals.',
					overview: [
						{ label: 'Discipline', value: 'Visual design, product strategy' },
						{ label: 'My Role', value: 'Product designer, concept owner' },
						{ label: 'Timeline', value: '4 weeks' },
					],
					darkTitle: 'High-engagement social training starts with low-friction support.',
					darkBody:
						'I designed a concept that makes personal progress visible while keeping the experience light enough to return to every day. The MVP focused on friendly accountability, habit loops, and quick reflection moments.',
					processTitle: 'What the project looked like',
					processBody:
						'The work moved from rough flows to interface explorations, then into a compact product story that could explain the idea quickly.',
					cards: [
						{ title: 'Defined', body: 'Mapped the core user loop and the emotional promise of the product.' },
						{ title: 'Designed', body: 'Created visual systems, screen patterns, and interaction moments.' },
						{ title: 'Packaged', body: 'Turned the concept into a case study narrative and MVP direction.' },
					],
					results: [
						{ value: '50+', label: 'screens explored' },
						{ value: '4 weeks', label: 'from concept to case study' },
					],
				},
			},
			{
				slug: 'douglas-tools',
				featuredPosition: 2,
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
						{ label: 'Discipline', value: 'Software development' },
						{ label: 'My Role', value: 'Developer' },
						{ label: 'Timeline', value: 'Ongoing' },
					],
					darkTitle: 'Good internal tools reduce friction where it matters most.',
					darkBody:
						'I worked on interfaces and workflows that help teams move through complex information with fewer interruptions and clearer states.',
					processTitle: 'What the project looked like',
					processBody:
						'The process emphasized small, reliable improvements: clarifying requirements, shipping usable pieces, and refining with feedback.',
					cards: [
						{ title: 'Clarified', body: 'Translated operational needs into focused interface behavior.' },
						{ title: 'Built', body: 'Implemented stable views and flows for everyday use.' },
						{ title: 'Refined', body: 'Adjusted edge cases and usability details with team feedback.' },
					],
					results: [
						{ value: 'ongoing', label: 'support and iteration' },
						{ value: 'team use', label: 'built for real workflows' },
					],
				},
			},
			{
				slug: 'vr-research',
				featuredPosition: 3,
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
						{ label: 'Discipline', value: 'VR prototyping' },
						{ label: 'My Role', value: 'Developer, researcher' },
						{ label: 'Timeline', value: 'Academic project' },
					],
					darkTitle: 'Research prototypes need to be clear enough to test, not perfect enough to ship.',
					darkBody:
						'I focused on building usable interaction paths that could help answer the research question while keeping the prototype adaptable.',
					processTitle: 'What the project looked like',
					processBody:
						'The work combined technical exploration, interaction design, and iteration around what could be observed and measured.',
					cards: [
						{ title: 'Framed', body: 'Defined the interaction goals and research constraints.' },
						{ title: 'Prototyped', body: 'Built VR interaction flows for exploration and testing.' },
						{ title: 'Observed', body: 'Used feedback to refine interaction clarity.' },
					],
					results: [
						{ value: 'VR', label: 'immersive prototype' },
						{ value: 'AI', label: 'research context' },
					],
				},
			},
			{
				slug: 'writing-systems',
				featuredPosition: 4,
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
						{ label: 'Discipline', value: 'Writing, narrative systems' },
						{ label: 'My Role', value: 'Writer' },
						{ label: 'Timeline', value: 'Personal' },
					],
					darkTitle: 'Stories can become tools for noticing what is hard to name directly.',
					darkBody:
						'I explored structures that make writing feel less like a blank page and more like a usable system for reflection.',
					processTitle: 'What the project looked like',
					processBody:
						'The work moved between fragments, prompts, recurring motifs, and small systems for developing ideas over time.',
					cards: [
						{ title: 'Collected', body: 'Built a library of fragments, themes, and recurring questions.' },
						{ title: 'Structured', body: 'Organized writing into repeatable formats.' },
						{ title: 'Reworked', body: 'Edited drafts for rhythm, clarity, and emotional shape.' },
					],
					results: [
						{ value: 'daily', label: 'creative practice' },
						{ value: 'systems', label: 'for reflection' },
					],
				},
			},
			{
				slug: 'portfolio-system',
				featuredPosition: 5,
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
						{ label: 'Discipline', value: 'Frontend, visual design' },
						{ label: 'My Role', value: 'Designer, developer' },
						{ label: 'Timeline', value: 'Iterative' },
					],
					darkTitle: 'A portfolio can be more than a list of links.',
					darkBody:
						'I designed the site as a quiet navigation system with chapters, hidden pages, and case studies that can grow over time.',
					processTitle: 'What the project looked like',
					processBody:
						'The implementation favors clean Astro components, simple data files, and CSS-driven visuals that work on GitHub Pages.',
					cards: [
						{ title: 'Structured', body: 'Centralized content for easier editing and translation.' },
						{ title: 'Designed', body: 'Matched a sparse editorial mockup with custom CSS.' },
						{ title: 'Shipped', body: 'Kept the build static and dependency-light.' },
					],
					results: [
						{ value: '8+', label: 'static routes' },
						{ value: '0', label: 'extra runtime dependencies' },
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
			back: '<- Back to projects',
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
