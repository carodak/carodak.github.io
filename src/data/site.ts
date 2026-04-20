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
			'I am <i>Carodak</i>, a computer scientist by training, and a writer and designer in my spare time. Computer science gives structure to my thinking, writing opens it up, and design lets me bring the two together to create technology projects that can have a tangible impact on people’s well-being.',
		link: 'About ->',
	},
	projects: {
		label: 'Recent favorite\ncreations!',
		heading: 'Projects',
		cardCta: 'Case study',
		items: [
			{
				slug: 'flexd',
				year: '2026',
				title: 'Flex-d - Visual Concept Design',
				description:
					'I explored the visual and product direction for Flex-d, a social fitness app built around supportive, movement-driven interactions across 50+ screens.',
				discipline: 'Visual design',
				role: 'Product concept',
				timeline: '4 weeks',
			},
		],
	},
	testimonial: {
		heading: 'Apparently, I am\nfun to work with!',
		body:
			"<i>C. was our first point of contact for client support. Throughout her mandate, she delivered high-quality work. She demonstrated rigor, reliability, and great efficiency in carrying out her various responsibilities. I would not hesitate to entrust her with another mandate in an equivalent or higher-level position in the future. Annie Legault, Administrative Services Manager, Residences de l'Université de Montréal.</i>",
	},
	experience: {
		eyebrow: 'I am a current Software Developer\n @ Douglas Mental Health Institute, Quebec, Canada.',
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
	return `/fr${path === '/' ? '' : path}`;
};
