'use strict';

const core = require('@actions/core');
const githubLabelSync = require('github-label-sync');
const labels = require('./labels');

void async function () {
	try {
		const diff = await githubLabelSync({
			accessToken: core.getInput('github-token'),
			repo: process.env.GITHUB_REPOSITORY,
			labels
		});
		console.log(diff);
	} catch (error) {
		core.setFailed(error.message);
	}
}();
