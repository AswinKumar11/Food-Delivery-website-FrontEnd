Episode 3 notes

1. We can create scripts in package.json
        eg: npx parcel index.html for this script if I define parcel index.html inside script object as start as a key. then to execute it I can use npm start (or) npm run start (instead of npx parcel index.html).
            npm run build (production) npm build will not work.
            We cant use npx start because When you run npx start, you are attempting to execute the start command   using the npx tool. However, if there is no package named start installed locally or globally, it won't work as expected.


                                    JSX IS NOT REACT.
2. JSX is HTML or XML like syntax.
3. JSX is more readable and easy to write.
4. React.createElement and jsx is different but it will give same output.
5. React.createElement will create a object which will be later changed to html in React.DOM.which we'll see in elements in inspect.
6. JSX is not a valid javascript. JSengine will not understand JSX.
7. JSX is transpiled before going to browser by babel(Javascript compiler) which will be provided by bundlers(parcel) to babel.
8. Babel is not built by facebook.
Babel Docs - https://babeljs.io/docs/
9. for class in html tag in jsx is className.
10. To give attributes JSX we should use camel case.

11. In React there are two types of components
                 1. class based components
                 2. functional based components

12. Functional component names should always starts with capital letter.

13. Instead of arrow function functional components can be a normal function also it is completely valid code.But it is industry standard to use arrow function. Normal function dont have auto return. we have to manually return it.

14. we can inject any js code inside components by adding curly braces. Inside those brackets we can write js code.

15. jsx will sanitize our code i.e., it will escape the mallicious js code which we can get throug api.

16. we can call jsx as a normal function inside another component. (power of js).