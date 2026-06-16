import Header from "./Header";
import Aside from "./Aside";
import New_message from "./New_message";
import List_message from "./List_message";

function MainPage(props) {
    

    return (
        <div className="MainPage">
            <Header/>
            <Aside/>
            <New_message/>
            <List_message/>
        </div>
    );
}

export default MainPage;