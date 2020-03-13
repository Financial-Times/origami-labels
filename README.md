
# Origami Labels

GitHub action to sync a repo's issue labels with the standard Origami set.


## Usage

To use this action, create the following file in your GitHub repo:

```
.github/workflows/sync-repo-labels.yml
```

```yml
# Sync labels whenever an issue is opened
on:
  issues:
    types: [opened]

jobs:
  sync-labels:
    runs-on: ubuntu-latest
    name: Sync repository labels
    steps:
      - uses: Financial-Times/origami-labels@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

:warning: Whenever an issue is opened, the workflow will execute. This overrides all labels in the repository and may result in loss of data if it's run on a repo that isn't owned by Origami.


## Labels

You can find the current labels in [`./labels.js`](labels.js). Edit this file to make changes to Origami's suite of labels.

### Changing a label name

When you want to change a label's name, it's very important to add the _old_ label name to the list of aliases for that label. This will ensure that the label is renamed rather than being removed then created. Failing to do this will result in loss of data.

  1. Copy the value of the `name` property and add a new entry in that label's `aliases` array
  2. Change the `name` property of the label to your new value

### Changing a label description

Change the `description` property for the label you wish to update.

### Changing a label colour

Add the new color value to the `colors` object. Change the `color` property for the label you wish to update.
