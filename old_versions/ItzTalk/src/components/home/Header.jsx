import Logo from "./Logo";
import Search from "./Search";
import GestionConnexion from "./GestionConnexion";

function Header(props) {

    return (
        <header>
            <Logo/>
            <Search/>
            <GestionConnexion/>
        </header>
    );
}

export default Header;