import { useState } from "react";

const Accordion = ({content,title})=>{
  const [selected, setSelected] = useState(false);
    return (
        <div className="m-5 mx-48 p-5 border-solid border-black bg-gray-300 rounded-lg">
      <div className="flex flex-nowrap justify-between" onClick={() => {
            setSelected(!selected);
        }}>
        <h3 className="font-bold">{title}</h3>
        <span>{selected ? <div className="font-extrabold">-</div> : <div className="font-extrabold">+</div>}</span>
      </div>
      { selected ?<div>{content}</div>:<div></div>}
    </div>
    )
}

export default Accordion;