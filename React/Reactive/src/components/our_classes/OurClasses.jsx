import OurClassesHeader from "./OurClassesHeader";
import OurClassesButtons from "./OurClassesButtons";
import OurClassesClasses from "./OurClassesClasses";
import { useState } from "react";

const OurClasses = () => {
    const [selected, setSelected] = useState('yoga');

    return (
        <section id="our-classes">
            <div className="container col-sm-9 px-3">
                <OurClassesHeader />
                <OurClassesButtons setSelected={setSelected} />
                <div id="classes" className="container m-0 p-0">
                    <OurClassesClasses selected={selected} />
                </div>

            </div>

        </section>
    )
}

export default OurClasses