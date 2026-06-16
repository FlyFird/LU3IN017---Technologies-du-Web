function New_message(props) {

    return (
        <div class="zone_msg">
                <section class="new_msg">
                    <form class="message">
                        <label>Nouveau message</label>
                        <input id="new_message" />
                        <button type="submit">Envoyer</button>
                    </form>
                </section>
        </div>
    );
}

export default New_message;