# Getting Started with Github Search App

## The Project
[![Netlify Status](https://api.netlify.com/api/v1/badges/465be345-e8fd-4ae9-b7bb-49722ca85ca2/deploy-status)](https://app.netlify.com/sites/github-search-app-v0/deploys)

You can reach the application at https://github-search-app-v0.netlify.app/  , to access the application you can enter any valid email and min 6 character any password.

This simple single page application built with

* React.js
* Redux 
* React Router
* Scss
* material-ui and bootstrap

That allows the users to search the **users** or **repositories** on GitHub. The results will be fetched from the GitHub API.

* [GitHub Search API Docs](https://developer.github.com/v3/search/)
* [Random Quote API](https://api.quotable.io/random)



For each repository display the repository user details returned from API and the repository name, about, stars and other statistics below it. And navigate to repo at github.com.
For the users, show the profile picture, name and a random quote data their profile.

For users;
On large screens (width > 768px), the grid will be 3 columns.
On smaller screens (width <= 768px), the grid will be 2 columns.


## Tasks

- [x] Frontend library should be React.js  
- [x] Global state management -Redux
- [x] Routing (user should see relevant page's route in browser's address bar)
- [x] Login page (can be dummy, no need to authentication)
- [x] Navigation bar
- [x] A form page with simple validations (submitting wrong input should inform the user)
- [x] For dummy routes/pages, content can be filled with lorem ipsum (https://lipsum.com/)
- [x] AJAX requests (backend or API is not necessary, even simulating data gathering with mocks is fine)
- [x] Share project on any Public Source Control Provider (Gitlab, Github, Bitbucket)
- [x] Name your app and add a small description about what's the purpose of the app

Bonuses

- [ ] Typescript usage
- [x] React hook usage
- [ ] Any other API methods of React that's not commonly used in general (e.g: refs, memo, Context)
- [x] ES6+ Javascript usage as much as possible
- [x] Any choice of styling (UI kits, old school CSS, CSS in JS, etc.)
- [x] Deploying publicly your code to somewhere (Netlify, Github pages, Heroku) and sharing link with us
- [ ] Immutable data usage over mutable types

Extras:

-    used 'lodash.debounce'
-    custom hook
-    unit tests with @testing-library and coverage over 70%
-    ES6  
    - import/export at almost all components
    - Class at almost all components
    - Destruct at App.js line 54  
    - let and const at App.js line 54  
    - Arrow functions at App.js line 16  
    - Default Parameter Values at reducers/GitData.js line 10  
    - Object Rest operator at reducers/GitData.js line 13 16 23  
    -   
-    Google maps integration with embedded iframe
-    localStorage
-    lazy loading for LoginView component
