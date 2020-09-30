
# Origami Labels

GitHub action to sync a repo's issue labels with the standard Origami set.


## Usage

To use this action, create the following file in your GitHub repo:

```
.github/workflows/sync-repo-labels.yml
```

```yml
on: [issues, pull_request]
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

You can do this by running the following command from a repo:

```bash
mkdir -p .github/workflows && curl https://raw.githubusercontent.com/Financial-Times/origami-labels/v1/example.yml --output .github/workflows/sync-repo-labels.yml
```


## Labels

You can find the current labels in [`./labels.js`](labels.js). Edit this file to make changes to Origami's suite of labels.

### Current Labels

Label|Description|Color|Example
-----|-----|-----|-----
blocked|Work blocked by something else|`#CC0000` (crimson)|<img height="25px" alt="label-blocked" src="https://user-images.githubusercontent.com/138944/76612724-c8c00480-6514-11ea-9dee-5e2344d31864.png">
breaking|Will require a major version bump|`#990F3D` (claret)|<img height="25px" alt="label-breaking" src="https://user-images.githubusercontent.com/138944/76612740-d7a6b700-6514-11ea-9cb2-ecccfa30dc6b.png">
bug|Something isn't working|`#CC0000` (crimson)|<img height="25px" alt="label-bug" src="https://user-images.githubusercontent.com/138944/76612741-d7a6b700-6514-11ea-885a-567d110b9e84.png">
current|Used to mark an issue as planned for Origami's current six-week cycle|`#FFB885` (mandarin 60% on white)|<img height="25px" alt="label-current" src="https://user-images.githubusercontent.com/138944/78148389-b9095100-742c-11ea-9ae7-32571eb0a01b.png">
next|Used to mark an issue to discuss in Origami's next six-week planning session|`#FFCFAD` (mandarin 40% on white)|<img height="25px" alt="label-next" src="https://user-images.githubusercontent.com/10405691/79581736-c5dfa300-80c2-11ea-8c52-1e4148b3adcb.png">
dependencies|This is maintenance work relating to dependency bumps|`#FFEC1A` (lemon)|<img height="25px" alt="label-dependencies" src="https://user-images.githubusercontent.com/138944/76756794-4fc3e580-677e-11ea-9364-c16c3231e3e4.png">
discussion|General discussion including support questions|`#FF7FAA` (candy)|<img height="25px" alt="label-discussion" src="https://user-images.githubusercontent.com/138944/76612742-d83f4d80-6514-11ea-9a2e-1d4b3b3eec8d.png">
documentation|Improvements or additions to documentation|`#CCE6FF` (sky)|<img height="25px" alt="label-documentation" src="https://user-images.githubusercontent.com/138944/76612743-d83f4d80-6514-11ea-8d29-cb9ef62751cf.png">
duplicate|This issue or pull request already exists|`#CCC1B7` (black-20)|<img height="25px" alt="label-duplicate" src="https://user-images.githubusercontent.com/138944/76612745-d8d7e400-6514-11ea-83fa-66ce584708bf.png">
feature|New feature request|`#00994D` (jade)|<img height="25px" alt="label-feature" src="https://user-images.githubusercontent.com/138944/76612746-d8d7e400-6514-11ea-910c-bc0a795ab7ae.png">
good starter issue|Good for newcomers|`#0D7680` (teal)|<img height="25px" alt="label-good-starter-issue" src="https://user-images.githubusercontent.com/138944/76612748-d9707a80-6514-11ea-8a98-5caafa1f6fc2.png">
help wanted|We'd appreciate some help with this|`#96CC28` (wasabi)|<img height="25px" alt="label-help-wanted" src="https://user-images.githubusercontent.com/138944/76747988-ef2eab80-6771-11ea-90f0-71ad15530cc9.png">
maintenance|Technical tasks that might make things better|`#FFEC1A` (lemon)|<img height="25px" alt="label-maintenance" src="https://user-images.githubusercontent.com/138944/76612752-d9707a80-6514-11ea-9af3-d747bc12696d.png">
okr|This issue or pull request helps us meet an OKR|`#0f5499` (oxford)|<img height="25px" alt="label-okr" src="https://user-images.githubusercontent.com/138944/78137047-89eae380-741c-11ea-9443-ff05e14223b4.png">
pattern|A new pattern which impacts multiple components|`#ac92b3` (velvet 50% on paper)|<img height="25px" alt="label-proposal" src="https://user-images.githubusercontent.com/10405691/79582009-1951f100-80c3-11ea-9b35-642e4abbbbe9.png">
proposal|A proposed change which requires approval or discussion|`#262a33` (slate)|<img height="25px" alt="label-proposal" src="https://user-images.githubusercontent.com/138944/76612754-da091100-6514-11ea-96b9-2602d529ea4f.png">
security|This includes a security patch|`#CC0000` (crimson)|<img height="25px" alt="label-security" src="https://user-images.githubusercontent.com/138944/76756796-50f51280-677e-11ea-9cc9-e790ecf8f22a.png">
wontfix|This will not be worked on|`#CCC1B7` (black-20)|<img height="25px" alt="label-wontfix" src="https://user-images.githubusercontent.com/138944/76612756-daa1a780-6514-11ea-8091-0509d9e94cac.png">

#### Origami-Type Labels

Origami-type labels will be automatically added to issues based on the Origami manifest contained within the repo. These map to the types defined in the [Origami Manifest Spec](https://origami.ft.com/spec/v1/manifest/#origamitype).

Label|Description|Color|Example
-----|-----|-----|-----
[origamiType]|Relates to an Origami [origamiType]|`#593380` (velvet)|<img height="25px" alt="label-service" src="https://user-images.githubusercontent.com/138944/76617875-19d4f600-651f-11ea-84bb-111122ce9203.png">

#### Continuous Delivery Labels

These labels are used to automate releases.

Label|Description|Color|Example
-----|-----|-----|-----
release:major|Add to a PR to trigger a MAJOR version bump when merged|`#990F3D` (claret)|<img height="25px" alt="label-major" src="https://user-images.githubusercontent.com/138944/76637877-6af6e100-6543-11ea-9344-27c71860030b.png">
release:minor|Add to a PR to trigger a MINOR version bump when merged|`#00994D` (jade)|<img height="25px" alt="label-minor" src="https://user-images.githubusercontent.com/138944/76637881-6c280e00-6543-11ea-811f-3cca4bc63cf9.png">
release:patch|Add to a PR to trigger a PATCH version bump when merged|`#CC0000` (crimson)|<img height="25px" alt="label-patch" src="https://user-images.githubusercontent.com/138944/76637883-6cc0a480-6543-11ea-8fea-11012d88a2b7.png">

### Changing a label name

When you want to change a label's name, it's very important to add the _old_ label name to the list of aliases for that label. This will ensure that the label is renamed rather than being removed then created. Failing to do this will result in loss of data.

  1. Copy the value of the `name` property and add a new entry in that label's `aliases` array
  2. Change the `name` property of the label to your new value

### Changing a label description

Change the `description` property for the label you wish to update.

### Changing a label colour

Add the new color value to the `colors` object. Change the `color` property for the label you wish to update.


## Development

Work should be based on the `master` branch, with changes PRed in.

If your changes are not breaking, merge them into the `v1` branch, and they'll be picked up by every repo running `v1` automatically.

If your changes ARE breaking, then you should create a `v2` branch based on master and update your chosen repo to use the new workflow.
