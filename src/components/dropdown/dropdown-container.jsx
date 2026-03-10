
import { useState } from "react";

import "./dropdown-container.css";

const DropdownContainer = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`dropdown-container ${isOpen ? "dropdown-open" : ""}`}>
            <div className={"dropdown-title"} onClick={()=>setIsOpen(pre => !pre)}>
                <div>
                    {title}
                </div>
                <div className="icon-container">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className={`dropdown-content`}>
                <div className="dropdown-content-inner">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default DropdownContainer;