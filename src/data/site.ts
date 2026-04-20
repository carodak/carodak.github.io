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
			'I am <i>Carodak</i>, a Computer Scientist, writer and designer. Computer science fills my brain while writing keeps the story alive. I like making systems that feel clear, useful, and a little more human.',
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
			'C has an amazing ability to bring clarity and life to ambitious ideas, turning them into beneficial products. She is highly resourceful and well-connected in her field, always knowing the right person to get things done efficiently.',
	},
	experience: {
		eyebrow: 'I am a current I.T.M mindset\nstudent @ UQAM, College Park',
		heading: "Where\nI've been",
		cta: 'View Resume',
		items: [
			{ place: 'The Peaces Collective', role: 'Design intern', date: 'Summer 2025' },
			{ place: 'Speakaboo (Benvsion)', role: 'UX Research - App prototype', date: 'March 2025' },
			{ place: 'SuperReply', role: 'Product Designer', date: 'May 2024' },
			{ place: 'IQVIA', role: 'Associate Software Developer', date: '2022 - 2024' },
		],
	},
	contact: {
		teaser: 'Still here?',
		heading: 'Work with',
		headingEmphasis: 'me.',
		email: 'hello@example.com',
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
