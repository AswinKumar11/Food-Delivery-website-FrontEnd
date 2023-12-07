import { useState } from "react";

const Accordion = ({content,title})=>{
  const [selected, setSelected] = useState(false);
    return (
        <div className="accordion">
      <div className="accordionHeader" onClick={() => {
            setSelected(!selected);
        }}>
        <h3>{title}</h3>
        <span>{selected ? <div class="arrow arrow-up"></div> : <div class="arrow arrow-down"></div>}</span>
      </div>
      <div className={selected ? "hideContent" : "showContent"}>{content}</div>
    </div>
    )
}

export default Accordion;