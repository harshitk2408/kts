import Logo from "../../Assets/kts.png"
import './Navbar.css'
import Dropdown from "./Dropdown"
export default function Navbar() {
    return (
        <div className="top-nav">
            <div>
                <img src={Logo} className="Logo" alt="logo"></img>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li>Home</li>
                <li><Dropdown name="Services" first="Home storage" second="Domestic moving" third="Transportation" fourth="Warehousing" fifth="Supply chain" /></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}