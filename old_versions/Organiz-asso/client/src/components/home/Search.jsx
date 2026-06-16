import { useState } from "react";
import './style/search.css';

function Search(props) {
    const [search, setSearch] = useState("");

    const getSearch = (event) => {setSearch(event.target.value)};

    return (
        <div className="search_main">
            <form className="search_form" method="POST" action="javascript:connexion">
                <div className="search_box_left" >
                    <div className="search_field">
                        <label htmlFor="search">Recherche :</label>
                        <input className="search_input" id="search" placeholder="Entrer mot-clé" />
                    </div>
                    <div className="search_field">
                        <label htmlFor="search_debut_date">Date début :</label>
                        <input id="search_debut_date" type="date" />
                    </div>
                    <div className="search_field">
                        <label htmlFor="search_fin_date">Date fin :</label>
                        <input id="search_fin_date" type="date" />
                    </div>
                </div>
                <div className="search_box_right" >
                    <button className="search_button" type="submit">Rechercher</button>
                </div>
            </form>
        </div>
    );
}

export default Search;