import logoImg from './../../assets/logo.png';

const FooterHeader = () => {
    return (
        <div className='footer-header'>
            <div className="logo ms-3 ms-sm-0">
                <img src={logoImg} height="80px" width="auto" alt="Logo" />
            </div>
            <p className="mx-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error veniam esse praesentium expedita similique minima! Maiores quas consequatur error quo nisi cupiditate aperiam reprehenderit asperiores.
            </p>
        </div>
    )
}

export default FooterHeader