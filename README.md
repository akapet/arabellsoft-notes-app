## Setup
1. clone repo
2. `npm install`
3. `npm run semantic:build`
4. `npm run dev`

## Arabellsoft Design Rationales
1. TypeScript was installed to check types
2. prop-types module was added for checking property types
3. To avoid mutation of data, Ramda module (https://ramdajs.com/) was used.
4. Function inListMode() was extracted out for easier readability
5. Buttons use reusable component called CommonButton

## Troubleshooting
1. Module not found: Can't resolve './home'
Fix: Restart the server

## Run Test
1. `npm run test`

## Semantic UI React
* Installed and used by default.
* Using React components is recommended.
* Read docs: https://react.semantic-ui.com/

## Semantic UI
* you can remove components to reduce css size on `semantic.json`
* `.semantic` folder includes source file, from here it's possible to customize default theme
* change default Google font (Lato) on `.semantic/src/themes/default/globals/site.variables`
* run `npm run semantic:watch` to watch for changes while customizing theme

## References
Project was cloned from https://github.com/skydiver/nextjs-semantic/ 


