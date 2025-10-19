# langdev25-scoping
Demo project showing scoping in Freon v2 used for the presentation at LangDev 2025, Amsterdam

## Getting Started

In the following the root of the project will be indicated with '~'.

### Install All Necessary Packages
```bash
npm install
```

### Run Freon Generator
Run the generator and see the generated files appearing in the folder where you
decided to store the generated code:

```bash
npm run generate
```

### Start the Server
Open a second terminal and start the server:
```bash
npm run server
```
Note that anything that is saved in the editor will be stored in `~/modelstore`

### Start the Web Editor
Open another (bash) terminal, and start the generated editor from it:
```bash
npm run styles
npm run dev
```
The first (prepare-app) command only needs to be done once, and only
needs to be run again if you change the styling.

The last command opens your preferred browser with the generated editor for the language
on [localhost:5000](http://localhost:5000/).

### Try Out the Editor

If you are having trouble using the editor, have a look at the key-bindings under the *Help* menu.

If you change the theme, run `npm run prepare-app` to update the running app with the new style.

## Going Through the Steps from the Demo

This project starts with the files needed for step 1 in the demo available in `src/defs`. 
When you want to proceed to the next step, clean the `src/defs` folder (i.e. remove all files), 
copy the files from `Demo-step2` into the `src/defs` folder, and run the generator again:

```bash
npm run generate
```

If you still have the webserver from the command `npm run dev` running , it will automatically pick up the changes. If not, simply restart the server:

```bash
npm run dev
```

You only need to re-run `npm run styles`, when you change the theme or other forms of styling to the app.

Repeat this process for the other demo steps.

