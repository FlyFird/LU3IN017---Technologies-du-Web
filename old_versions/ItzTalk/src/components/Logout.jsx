function Logout(props) {

    return (
        <div>
            <button className="logout_button" onClick={props.logout}>Logout</button>
        </div>
    );
}

export default Logout;