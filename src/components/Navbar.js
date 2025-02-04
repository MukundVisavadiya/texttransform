import logo from '../text.png';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = (props) => {

    let myStyle = {
        cursor: 'pointer',
    }

    const Home = () => {
        document.title = 'TextUtils - Home';
    }

    const TextUtils = () => {
        document.title = 'TextUtils - TextUtils';
    }

    const About = () => {
        document.title = 'TextUtils - About';
    }

    const Contact = () => {
        document.title = 'TextUtils - Contact';
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='image' src={logo} alt="home-logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="/home" onClick={Home}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/textutils' onClick={TextUtils}>{props.navList}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/about" onClick={About}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/contact" onClick={Contact}>Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="px-3 py-3" onClick={props.toggleMode} style={myStyle} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={props.mode === 'light' ? 'black' : 'white'} className="bi bi-moon-stars-fill" viewBox="0 0 16 16" >
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    navList: propTypes.string.isRequired,
}

export default Navbar;


