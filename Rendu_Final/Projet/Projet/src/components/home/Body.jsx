import Aside from "./Aside";
import New_message from "./New_message";
import List_messages from "./List_messages";
import './style/body.css';

function Body(props) {
    

    return (
        <div className="body">
            <div className="left_body">
                <Aside/>
            </div>
            <div className="right_body">
                <New_message/>
                <List_messages/>
            </div>
        </div>
    );
}

export default Body;