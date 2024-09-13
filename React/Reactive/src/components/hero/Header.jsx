import { useRef, useEffect } from 'react';
import logo from './../../assets/logo.png';

const Header = () => {

    const headerRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current && navbarRef.current) {
                if (window.scrollY > 0) {
                    headerRef.current.classList.add('header-scrolled');
                    navbarRef.current.classList.add('collapse-scrolled');
                } else {
                    headerRef.current.classList.remove('header-scrolled');
                    navbarRef.current.classList.remove('collapse-scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        navbarRef.current.addEventListener('shown.bs.collapse', function () {
            headerRef.current.classList.add('menu-open');
            navbarRef.current.classList.add('menu-open');
        });

        navbarRef.current.addEventListener('hidden.bs.collapse', function () {
            headerRef.current.classList.remove('menu-open');
            navbarRef.current.classList.remove('menu-open');
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            navbarRef.current.removeEventListener('shown.bs.collapse', function () {
                headerRef.current.classList.add('menu-open');
                navbarRef.current.classList.add('menu-open');
            });
            navbarRef.current.removeEventListener('hidden.bs.collapse', function () {
                headerRef.current.classList.remove('menu-open');
                navbarRef.current.classList.remove('menu-open');
            });
        };
    }, []);

    const handleClick = () => {
        if (navbarRef.current) {
            // Check if navbarCollapse is open
            if (navbarRef.current.classList.contains('show')) {
                // Get the bootstrap collapse instance
                const bsCollapse = new window.bootstrap.Collapse(navbarRef.current, {
                    toggle: false
                });
                // Hide the navbarCollapse
                bsCollapse.hide();
            }
        }
    }

    return (
        <header className="header fixed-top" id="header" ref={headerRef}>
            <nav className="navbar navbar-expand-sm py-0 px-0">
                <div className="container col-sm-9 px-0">
                    <div className="logo ms-3 ms-sm-0">
                        <img src={logo} height="80px" width="auto" alt="Logo" />
                    </div>
                    <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#hero-top" onClick={() => handleClick()}><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#our-classes" onClick={() => handleClick()}><b>Classes</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#trainers" onClick={() => handleClick()}><b>Trainer</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#review" onClick={() => handleClick()}><b>Review</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-us" onClick={() => handleClick()}><b>Contact</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="btn-join-us" href="#" onClick={() => handleClick()}><b>JOIN US</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header