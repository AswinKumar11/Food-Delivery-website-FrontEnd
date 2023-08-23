import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id:'child'}, [
//     React.createElement("h1", {key:'child2'}, "Hello Mr.React"),
//     React.createElement("h2", {key:'child3'}, "Hello Mr.Aswin"),
//     React.createElement("h2", {key:'child4'}, "Hello Mr.Kumar")
// ]);

const Title = ()=> ( <h1 className="heading">Hello jsx</h1> );

// functional component

const Heading = ()=>(
<div>
    <Title />
    <h1 className="heading">Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
