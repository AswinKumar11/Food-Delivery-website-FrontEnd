REDUX
1. Redux is a different library.
2. Redux offers easy debugging.
3. Redux toolkit is a simplified way of redux. react-redux is like a bridge between react and redux.
4. Redux is one big object which is stored in global context which can be accessed from anywhere.
5. Redux have a thing called slice. its nothing but for differentiaing items that we are storing
6. We cannot modify the slice directly.
7. when you want to add any data in slice we should dispatch a action and it will call a function (which is called as reducer) and this function changes the slice.
8. To read data from store we use selector(subscribing the store) and this selector will modify the react component.
9. Steps :
    1. install reduxToolKit
    2. install react-redux
    3. configure store by creating a file. add reducer in the store. configureStore()
    4. create a slice (preferably as new file). configure slice by adding name,initialState, reducers. createSlice().
    5. subscribe to store using provider.
    6. get the data using useSelector() hook
    7. get update the data using useDispatch() hook.
    8. add reducer (not reducers) in configure store.
10. with useSelector always get the specific part of the store that needed. getting the whole store is not recommended.
11. reducer function will have state and actions. whenever you change something you'll get data as action.payload.
12. export actions and reducer from the store file is different as the redux have its own syntax.
13. state are immutable in redux. actually in background it'll create a new temp variable and change that and then it will update the existing one(used in vanilla redux).