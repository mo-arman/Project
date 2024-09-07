# React js Project

# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minifiaction
- Bundling
- Compresse
- Consistent Hashing
- Code Spliting
- Differential Bundling - support older browser
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Let's Get The Hooked
- Two types of Import and Export
 - Named Import => import {CDN} from path;

- Export Named
 - export const CDN_URL;

- Default export
 - export default cdn;

- Default Import
 - import CDN from path;

# React Hooks
 - Normal JS utility function
 - useState() - superpowerful ract variable
 - useEffect()

# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - connect our astore to our app
 - Slice (carSlice)
 - dispatch(action)
 - Selector

# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 -End to End Testing - e2e testing

# setting up testing in our app
 - Install React Tesing Library
 - Install jest
 - Install Babel dependencies
 - Configure Babel
 - Configure parcel coonfig file to disable default babel transpilation
 - Jest - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make jsx work in test cases
 - Include @babel/preset-react inside my  babel config
 - Intall @testing-library/jest-dom
