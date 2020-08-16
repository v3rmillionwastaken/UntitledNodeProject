# UntitledNodeProject

Welcome to UntitledNodeProject! This is a community-based project where each user will only be allowed to contribute a **maximum** of 500 lines of code (with a maximum of 100 lines of code in deletions).

# Requirements & Instructions

To get started, you'll need the latest LTS version of Node.JS (12.x.x) which can be downloaded [here](https://nodejs.org/en/download/), which also installs NPM.

Clone the repository locally, navigate to the repisitory in your command line, and type `npm i`. To run the code, type `npm start`. We recommend using Visual Studio Code to edit the code and make commits.

# The Rules
1. Each user can only make one successful PR. You need to send a link to your PR on the v3rm thread, and all PRs that are not linked will be declined - no matter how good they are!

2. Your PR will be declined if you add any more than 500 lines of code, or if you remove any more than 100 lines of code.

3. Your PR will be declined if you add any code outside the ./src folder. No changing package.json or anything like that.

4. Your code **cannot** connect to the internet. After npm i is run, the application will not make any web calls. This application must run standalone, with the modules built in to node or any of the following modules that we've added:

    - [Koa](https://koajs.com/) (this is similar to express).
    - [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi) (yes, you can add C code),
    - [win32-api](https://github.com/waitingsong/node-win32-api) - why not? idk what people are gonna try to make.
    - is-even - checks if a number is even
    - is-odd - checks if a number is odd
    - (I will _consider_ adding more as needed and by request.)

5. The app must build with the eslint rules given, and you may not write one-liners.
6. Nothing you add to this can break v3rmillion rules.


# How to Pull Request

### Branches
You cannot commit directly to the master branch. First, you will need to swap to a new branch, eg: `git checkout -b "SegFault_NewWebpage"`, and then you will need to make a pull request to master on GitHub when you're done making your commits.

### eslint
We're using eslint rules to automatically fail builds which don't match the eslint config found in .eslintrc. This means your PR will fail if your code is not properly beautified. To check if your code will meet the style rules, run this in the terminal.

`npm run lint`

If you install the [eslint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), you can see style errors while you're typing. To do this, install the extension and then run the following in your terminal:

`npm i eslint -g `
### Don't use one-liners.
Unfortunately, I can't find any eslint rules to prevent people from writing one liners. It's still possible to do this:
```js
const a = () => { const b = 'b'; return b }
```
Because we're not allowing you to commit more than 500 lines of code, we can't just have you minifying all your code into one line. So, we're checking for this manually when approving your pull request.

# 
## The best contributions to this project will receive the Coder Badge on site.