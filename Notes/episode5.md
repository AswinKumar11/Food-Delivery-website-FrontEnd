1. using src folder for all your code level change is mandatory.
2. file structure is very important. https://legacy.reactjs.org/docs/faq-structure.html
3. It is best practice to create component folder for all the components.
4. Ways to export files are
            * export
            * export default
5. We can have multiple export in a file. but if you use export default we cant have another export default in the same file (We can have export).
6. It is best practice to have name of the constants in capital letter.

7. Hooks are normal js function.
8. state variable is powerful. when a value defined in state variable changes in data layer. it'll change the same in ui layer. 
9. To update State variable is by using the function which we are defining as a second parameter in state.
10. whenever state variable updates react will re-render the component.
11. virtual dom is a representation of actual dom.
12. React fiber introduces new algorithm for updating dom is called reconcilation algorithm.
13. Re-concilation algorithm is one which finds difference between old and new changes.