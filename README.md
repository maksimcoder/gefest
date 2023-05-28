# Gefest Pro


Welcome. Platform for recruitment automation.

We have provided you with credentials which are inserted into login fields

Test creds:

Admin

Admin
## Run Locally
Below are the instructions on how to setup the template correctly:

**Common as anything**

- Clone the repo
```bash
git clone https://github.com/maksimcoder/gefest.git
```

- Install dependencies
```bash
npm install
```

- Run Locally
```bash
npm start
```

**All steps are done, happy hacking!**
## Prettier and Pre-commit (lint-staged)

When any developer finished his work, he **commits** files and `lint-staged` package runs commands before making a commit.

Below is script which is located in `lint-stages.config.js`.

It is run ONLY for **STAGED** files. So do not be worried to make commits.
```js
// Check TS files for no errors
	'**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

// Lint and format TS and JS files
'**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
],
```

## Commit naming
As there might be several developers there are several rules of commit naming.

There are 2 main branches - ***Master*** and ***Development***.

During coding, make sub-branches from the **Development** branch beginning with the name of task from **Jira** (like REQ-0001 or JD-0021) and short description.

#### Short tips:
- Master branch can only be merged by the **Maintainer** of the project.
- Maintainer of the project must *Approve* MR before merge. 
- MR can be merged by the **Assignee** if there is an approve from **Reviewer**
- Branch naming: _type/developerName/task-number_
- Commit names: Task-number - Description
- Basic branch types: feature, bugfix, hotfix, improve

Below is an example:

![Git flow example](https://miro.medium.com/max/1032/1*VC1_OUUkZawKi3JAcKOQ3g.png)
## Support

For any support, email maintaner of the project.

