import Ami from "../home/Ami";

function BodyListeAmis(props) {

    return (
        <div className="body_amis" >
            <ul className="liste_amis" >
                <Ami/>
                <Ami/>
            </ul>
        </div>
    );
}

export default BodyListeAmis;