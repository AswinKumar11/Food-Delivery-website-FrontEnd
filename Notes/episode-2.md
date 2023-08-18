Episode 2 Notes

1. npm init command should be used at first for intializing the configuration for node modules.

We can install all dependencies includes bundler using npm commands.

2. We need to install a bundler for minify our project and combine all the html css and js files.(Parcel webpack vite)

  diff b/w ~ and ^ 
  ~ - will take major updates from dependencies.(2.8.3 to 2.9.3)
  ^ - will take only minor updates from dependencies.(2.8.3 to 2.8.4)

3. After installing bundler we'll get node modules (which will have only transitive dependencies of parcel p.s it will not have react.we have to install these seprately) and packageLock.json which will have exact version of dependencies during development.

4. with the help of package.json and packagelock.json we can recreate our node modules. As node modules is heavy we are not pushing it to github.


5. npx parcel index.html is used to host the project in localHost(local server).
   npx parcel build index.html is used for production build .

   diff b/w both is optimisation is high on production build.

         npm is to install
         npx is to execute files

         we are giving index.html to help parcel to find the entry point of our project.(we have to remove main key value pair from package.json)

6. CDN links are not preferred.

7. Install react and reactDOM from npm.

8. parcel will introduce new file called .parcel-cache file. Which will be used by parcel to give faster dev builds.
       * parcel will remove unused code (Tree shaking).
       * it is using file watching algorithms (written in C++) and HMR (Hot Module Replacement).
       * it will optimize image, bundle the files, minify the files and folders, compress the folders.
       * it will do code-spillting and code splitting.
       * it will give differential bundling - Supports old browsers.
       * it will give clear and proper error messages.
       parcel doc link: https://parceljs.org/docs/.

why parcel is having dist files?


9. we can configure the browserList that our app should support in package.json.