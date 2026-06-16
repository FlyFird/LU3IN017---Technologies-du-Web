import Logo from "./Logo";
import Search from "./Search";
import GestionConnexion from "./GestionConnexion";
import './style/header1.css';

function Header(props) {

    return (
        <header className="header">
            <Logo/>
            <Search/>
            <GestionConnexion isConnected={props.isConnected} handleLogout={props.handleLogout} />
        </header>
    );
}

export default Header;