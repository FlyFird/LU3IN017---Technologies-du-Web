function AsideProfil(props) {
    const onglets = [
                        { label: "Informations", value: "Infos" },
                        { label: "Favoris", value: "Favs" },
                        { label: "Liste des messages envoyés", value: "Liste_Msgs" },
                        { label: "Liste_Amis", value: "Liste_Amis" },
                    ];

    return (
        <aside className="onglets_lateraux">
            <button type="submit">Informations</button>
            <button type="submit">Favoris</button>
            <button type="submit">Liste des messages envoyés</button>
            <button type="submit">Amis</button>
        </aside>
    );
}

export default AsideProfil;