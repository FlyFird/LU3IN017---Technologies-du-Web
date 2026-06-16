import Message from "./Message";
import './style/list_messages.css';

function List_messages(props) {

    return (
        <div className="zone_msg">
                <section className="list_msg">
                    <ul>
                        <Message />
                    </ul>
                </section>
        </div>
    );
}

export default List_messages;