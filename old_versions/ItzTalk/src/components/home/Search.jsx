import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const getSearch = (event) => {setSearch(event.target.value)};

    return (
        <div className="search">
            <form method="POST" action="javascript:connexion">
                <label for="search">Recherche</label>
                <input id="search" />
                <label></label>
                <button type="submit">Rechercher</button>
                <label for="search">Date début</label>
                <input id="search" type="date" />
                <label for="search">Date fin</label>
                <input id="search" type="date" />
            </form>
        </div>
    );
}

export default Search;