const heading = React.createElement("div", {id:'child'}, [
    React.createElement("h1", {key:'child2'}, "Hello Mr.React"),
    React.createElement("h2", {key:'child3'}, "Hello Mr.Aswin")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
