import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./index.css"

const navitems = [{ item: "Home", id: "HOME", path: "/" }, { item: "Services", id: "SERVICES", path: "/services" }, { item: "Products", id: "PRODUCTS", path: "/products" }, { item: "Ai Internship", id: "AI INTERNSHIP", path: "/interships" }, { item: "Career", id: "CAREER", path: "/career" }, { item: "Blog", id: "BLOG", path: "/blog" }, { item: "About", id: "ABOUT", path: "/about" }, { item: "Contact Us", id: "CONTACT US", path: "/contact-us" }]

const Header = () => (
    <div className="HeaderCon d-flex justify-content-center p-1 ">
        <nav className="navCon p-2 d-flex text-white justify-content-between align-items-center">
            <Link to="/"> <img className="rubixeLogo" alt="" src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" /></Link>
            <ul className="d-flex list-unstyled m-0 navListCon justify-content-around flex-wrap">
                {navitems.map(obj => <li key={uuidv4()} className=""><Link to={obj.path} className="routerLinkUnsetStyles">{obj.item}</Link></li>)}
            </ul>
        </nav>
    </div>
)
export default Header