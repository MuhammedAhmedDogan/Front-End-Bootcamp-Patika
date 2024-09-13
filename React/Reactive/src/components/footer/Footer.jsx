import FooterHeader from './FooterHeader';
import Helpfull from './Helpfull';
import Information from './Information';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container col-sm-9 px-0">
                <FooterHeader />
                <div className="row col-12 col-md-8 px-3">
                    <Information />
                    <Helpfull />
                </div>
            </div>
        </footer>
    )
}

export default Footer