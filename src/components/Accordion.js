import { useState } from "react";

const Accordion = ({content,title})=>{
  const [selected, setSelected] = useState(true);
    return (
        <div className="p-5 m-2 border-solid border-black bg-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-nowrap justify-between cursor-pointer" onClick={() => {
            setSelected(!selected);
        }}>
        <h3 className="font-bold">{title + ' ('+content.length+')'}</h3>
        <span>{selected ? <div className="font-extrabold">-</div> : <div className="font-extrabold">+</div>}</span>
      </div>
      { selected && <div>{content}</div>}
    </div>
    )
}

export default Accordion;