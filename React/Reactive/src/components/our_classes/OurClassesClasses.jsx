import yogaImg from './../../assets/yoga.jpg';
import groupImg from './../../assets/group.webp';
import soloImg from './../../assets/solo.jpg';
import stretImg from './../../assets/stret.webp';

const OurClassesClasses = ({ selected }) => {

    if (selected === 'yoga') {
        return (
            <div id="yoga" className="row">
                <p className="col-12 col-sm-6 px-0 pe-sm-5">
                    <span>Why are your Yoga?</span><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit cum ratione, dignissimos deserunt
                    laborum facilis accusantium illum fugit, necessitatibus voluptatum illo exercitationem quibusdam. Deleniti mollitia
                    qui ullam fugiat tenetur.<br /><br /><br />
                    <span>When comes Yoga Time.</span><br /><br />
                    Saturday-Sunday: 8:00am - 10:00am<br /><br />
                    Monday-Tuesday: 10:00am - 12:00am<br /><br />
                    Wednesday-Friday: 3:00am - 6:00am
                </p>
                <img src={yogaImg} alt="yoga" className="col-12 col-sm-6 px-0 ps-sm-5" />
            </div>
        )
    }

    if (selected === 'group') {
        return (
            <div id="group" className="row">
                <p className="col-12 col-sm-6 px-0 pe-sm-5">
                    <span>Why are your Group?</span><br /><br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam accusantium, vitae iusto nam
                    adipisci blanditiis eligendi? Dignissimos, hic illum adipisci eligendi quia numquam libero debitis quae
                    dolorum, ipsum fugiat!<br /><br /><br />
                    <span>When comes Group Time.</span><br /><br />
                    Saturday-Sunday: 8:00am - 10:00am<br /><br />
                    Monday-Tuesday: 10:00am - 12:00am<br /><br />
                    Wednesday-Friday: 3:00am - 6:00am
                </p>
                <img src={groupImg} alt="group" className="col-12 col-sm-6 px-0 ps-sm-5" />
            </div>
        )
    }

    if (selected === 'solo') {
        return (
            <div id="solo" className="row">
                <p className="col-12 col-sm-6 px-0 pe-sm-5">
                    <span>Why are your Solo?</span><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia repudiandae, dolore, fuga incidunt
                    quo libero magnam nihil voluptates tenetur harum cupiditate perferendis pariatur sequi, hic corrupti.
                    Doloremque, quisquam tenetur.<br /><br /><br />
                    <span>When comes Solo Time.</span><br /><br />
                    Saturday-Sunday: 8:00am - 10:00am<br /><br />
                    Monday-Tuesday: 10:00am - 12:00am<br /><br />
                    Wednesday-Friday: 3:00am - 6:00am
                </p>
                <img src={soloImg} alt="solo" className="col-12 col-sm-6 px-0 ps-sm-5" />
            </div>
        )
    }

    if (selected === 'stretching') {
        return (
            <div id="stretching" className="row">
                <p className="col-12 col-sm-6 px-0 pe-sm-5">
                    <span>Why are your Stretching?</span><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt distinctio provident fugiat a, earum,
                    culpa quibusdam eaque obcaecati velit tenetur ducimus voluptatibus possimus commodi unde sed. Veritatis,
                    aliquam? Doloribus, nihil.<br /><br /><br />
                    <span>When comes Stretching Time.</span><br /><br />
                    Saturday-Sunday: 8:00am - 10:00am<br /><br />
                    Monday-Tuesday: 10:00am - 12:00am<br /><br />
                    Wednesday-Friday: 3:00am - 6:00am
                </p>
                <img src={stretImg} alt="stretching" className="col-12 col-sm-6 px-0 ps-sm-5" />
            </div>
        )
    }

    return null;

}

export default OurClassesClasses