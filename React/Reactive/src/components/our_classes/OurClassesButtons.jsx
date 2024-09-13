import { useState } from "react";

const OurClassesButtons = ({ setSelected }) => {
    const [selectedBtn, setSelectedBtn] = useState('yoga');

    const handleClick = (clickedBtn) => {
        setSelected(clickedBtn);
        setSelectedBtn(clickedBtn);
    }

    return (
        <div id="btn-group" className="row gap-3 mb-5 px-3 px-sm-5">
            <button id="yoga-btn" onClick={() => handleClick('yoga')}
                className={`col-5 col-lg-2 btn btn-large ${selectedBtn === 'yoga' ? "selected" : ""}`}>
                Yoga{selectedBtn === 'yoga' && <div id="yoga-btn-selector"></div>}
            </button>
            <button id="group-btn" onClick={() => handleClick('group')}
                className={`col-5 col-lg-2 btn btn-large ${selectedBtn === 'group' ? "selected" : ""}`}>
                Group{selectedBtn === 'group' && <div id="group-btn-selector"></div>}
            </button>
            <button id="solo-btn" onClick={() => handleClick('solo')}
                className={`col-5 col-lg-2 btn btn-large ${selectedBtn === 'solo' ? "selected" : ""}`}>
                Solo{selectedBtn === 'solo' && <div id="solo-btn-selector"></div>}
            </button>
            <button id="stretching-btn" onClick={() => handleClick('stretching')}
                className={`col-5 col-lg-2 btn btn-large ${selectedBtn === 'stretching' ? "selected" : ""}`}>
                Stretching{selectedBtn === 'group' && <div id="stretching-btn-selector"></div>}
            </button>
        </div>
    )
}

export default OurClassesButtons