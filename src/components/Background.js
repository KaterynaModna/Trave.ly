import NaviHeader from './Navi';
export default function Background(){
    return(
        <header>
        <div className="wrapper">
            <NaviHeader/>
    <h1>
                Choose Your
                <span className="kursiv"> Extraordinary Dream</span>
                Journey
            </h1>
            <p className="main_p">Discover the World with Trave.ly</p>
            {/* <div className="complex_input">

                <div className="input_elements">
                    <div className="select_item">
                        <i className="fa-regular fa-calendar"></i>
                        <select className="select_item" name="date" id="date" required>
                            <option value="" selected disabled>date</option>
                        </select>
                    </div>
                    <div className="select_item">
                        <i className="fa-solid fa-location-dot"></i>
                        <select className="select_item" name="lokal" id="lokal" required>
                            <option value="" selected disabled>location</option>
                        </select>
                    </div>
                    <div className="select_item">
                        <i className="fa-regular fa-user"></i>
                        <select className="select_item" name="person" id="person" required>
                            <option value="" selected disabled>person</option>
                        </select>
                    </div>
                    <button className="search" type="button">search</button>
                </div>
            </div> */}
            </div>
            </header>
    )
}