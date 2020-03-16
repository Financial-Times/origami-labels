'use strict';

// Shared colour values
const colors = {
	black20: 'ccc1b7',
	candy: 'ff7faa',
	claret: '990f3d',
	crimson: 'cc0000',
	jade: '00994d',
	lemon: 'ffec1a',
	sky: 'cce6ff',
	slate: '262a33',
	teal: '0d7680',
	velvet: '593380',
	wasabi: '96cc28'
};

// Types of Origami project
const origamiTypes = [
	'cli',
	'component', // Yes, I know it's not a type... yet
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
		description: `We'd appreciate some help with this one`,
		color: colors.wasabi,
		aliases: [
			'status: help wanted'
		]
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
		name: 'proposal',
		description: `A proposed change which requires approval or discussion`,
		color: colors.slate,
		aliases: []
	},
	{
		name: 'released',
		description: `This work has been released and is now live`,
		color: colors.black20,
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
		name: 'major',
		description: `Add to a PR to trigger a MAJOR version bump when merged`,
		color: colors.claret,
		aliases: []
	},
	{
		name: 'minor',
		description: `Add to a PR to trigger a MINOR version bump when merged`,
		color: colors.jade,
		aliases: []
	},
	{
		name: 'patch',
		description: `Add to a PR to trigger a PATCH version bump when merged`,
		color: colors.crimson,
		aliases: []
	}

];
