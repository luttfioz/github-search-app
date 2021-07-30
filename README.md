# Getting Started with Github Search App

## The Project

This simple single page application built with

* React.js
* Redux 
* [React Router](https://github.com/ReactTraining/react-router)
* Scss

That allows the users to search the **users** or **repositories** or **issues** on GitHub. The results will be fetched from the GitHub API.

* [GitHub Search API Docs](https://developer.github.com/v3/search/)


For each repository display the repository user details returned from API and the repository name, author, stars and other statistics below it. 
For the users, show the profile picture, name, location, any other data you have and link to their profile.

On large screens (width > 768px), the grid will be 3 columns.
On smaller screens (width <= 768px), the grid will be 2 columns.


## Tasks

- [x] Frontend library should be React.js  
- [x] Global state management (the choice is up to the interviewee) -Redux
- [x] Routing (user should see relevant page's route in browser's address bar)
- [ ] Login page (can be dummy, no need to authentication)
- [x] Navigation bar
- [ ] A form page (whether using form library or not up to interviewee) with simple validations (submitting wrong input should inform the user)
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
-    ES6
    - import/export
    - Class
    - Destruct at App.js line 44
    - ulet and const at App.js line 44
    - Arrow functions at App.js line 20
    - Default Parameter Values at reducers/GitData.js line 10
    - Object Rest  at reducers/GitData.js line 13 16 23
