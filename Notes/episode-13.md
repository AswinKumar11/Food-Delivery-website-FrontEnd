React Testing Library(RTL) is widely used.
RTL used Jest behind the scenes.
SO if we are using Parcel we need i.e., if we create our app from scratch without using create react app . We need to do some babel config. see in Rest doc.
steps:
1. install RTL
2. Install Jest
Install babel dependencies.
3. configure babel (check jest docs.)
4. configure parcel (check parcel docs.) we need to disable default babel transpilation.
5. check by running num run test.
6. run npx jest --init (will automatically create a config file jest.config.js).
7. If jest version is grater than 28 we need to install jsdom (virtual dom to run your test cases).we can use node also.
8. Install Jsdom.
9. create your test cases.
10. create a folder __test__ is the comman nomanclature for naming the file. and each test cases should be stored as sum.test.js
11. Install @babel/preset-react to make the jest to support JSX.
12. Add @babel/preset-react in the babel config.
13. To enable the function toBeInTheDocument we have to install one more library @testing-library/jest-dom.
14.Virtual dom will try to render all the components which is written in react.It will not understand redux, react-router-dom which we installed as a seprate bundle so we need to wrap the component in the render in the test cases.