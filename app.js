import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id:'child'}, [
    React.createElement("h1", {key:'child2'}, "Hello Mr.React"),
    React.createElement("h2", {key:'child3'}, "Hello Mr.Aswin"),
    React.createElement("h2", {key:'child4'}, "Hello Mr.Kumar")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
