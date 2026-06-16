import Login from "./Login.jsx"
import Logout from "./Logout.jsx"

function NavigationPanel(props) {

    return (
        <nav id="nav_panel">
            {(props.isConnected) ? <Logout logout={props.logout}/> : <Login login={props.login}/>}
        </nav>
    );
}

export default NavigationPanel;