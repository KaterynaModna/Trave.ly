export default function FormHeader() {
    return (
        <form className="complex_input">
            <div className="select_container">
                <i className="fa-regular fa-calendar"></i>
                <input className="select_item" type="date" name="date" id="date" required>
                </input>
            </div>
            <div className="select_container">
                <i className="fa-solid fa-location-dot"></i>
                <input className="select_item" name="lokal" id="lokal" required>
                </input>
            </div>
            <div className="select_container">
                <i className="fa-regular fa-user"></i>
                <select className="select_item" name="type" id="type" required>
                    <option value="" selected disabled>type</option>
                </select>
            </div>
            <button className="search" type="button">search</button>
        </form>
    )
}