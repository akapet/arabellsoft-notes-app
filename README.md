## How to Setup
1. git clone repo
2. `npm install`
3. `npm run semantic:build`
4. `npm run dev`

## Design Rationales
1. TypeScript was installed to check types
2. prop-types module was added for checking property types
3. To avoid mutation of data, Ramda module (https://ramdajs.com/) was used
4. Function inListMode() was extracted out for easier readability
5. Buttons use reusable component called CommonButton

## Future Improvements
1. Use some form of state management for interacting with notes shared between the components
2. Handle when number of notes are many (like 100). For instance, use scrollable or implement some form of pagination
3. Implement some form of backend API to retrieve/updates the notes
4. Add user authentication
5. Your suggestions?

## Troubleshooting
1. Module not found: Can't resolve './home'
Fix: Restart the server

## Run Test
1. `npm run test`

## References
Project was cloned from https://github.com/skydiver/nextjs-semantic/ 


