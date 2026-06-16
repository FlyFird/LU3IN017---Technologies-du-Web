import './style/new_message.css';

function New_message(props) {

    if (props.isConnected) {
        return (
            <div className="new_message">
                    <section className="new_msg">
                        <p>Veuillez d'abord vous connecter pour pouvoir envoyer un message</p>
                    </section>
            </div>
        );
    }
    else {
        return (
            <div className="new_message">
                    <section className="new_msg">
                        <form className="new_message_form">
                            <label>Nouveau message</label>
                            <input id="new_message" placeholder='Nouveau message' />
                            <button id="button_new_message" type="submit">Envoyer</button>
                        </form>
                    </section>
            </div>
        );
    }
}

export default New_message;