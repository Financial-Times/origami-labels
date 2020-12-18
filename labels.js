'use strict';

// Shared colour values
const colors = {
	black '000000',
	black20: 'ccc1b7',
	candy: 'ff7faa',
	claret: '990f3d',
	crimson: 'cc0000',
	jade: '00994d',
	lemon: 'ffec1a',
	oxford: '0f5499',
	oxfordWhite50: '87aacc',
	mandarinWhite40: 'ffcfad',
	mandarinWhite60: 'ffb885',
	sky: 'cce6ff',
	slate: '262a33',
	teal: '0d7680',
	velvet: '593380',
	velvetPaper50: 'ac92b3',
	wasabi: '96cc28'
};

// Types of Origami project
const origamiTypes = [
	'cli',
	'component',
	'config',
	'example',
	'imageset',
	'library',
	'meta',
	'module',
	'service',
	'website'
];

// Create and export the labels
module.exports = [

	// Base labels
	{
		name: 'blocked',
		description: `Work blocked by something else`,
		color: colors.crimson,
		aliases: [
			'status: blocked'
		]
	},
	{
		name: 'breaking',
		description: `Will require a major version bump`,
		color: colors.claret,
		aliases: [
			'breaking-change',
			'type: breaking'
		]
	},
	{
		name: 'bug',
		description: `Something isn't working`,
		color: colors.crimson,
		aliases: [
			'type: bug'
		]
	},
	{
		name: 'dependencies',
		description: `This is maintenance work relating to dependency bumps`,
		color: colors.lemon,
		aliases: []
	},
	{
		name: 'discussion',
		description: `General discussion including support questions`,
		color: colors.candy,
		aliases: [
			'type: discussion'
		]
	},
	{
		name: 'documentation',
		description: `Improvements or additions to documentation`,
		color: colors.sky,
		aliases: [
			'type: documentation'
		]
	},
	{
		name: 'duplicate',
		description: `This issue or pull request already exists`,
		color: colors.black20,
		aliases: [
			'status: duplicate'
		]
	},
	{
		name: 'feature',
		description: `New feature request`,
		color: colors.jade,
		aliases: [
			'enhancement',
			'type: enhancement'
		]
	},
	{
		name: 'accessibility',
		description: `An accessibility issue`,
		color: colors.black,
		aliases: [
			'a11y',
			'access'
		]
	},
	{
		name: 'good starter issue',
		description: `Good for newcomers`,
		color: colors.teal,
		aliases: [
			'beginner-friendly',
			'beginner',
			'good-starter-issue',
			'starter-issue',
			'status: good starter issue'
		]
	},
	{
		name: 'help wanted',
		description: `We'd appreciate some help with this`,
		color: colors.wasabi,
		aliases: [
			'status: help wanted'
		]
	},
	{
		name: `current`,
		description: `Used to mark an issue as planned for Origami's current six-week cycle`,
		color: colors.mandarinWhite60,
		aliases: []
	},
	{
		name: `next`,
		description: `Used to mark an issue to discuss in Origami's next six-week planning session`,
		color: colors.mandarinWhite40,
		aliases: ['pending']
	},
	{
		name: 'maintenance',
		description: `Technical tasks that might make things better`,
		color: colors.lemon,
		aliases: [
			'refactor',
			'testing',
			'test',
			'type: maintenance'
		]
	},
	{
		name: 'okr',
		description: `This issue or pull request helps us meet an OKR`,
		color: colors.oxford,
		aliases: []
	},
	{
		name: 'proposal',
		description: `A proposed change which requires approval or discussion`,
		color: colors.slate,
		aliases: []
	},
	{
		name: 'pattern',
		description: `A new pattern which impacts multiple components.`,
		color: colors.velvetPaper50,
		aliases: []
	},
	{
		name: 'security',
		description: `This includes a security patch`,
		color: colors.crimson,
		aliases: []
	},
	{
		name: 'wontfix',
		description: `This will not be worked on`,
		color: colors.black20,
		aliases: [
			'status: wontfix',
			'wont-fix'
		]
	},
	{
		name: 'percy',
		description: `This will tell the percy github action to run`,
		color: colors.oxfordWhite50,
		aliases: []
	},

	// Add in Origami type labels
	...origamiTypes.map(origamiType => {
		return {
			name: origamiType,
			description: `Relates to an Origami ${origamiType}`,
			color: colors.velvet,
			aliases: []
		}
	}),

	// Add in continuous delivery labels
	{
		name: 'release:major',
		description: `Add to a PR to trigger a MAJOR version bump when merged`,
		color: colors.claret,
		aliases: []
	},
	{
		name: 'release:minor',
		description: `Add to a PR to trigger a MINOR version bump when merged`,
		color: colors.jade,
		aliases: []
	},
	{
		name: 'release:patch',
		description: `Add to a PR to trigger a PATCH version bump when merged`,
		color: colors.sky,
		aliases: []
	}

];
