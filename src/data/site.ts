import { email } from "astro:schema";

export type Language = 'en' | 'fr';

export const defaultLanguage: Language = 'en';
export const languages: Language[] = ['en', 'fr'];

export const chapterNav = [
	{ id: 'projects', prefix: 'Quest 1', label: 'Work', kind: 'section' },
	{ id: 'play', prefix: '--Hidden Quest', label: 'Play', kind: 'page', path: '/play/' },
	{ id: 'about', prefix: '--Hidden Quest', label: 'About', kind: 'page', path: '/about/' },
	{ id: 'resume', prefix: 'Quest 2', label: 'Resume', kind: 'section' },
	{ id: 'contact', prefix: 'Quest 3', label: 'Contact', kind: 'section' },
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
			'I am <i>Carodak</i>, a computer scientist by training (M.Sc.), and a writer and designer by practice. Computer science gives structure to my thinking, writing opens it up, and design lets me bring the two together to create technological projects that can have a tangible impact on people’s well-being.',
		link: 'About',
	},
	projects: {
		label: 'Recent favorite\ncreations!',
		heading: 'Projects',
		cardCta: 'Case study',
		filters: ['Featured', 'Web', 'VR', 'Fun&Games', 'AI', 'Experimental Tasks', 'Data Visualization'],
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
							src: '/projects/ecog/db-schema-example.png',
						},
					],
				},
				caseStudy: {
					kicker: 'Web Development / Online Training / Research Platform',
					heroTitle: 'Leading the Development of E-Cog, an Online Platform to Train Healthcare Professionals',
					heroSubtitle:
						'E-Cog is an online training platform designed to train healthcare professionals in two mental health programs, developed as part of a research project across multiple sites in Canada.<br />This project was part of my full-time developer role at Douglas Mental Health Institute.',
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
					links: [
						{
							label: 'E-Cog website',
							href: 'https://e-cog.ca',
						},
						{
							label: 'E-Cog paper',
							href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12535630/',
						},
					],
					problem: {
						title: 'Healthcare professionals had limited access to online training for two mental health programs.',
						description:
							'These trainings were mostly delivered in person, often in research contexts, which made them harder to scale and less visible outside specialized networks.',
						points: [
							'Training was mostly delivered in person or inside research contexts.',
							'That made the programs harder to scale and less visible outside specialized networks.',
						],
					},
					solution: {
						title: 'I developed an asynchronous platform to make the programs accessible worldwide.',
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
				slug: 'developing-two-virtual-reality-environments-and-detecting-emotions',
				featuredPosition: 2,
				categories: ['Featured', 'VR', 'AI'],
				year: '2020',
				title: 'Developing Two Virtual-Reality Environments and Detecting Emotions with AI',
				description:
					'This project was my master thesis. It explored whether calming VR experiences could help people experiencing cognitive decline feel more relaxed and perform better on cognitive tasks.',
				discipline: 'VR, AI',
				role: 'Developer, Student Trainee',
				timeline: '2019-2020',
				visual: {
					title: 'VR + AI',
					theme: 'dark',
					tags: ['VR', 'EEG', 'emotion detection', 'healthcare'],
					media: [
						{ type: 'image', label: 'Savannah VR soothing environment', src: '/projects/master-project/savannah.png' },
						{ type: 'image', label: 'Underwater VR environment', src: '/projects/master-project/underwater.png' },
						{ type: 'image', label: 'Savannah VR mean frustration results', src: '/projects/master-project/savannahvr-mean-frustration.png' },
						{ type: 'image', label: 'EEG fast Fourier transform feature extraction', src: '/projects/master-project/eeg-fast-fourier-transform.png' },
					],
				},
				caseStudy: {
					kicker: 'Virtual Reality / AI / EEG Research',
					heroTitle: 'Developing Two Virtual-Reality Environments and Detecting Emotions with AI',
					heroSubtitle:
						'This project was my master thesis. It explored whether calming VR experiences could help people experiencing cognitive decline feel more relaxed and perform better on cognitive tasks.',
					overview: [
						{
							label: 'My Role',
							value:
								'I developed two VR environments and contributed to the full research process, from early research, VR design, cognitive test development, EEG data collection and preprocessing, feature extraction, machine learning model training (AI), and scientific paper writing.',
						},
						{
							label: 'Technical Details',
							value:
								'VR Development: Unity, C#<br />Cognitive Tests: Vanilla JavaScript<br />Dataset: Raw Brain Signals (EEG)<br />AI & Preprocessing: MATLAB, EEGLAB, Python, Scikit-learn, TensorFlow/Keras.',
						},
						{ label: 'Timeline', value: '2019-2020' },
					],
					links: [
						{
							label: 'Master thesis',
							href: 'https://umontreal.scholaris.ca/items/e6a2f8dc-e2d8-4b7a-b499-cb791bc8d5a8',
						},
						{
							label: 'Savannah VR paper',
							href: 'https://doi.org/10.1007/978-3-030-60735-7_12',
						},
						{
							label: 'Confusion detection paper',
							href: 'https://doi.org/10.32473/flairs.v34i1.128474',
						},
					],
					problem: {
						title: 'People experiencing cognitive decline may also experience negative emotions such as frustration, stress, and confusion.',
						description:
							'These emotions can affect well-being, decision-making, and cognitive performance. Could VR immersion help with relaxation and cognitive performance?',
						points: [
							'Negative emotions can affect well-being, decision-making, and cognitive performance.',
							'Could VR immersion help with relaxation and cognitive performance?',
						],
					},
					solution: {
						title: 'I developed two relaxing VR environments and an AI model for detecting confusion from brain signals.',
						description:
							'The long-term goal was to make the VR experience adapt to how the participant feels, while measuring cognitive performance before, during, and after VR immersion.',
						points: [
							'I developed two relaxing VR environments.',
							'I developed an AI model that could detect confusion from brain-signal data (EEG), with the long-term goal of making the VR experience adapt to how the participant feels.',
							"We measured the participants' negative emotions before, during, and after the VR session.",
						],
					},
					process: [
						{
							title: 'Process',
							body:
								'I reviewed research on relaxing landscapes, which led to savannah and underwater settings.',
						},
						{
							title: 'Process',
							body:
								'I developed two VR environments in Unity. Features included NPC pathfinding and a Goal-Oriented Action Planning system. I made the environments adaptable, with lighting, sound volume, trees, animals, sky color, and environment colors modifiable in real time.',
						},
						{
							title: 'Process',
							body:
								'I built cognitive tests in JavaScript, then collected EEG data while participants completed them and reported their confusion level after each exercise.',
						},
						{
							title: 'Process',
							body:
								'I cleaned EEG signals with MATLAB and EEGLAB, removed artifacts with filtering and ICA (e.g., eye movements, muscle activity), then extracted FFT and band-power features.',
						},
						{
							title: 'Process',
							body:
								'I trained and compared KNN, SVM, and LSTM AI models to detect confusion from brain-signal data.',
						},
					],
					challenges: [],
					impact: [
						{
							title: 'VR relaxation',
							description:
								'Preliminary results showed that participants’ frustration decreased during the Savannah VR experience, and that this positive effect was still observed after the immersion.',
						},
						{
							title: '78.6%',
							description:
								'accuracy reached by the best AI model when detecting a confused vs. unconfused state from brain-signal data.',
						},
						{
							title: 'Outreach',
							description:
								'This work led to my <a href="https://umontreal.scholaris.ca/items/e6a2f8dc-e2d8-4b7a-b499-cb791bc8d5a8" target="_blank">master thesis</a>, a paper on <a href="https://doi.org/10.1007/978-3-030-60735-7_12" target="_blank">Savannah VR</a>, and a paper on <a href="https://doi.org/10.32473/flairs.v34i1.128474" target="_blank">AI-based confusion detection</a>.',
						},
					],
				},
			},
			{
				slug: 'tracking-sea-ice-movement-with-ai',
				featuredPosition: 3,
				categories: ['Featured', 'AI'],
				year: '2021',
				title: 'Developing an AI Model for Tracking Sea-Ice Movement',
				description:
					'A Climate Crisis Hackathon organized by AI Launch in 2021. Used AI to predict Arctic sea-ice drift from wind fields and environmental data.',
				discipline: 'Developer',
				role: 'Developer',
				timeline: '72h',
				visual: {
					title: 'Flyer of the event',
					theme: 'light',
					tags: ['AI', 'machine learning', 'climate', 'sea ice'],
					media: [
					{ type: 'image', label: 'Flyer of the event, image from https://launchlab.ai/fr/climate/ (2026-04-20)', src: '/projects/climate-change-hackathon/flyer.png' },
					// { type: 'image', label: 'Model comparison results', src: '/projects/sea-ice-ai/results.png' },
					// { type: 'image', label: 'Feature correlation heatmap', src: '/projects/sea-ice-ai/heatmap.png' },
					],
				},
				caseStudy: {
					kicker: 'AI',
					heroTitle: 'Tracking Sea-Ice Movement with AI',
					heroSubtitle:
					'This Climate Crisis Hackathon challenge explored how AI could help predict Arctic sea-ice movement from wind fields and environmental data.',

					overview: [
					{
						label: 'My Role',
						value:
						'I contributed to the machine learning pipeline, including problem reformulation, data visualization, preprocessing, feature exploration, model training, model comparison, and test-set prediction generation.',
					},
					{
						label: 'Technical Details',
						value:
						'AI: Python, Scikit-learn. Dataset: Daily Arctic sea-ice drift observations, combining ice velocity with wind, sea-ice concentration, sea-ice thickness, position, date, and distance-to-coast features.',
					},
					{
						label: 'Timeline',
						value: '48h',
					},
					],
					links: [
						{
							label: 'Github repository',
							href: 'https://github.com/carodak/Sea-Ice-Challenge',
						},
					],

					problem: {
					title:
						'Arctic sea ice moves under the influence of wind and ocean currents, sometimes by several kilometers per day.',
					description:
						'Understanding this movement is important for climate research, navigation, marine operations, pollutant tracking, and studying the transition from older sea ice to younger seasonal ice.',
					points: [
						'Sea-ice motion is difficult to model because it depends on several environmental factors.',
						'Reliable sea-ice velocity information is often obtained from drifting buoys.',
						'The challenge was to reproduce buoy drift using wind fields and other relevant features.',
					],
					},

					solution: {
					title:
						'As part of a multi-disciplinary team, I built and compared machine learning models to predict sea-ice velocity from environmental data.',
					description:
						'The model used features such as wind velocity, sea-ice concentration, sea-ice thickness, position, and distance to coast to predict the u and v components of buoy drift.',
					points: [
						''
					],
					},

					process: [
					{
						title: 'Problem framing',
						body:
						'We started by reading the challenge guidelines and reformulating the task as a supervised regression problem: predicting sea-ice velocity components from wind and environmental variables.',
					},
					{
						title: 'Data exploration',
						body:
						'We visualized the dataset and used correlation heatmaps to understand relationships between wind, ice, position, thickness, and buoy drift.',
					},
					{
						title: 'Preprocessing',
						body:
						'We normalized the data with MinMaxScaler and tested PCA to make the features easier to compare and reduce dimensionality where useful.',
					},
					{
						title: 'Baseline model',
						body:
						'We trained a simple linear regression model as a baseline, giving us an initial reference point with a validation MSE of about 25.',
					},
					{
						title: 'Model comparison and tuning',
						body:
						'We trained and compared KNN, Ridge, Random Forest, and MLP with 5-fold cross-validation, then used GridSearch to tune key parameters such as KNN neighbors and Random Forest settings.',
					},
					],

					impact: [
					{
						title: '15.9 MSE',
						description:
						'best validation result obtained with a Random Forest regressor using 5-fold cross-validation.',
					},
					{
						title: 'Model comparison',
						description:
						'Random Forest outperformed the other tested models, followed by KNN and MLP.',
					},
					{
						title: 'Climate AI',
						description:
						'The project showed how machine learning can be applied to climate-related data and environmental prediction problems.',
					},
					],
				},
			},
			{
				slug: 'feedback-classification-codeml-hackathon',
				featuredPosition: 4,
				categories: ['Featured', 'AI'],
				year: '2020',
				title: 'CodeML Hackathon: Developing AI Models to Classify Product Feedback',
				description:
					'A CodeML Hackathon challenge organized by PolyAI, using machine learning to classify product feedback as positive or negative.',
				discipline: 'AI, Machine Learning',
				role: 'Lead Developer',
				timeline: '48 hours',
				visual: {
					title: 'CodeML Hackathon',
					theme: 'light',
					tags: ['AI', 'sentiment analysis', 'text classification', 'hackathon'],
					media: [
						{
							type: 'image',
							label: 'CodeML Hackathon flyer, accessed from https://codeml.ca/ (2022)',
							src: '/projects/codeml-poly-hackathon/flyer.png',
						},
						{
							type: 'image',
							label: 'CodeML Hackathon results',
							src: '/projects/codeml-poly-hackathon/results.png',
						},
					],
				},
				caseStudy: {
					kicker: 'AI / Sentiment Analysis / Text Classification',
					heroTitle: 'CodeML Hackathon: Developing AI Models to Classify Product Feedback',
					heroSubtitle:
						'This project was developed during CodeML Hackathon 2020, a 48-hour hackathon organized by PolyAI. The challenge was to predict whether product feedback was positive or negative.',

					overview: [
						{
							label: 'My Role',
							value:
								'I led the development of the machine learning pipeline, including data preprocessing, text feature extraction, baseline model training, and experimentation with pre-trained language models.',
						},
						{
							label: 'Technical Details',
							value:
								'Machine Learning: Python, Scikit-learn<br />Dataset: Product feedback comments (text) labeled as positive or negative.',
						},
						{
							label: 'Timeline',
							value: 'CodeML Hackathon, 2020',
						},
					],
					links: [
						{
							label: 'Github repository',
							href: 'https://github.com/carodak/PolyAI-Hackaton',
						},
					],

					problem: {
						title:
							'Companies receive large amounts of product feedback that are difficult to classify manually.',
						description:
							'Could an AI model predict if a new product comment is positive or negative?',
					},

					solution: {
						title:
							'I built machine learning models to classify product feedback as positive or negative.',
						description:
							'I first developed a traditional NLP pipeline using TF-IDF and Logistic Regression, then tested a pre-trained Google ELECTRA model to improve performance.',
						points: [
							'I created a baseline model with TF-IDF features and Logistic Regression.',
							'I implemented and tuned a Google ELECTRA model using SimpleTransformers.',
							'The ELECTRA-based model reached 3rd place on the Kaggle leaderboard for the challenge.',
						],
					},

					process: [
						{
							title: 'Text preprocessing',
							body:
								'I loaded the dataset and applied NLP preprocessing steps such as tokenization, cleaning, and normalization.',
						},
						{
							title: 'Baseline text model',
							body:
								'I transformed the comments into TF-IDF features and trained a Logistic Regression model as a first baseline for positive vs. negative feedback classification.',
						},
						{
							title: 'Pre-trained language model',
							body:
								'I then implemented a second version using Google ELECTRA through the SimpleTransformers library and tuned the model to improve performance.',
						},
						{
							title: 'Submission and comparison',
							body:
								'I submitted my predictions and compared my performance on the Kaggle leaderboard, where my ELECTRA-based approach ranked 3rd for the sentiment classification challenge.',
						},
					],

					impact: [
						{
							title: '3rd place',
							description:
								'Our ELECTRA-based model reached 3rd place on the Kaggle leaderboard for the sentiment classification challenge.',
						},
						{
							title: 'ELECTRA model',
							description:
								'The project gave me hands-on experience with a pre-trained language model and showed how it could outperform a simpler baseline.',
						},
					],
				},
			},
			{
				slug: 'designing-vr-simulation-mri-experience',
				featuredPosition: 5,
				categories: ['Featured', 'VR'],
				year: '2024-2025',
				title: 'Designing a VR Simulation to Improve the MRI Experience',
				description:
					'Mission Control is a VR simulation designed to help participants become familiar with the MRI process and practice staying still through real-time audiovisual feedback.',
				discipline: 'VR, Serious Games, Healthcare',
				role: 'Lead VR Developer, Designer',
				timeline: '2024-2025',
				visual: {
					title: 'Mission Control',
					theme: 'dark',
					tags: ['VR', 'Unity', 'serious game', 'MRI preparation'],
					media: [
						{
							type: 'video',
							label: 'Mission Control trailer',
							src: '/projects/mission-control/Mission_Control_Trailer.mp4',
						},
					],
				},
				caseStudy: {
					kicker: 'Virtual Reality / Serious Game / MRI Preparation',
					heroTitle: 'Designing a VR Simulation to Improve the MRI Experience',
					heroSubtitle:
						'Mission Control is a VR simulation designed to help participants become familiar with the MRI experience before their scan, while practicing stillness through real-time feedback.<br />This project was part of my full-time developer role at Douglas Mental Health Institute.',

					overview: [
						{
							label: 'My Role',
							value:
								'I was the lead VR developer and designer for the full version of the simulation. I worked on preliminary research, VR design, prototyping, Unity development, playtesting, optimization, Meta Store submission, and scientific writing.',
						},
						{
							label: 'Technical Details',
							value:
								'VR Development: Unity, C#',
						},
						{
							label: 'Timeline',
							value:
								'Initial prototype: 24h. Full version: 2 years.',
						},
					],
					links: [{
						label: 'Official App Page',
						href: 'https://carodak.github.io/Mission-Control-MRI-Simulation-Info/',
					}],

					problem: {
						title:
							'MRI scans can be difficult for participants because of anxiety, narrow space, long scan duration, and the need to remain still.',
						description:
							'When participants move during the scan, image quality can be reduced. ',
						points: [
							'Participant movement can reduce the quality of brain images.',
							'This may increase costs, create additional work for staff and lead to the sedation of the participant.',
						],
					},

					solution: {
						title:
							'We developed a VR simulation that familiarizes participants with the MRI process before the real scan.',
						description:
							'The simulation uses a space mission narrative to make the experience more engaging. Participants practice staying still while receiving real-time feedback.',
						points: [
							'The VR simulation introduces participants to key parts of the MRI procedure.',
							'Real-time feedback encourages them to practice remaining still.',
							'Storytelling and gamification make the training experience more fun.',
						],
					},

					process: [
						{
							title: '24-hour prototype',
							body:
								'We first built a VR prototype during McGill XR Hackathon 2024 and won 1st place.',
						},
						{
							title: 'Research and framing',
							body:
								'I gathered information on similar VR applications, MRI preparation tools, and project constraints, then structured the core components of the simulation, including tools, technologies, features, and interaction mechanics.',
						},
						{
							title: 'Co-design',
							body:
								'I consulted with co-designers and researchers to shape the VR experience, including the narrative structure, educational content, and stillness-training mechanics.',
						},
						{
							title: 'VR development',
							body:
								'I led the development of the full VR simulation in Unity with C# over 2 years, expanding the prototype into a complete experience with storytelling, gamification, real-time feedback, and interactions. I conducted playtests, improved the app based on feedback and usability issues, optimized performance, published it to the Meta Store.',
						},
						{
							title: 'Dissemination',
							body:
								'I wrote a scientific preprint and am preparing a paper focused on the design and development process.',
						},
					],

					
					impact: [
						{
							title: '1st place',
							description:
								'won 1st place at McGill XR Hackathon 2024 with the initial 24-hour prototype.',
						},
						{
							title: 'Accessible for Free',
							description:
								'the App is available on the Meta Store to make the simulation more accessible to participants, families, researchers, and professionals.',
						},
						{
							title: 'Outreach',
							description:
								'I wrote a preprint and am preparing a methods paper describing the design and development process behind the VR simulation.',
						},
					],
				},
			},
			{
				slug: 'match-3-puzzle-task-automated-generation',
				featuredPosition: 6,
				categories: ['Featured', 'Experimental Tasks', 'Data Visualization'],
				year: '2026',
				title: 'Developing a Match-3 Puzzle Task and Automating Puzzle Generation',
				description:
					'This project outlines the development of a match-3 puzzle task with a Python tool that automatically generates new solvable puzzles.',
				discipline: 'Cognitive Tasks, Procedural Generation',
				role: 'Lead developer',
				timeline: '2024-2025',
				visual: {
					title: 'Match-3 Planning Task',
					theme: 'light',
					tags: ['cognitive assessment', 'procedural generation', 'Python', 'PsychoPy'],
					media: [
						{
							type: 'video',
							label: 'Match-3 puzzle task interface',
							src: '/projects/match3-puzzle/match3-demo.mp4',
						},
						{
							type: 'image',
							label: 'Automated puzzle generation example',
							src: '/projects/match3-puzzle/generation.png',
						},
					],
				},
				caseStudy: {
					kicker: 'Cognitive Assessment / Puzzle Generation / Experimental Task',
					heroTitle: 'Developing a Match-3 Puzzle Task and Automating Puzzle Generation',
					heroSubtitle:
						'This project explored how a match-3 puzzle task could be used to assess planning, a cognitive skill involved in thinking ahead and solving problems. To support repeated use over time, I built a Python tool that automatically generates new solvable puzzles.<br />Developed as part of my full-time software developer role at Douglas Mental Health Institute.',

					overview: [
						{
							label: 'My Role',
							value:
								'I was the main developer for the puzzle-generation tool, while also contributing to the development of the match-3 task in PsychoPy. I helped with preliminary research, system architecture, and the selection of the algorithmic approach for generating puzzles.',
						},
						{
							label: 'Technical Details',
							value:
								'Task Development: PsychoPy, PsychoJS, Vanilla JavaScript<br />Puzzle Generation: Python',
						},
						{
							label: 'Timeline',
							value:
								'Full Project: 1 year',
						},
					],
					links: [
						{
							label: 'Match-3 task OSF project',
							href: 'https://doi.org/10.17605/OSF.IO/HNAQ9',
						},
						{
							label: 'Puzzle generation OSF project',
							href: 'https://doi.org/10.17605/OSF.IO/3PZ74',
						},
						{
							label: 'Puzzlegen Python package',
							href: 'https://pypi.org/project/puzzlegen/',
						},
					],

					problem: {
						title:
							'Planning is a core cognitive skill, but it can be hard to evaluate repeatedly using the same task.',
						description:
							'Many cognitive tasks become less useful when people see the same items again and start remembering them. For research on how cognition changes over time, we needed a way to create new puzzle versions without manually designing every item.',
						points: [
							'Planning involves thinking ahead, solving problems, and choosing actions to reach a goal.',
							'Repeated exposure to the same puzzles can make participants familiar with the answers.',
							'Manually creating a lot of puzzle sets that respect the same constraints is slow and difficult to scale.',
						],
					},
					solution: {
						title:
							'We created a match-3 puzzle task and automated the generation of new solvable puzzles.',
						description:
							'Participants solve match-3 puzzles as a planning task. Behind the scenes, the Python generator creates new puzzle sets offline, and a BFS solver checks that each puzzle can be solved before it is used.',
						points: [
							'The match-3 format makes the task more engaging and game-like.',
							'The Python tool automatically generates new puzzle sets offline.',
							'An algorithm (BFS solver) validates that generated puzzles are solvable.',
						],
					},
					process: [
						{
							title: 'Preliminary research',
							body:
								'I conducted preliminary research on puzzle games to clarify the scientific and technical requirements of the project.',
						},
						{
							title: 'System architecture and design',
							body:
								'I helped define the system architecture, including how the experimental task, puzzle-generation tool, puzzle files, and deployment workflow would fit together.',
						},
						{
							title: 'Puzzle generation strategy',
							body:
								'I reviewed different computational puzzle-generation methods and selected a generate-and-test approach using a breadth-first search solver to validate puzzle solvability.',
						},
						{
							title: 'Development',
							body:
								'I participated in the development of the match-3 task in PsychoPy/PsychoJS and led the development of the Python puzzle-generation tool, including the implementing the BFS solver and reusable package. I also refined the design and implementation based on team feedback.',
						},
						{
							title: 'Scientific writing',
							body:
								'I wrote a scientific methods paper describing the design process, the task, and the automated puzzle-generation approach.',
						},
					],
					challenges: [],
					impact: [
						{
							title: 'Reusable generation tool',
							description:
								'the project produced a Python package for automatically generating new match-3 puzzle sets.',
						},
						{
							title: 'Open-source task',
							description:
								'the match-3 task and generation workflow were made openly accessible, with the full process documented.',
						},
						{
							title: 'Research dissemination',
							description:
								'the project led to a scientific methods paper describing the task design and computational puzzle-generation process.',
						},
					],
				},
			},
			{
				slug: 'design-poster-cyberstats-challenge-serene-risc-2019',
				featuredPosition: 7,
				categories: ['Featured', 'Data Visualization'],
				year: '2019',
				title: 'CyberStats Challenge 2019: Poster Highlighting Cybersecurity Issues',
				description:
					'We used cybersecurity and business statistics from Statistics Canada, the Government of Canada, and the Ponemon Institute to communicate cybersecurity issues affecting small and medium-sized businesses.',
				discipline: 'Data Visualization, Cybersecurity',
				role: 'Data Analyst, Designer',
				timeline: 'A few weeks',
				visual: {
					title: 'CyberStats Challenge',
					theme: 'light',
					tags: ['data visualization', 'cybersecurity', 'statistics', 'poster'],
					media: [
						{
							type: 'image',
							label: 'CyberStats Challenge - Our Poster',
							src: '/projects/cyberstats-challenge/poster.png',
						},
					],
				},
				caseStudy: {
					kicker: 'Data Visualization / Cybersecurity / Science Communication',
					heroTitle: 'CyberStats Challenge 2019: Highlighting Cybersecurity Issues',
					heroSubtitle:
						'This project was created for the 2019 CyberStats Challenge organized by SERENE-RISC. Working in a team of two, we used data from Statistics Canada’s Canadian Survey of Cyber Security and Cybercrime, the Government of Canada, and the Ponemon Institute to design an informative poster about cybersecurity issues affecting small and medium-sized businesses.',

					overview: [
						{
							label: 'My Role',
							value:
								'I helped select and interpret the data, define the key message of the poster, and design the final visual presentation for the competition.',
						},
						{
							label: 'Technical Details',
							value:
								'Data Sources: <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/181015/dq181015a-eng.htm" target="_blank">Statistics Canada, Canadian Survey of Cyber Security and Cybercrime</a>; Government of Canada, Key Small Business Statistics; Ponemon Institute, 2018 State of Cybersecurity in Small & Medium Size Businesses.',
						},
						{
							label: 'Timeline',
							value: 'A few weeks',
						},
					],
					links: [
						{
							label: 'Challenge page',
							href: 'https://www.serene-risc.ca/fr/evenements/developpement-professionnel/concours-etudiant-visant-a-vulgariser-des-statistiques-sur-la-cybersecurite-et-la-cybercriminalite',
						},
						{
							label: 'SERENE-RISC / Statistics Canada',
							href: 'https://www.serene-risc.ca/en/statistics-canada',
						},
						{
							label: 'Statistics Canada data release',
							href: 'https://www150.statcan.gc.ca/n1/daily-quotidien/181015/dq181015a-eng.htm',
						},
						{
							label: 'Winner announcement',
							href: 'https://www.serene-risc.ca/fr/nouvelles/c_-dakoure-et-c_-felx-leduc-remportent-le-defi-cyberstats-de-serene-risc',
						},
					],

					problem: {
						title:
							'Cybersecurity and cybercrime statistics can be difficult for the public to understand at a glance.',
						description:
							'The challenge invited Canadian graduate students to use research, analysis, and creativity to make cybersecurity and cybercrime statistics more accessible through informative posters.',
						points: [
							'Small and medium-sized businesses can be vulnerable to cybersecurity threats, but the risks are not always easy to communicate clearly.',
							'The goal was not only to analyze the data, but to turn it into an accessible visual message.',
							'The poster needed to make cybersecurity statistics understandable and visually engaging for a broader audience.',
						],
					},

					solution: {
						title:
							'We designed an informative poster to communicate cybersecurity issues affecting small and medium-sized businesses.',
						description:
							'We selected statistics from multiple sources, shaped them into a clear message, and designed a poster that made the information easier to understand for participants at the event.',
						points: [
							'We used cybersecurity and business statistics from trusted sources.',
							'We focused on small and medium-sized businesses because they face important cybersecurity challenges.',
							'We combined data analysis and storytelling to make the information more accessible.',
						],
					},

					process: [
						{
							title: 'Data selection',
							body:
								'We reviewed cybersecurity and business statistics from Statistics Canada, the Government of Canada, and the Ponemon Institute to identify the most relevant information for the poster.',
						},
						{
							title: 'Message design',
							body:
								'We selected the key statistics and shaped them into a clear visual narrative about cybersecurity issues affecting small and medium-sized businesses.',
						},
						{
							title: 'Presentation',
							body:
								'We presented our poster at the GoSec 2019 conference, where we shared our results with participants and met people from different professional backgrounds.',
						},
					],
					challenges: [],

					impact: [
						{
							title: '1st place',
							description:
								'our poster won the CyberStats Challenge and placed first in the competition.',
						},
						{
							title: 'Science communication',
							description:
								'the project helped translate cybersecurity statistics into a more accessible visual format.',
						},
						{
							title: 'GoSec 2019',
							description:
								'we presented the poster at the GoSec 2019 conference, which was a motivating opportunity to exchange with people from different backgrounds.',
						},
						{
							title: 'Links',
							description:
								'<a href="https://www.serene-risc.ca/fr/evenements/developpement-professionnel/concours-etudiant-visant-a-vulgariser-des-statistiques-sur-la-cybersecurite-et-la-cybercriminalite" target="_blank">Challenge page</a> · <a href="https://www.serene-risc.ca/en/statistics-canada" target="_blank">SERENE-RISC / Statistics Canada</a> · <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/181015/dq181015a-eng.htm" target="_blank">Statistics Canada data release</a> · <a href="https://www.serene-risc.ca/fr/nouvelles/c_-dakoure-et-c_-felx-leduc-remportent-le-defi-cyberstats-de-serene-risc" target="_blank">Winner announcement</a>',
						},
					],
				},
			},
			{
				slug: 'developing-spicytracks-mit-reality-hack-2025',
				featuredPosition: 8,
				categories: ['Featured', 'VR', 'Fun&Games'],
				year: '2025',
				title: 'Developing SpicyTracks: A Musical Kitchen App in Mixed Reality',
				description:
					'A playful mixed-reality music game built during MIT Reality Hack 2025, where kitchen items become musical instruments, making music creation more playful, intuitive, and accessible.',
				discipline: 'XR, Interaction Design, Creative Technology',
				role: 'XR Developer',
				timeline: '4 days',
				visual: {
					title: 'SpicyTracks',
					theme: 'dark',
					tags: ['XR', 'mixed reality', 'music', 'Unity', 'Meta Quest'],
					media: [
						{
							type: 'video',
							label: 'SpicyTracks project video',
							src: 'https://www.youtube.com/watch?v=VjXKWFOcKXE',
						},
						{
							type: 'image',
							label: 'SpicyTracks team at MIT Reality Hack 2025',
							src: '/projects/spicytracks/team.jpg',
						},
					],
				},
				caseStudy: {
					kicker: 'Mixed Reality / Music / Accessibility / Hackathon',
					heroTitle: 'Developing SpicyTracks: A Musical Kitchen App in Mixed Reality',
					heroSubtitle:
						'SpicyTracks was created during MIT Reality Hack 2025. Our team designed a mixed-reality app that takes place in a kitchen where everyday items become musical instruments, making music creation more playful, intuitive, and accessible.',

					overview: [
						{
							label: 'My Role',
							value:
								'I led the XR development in Unity, implemented interactions such as grab, poke, and gaze-based controls, integrated the 3D models and sounds created by our artists, and added the sound recording system developed by the other developer.',
						},
						{
							label: 'Technical Details',
							value:
								'XR Development: Unity, C#.',
						},
						{
							label: 'Timeline',
							value: '4 days',
						},
					],
					links: [
						{
							label: 'SpicyTracks project video',
							href: 'https://www.youtube.com/watch?v=VjXKWFOcKXE',
						},
						{
							label: 'SpicyTracks Devpost',
							href: 'https://devpost.com/software/spicytracks',
						},
					],

					problem: {
						title:
							'Music-making can be difficult to access for people without musical training or with mobility limitations.',
						description:
							'Traditional instruments can require specific motor skills, prior practice, or physical movements that are not accessible to everyone. Our team wanted to create a more intuitive way to make music using familiar items and playful interactions.',
						points: [
							'Co-creating music can be even harder when people have different abilities or levels of musical training.',
						],
					},

					solution: {
						title:
							'We created a mixed-reality kitchen where everyday objects become musical instruments.',
						description:
							'Users can grab a frying pan, poke a toaster, or use their eyes to look at items such as glasses and spices to trigger sounds.',
						points: [
							'Users can grab a frying pan, poke a toaster, or use their eyes to look at items such as glasses and spices to trigger sounds.',
							'Recording and looping features support collaborative music-making.',
							'The experience was designed around a pentatonic scale so users could create music freely while still producing harmonious results.',
						],
					},

					process: [
						{
							title: 'Concept and prototyping',
							body:
								'The team started from a shared interest in music and accessibility. Our artist used ShapesXR to quickly prototype a kitchen and test the comfort and feel of the experience on Meta Quest.',
						},
						{
							title: 'Development',
							body:
								'I implemented the main kitchen scene in Unity and developed several item interactions, including grabbing, poking, and gaze-based musical controls. I integrated the 3D models and sound assets created by our artist and sound designer, making sure the interactions felt responsive and connected to the kitchen objects. I combined the interactive kitchen scene with the sound recording system developed by the other developer, allowing users to record and layer their musical tracks.',
						},
						{
							title: 'User testing and refinement',
							body:
								'Through multiple tests during the hackathon, we refined the experience to make the interactions more intuitive, playful, and comfortable.',
						},
					],

					challenges: [
						{
							title: 'Making interactions feel musical',
							description:
								'Making physical interactions such as grabbing, shaking, poking, and looking feel naturally connected to sound generation.',
						},
						{
							title: 'Harmonizing sound and visuals',
							description:
								'The team worked carefully to make the visual style and sound design feel like one cohesive world.',
						},
						{
							title: 'XR build and device issues',
							description:
								'We ran into unexpected device and build issues early in the hackathon, but resolved them quickly with help from mentors.',
						},
					],

					impact: [
						{
							title: 'Accessible music-making',
							description:
								'the project explored how XR can make music creation more intuitive for people without musical training or with different mobility needs.',
						},
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
			{ place: 'University of Montreal', role: 'Technical Assistant, Support', date: '2019-2020' },
			{ place: 'McGill University', role: 'Exchange Studies in Computer Science, Game Algorithms', date: '2018 (1 semester)' },
			{ place: 'LIRMM (Montpellier, France)', role: 'Student Trainee, AI prediction', date: 'July 2027' },
		],
	},
	contact: {
		teaser: 'Still here?',
		heading: 'Work with',
		headingEmphasis: 'me.',
		emailIntro: 'or send an email to ',
		email: 'codeofcaro@gmail.com',
	},
	pages: {
		about: {
			title: 'About',
			body:
				'Incoming.',
		},
		play: {
			title: 'Play',
			body:
				'This page is still loading in my brain. More details coming soon.',
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
