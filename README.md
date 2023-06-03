# mace.ui
A UI Library extending Bootstrap

## SASS Structure
This libary follows the Inverted Triangle CSS (ITCSS) design pattern:

* **defaults** 
  * provides default values for sass variables not present in the bootstrap library and has been added by this library
* **settings**
  * Provides sass variable values. If you wish to customise or theme this library, replace settings with your own values
* **tools**
  * Import 3rd party libraries such as Bootstrap
* **generics**
  * CSS resets and/or normalize styles, box-sizing definition, etc
* **elements**
  * Styling for unclassed HTML elements, i.e. underlines for anchors on hover
* **objects**
  * Styling for class-based selectors such as containers, wrappers or rows
* **components**
  * Styling for specific UI components
* **utilities**
  * utility classes that can be applied to any element or component to override their behaviour, i.e. hide.
* **trumps**
  * If you must overide a style using !important create a trumps file and do it here. Do so sparingly though.


# Development
run the following:

```bash
# Install dependencies
npm i

# Compile Sass
npm run css-compile
```
Examples can then be found in the assets folder.



## Triggering version increments 
To trigger a version increment, add the following to your commit message:
* **Major** - include `BREAKING CHANGE:` in the commit footer
* **Minor** - include `feat:` in the commit subject
* **Patch** - include `fix:` in the commit subject