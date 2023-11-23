import { Link } from 'react-scroll';

export default function Table_grid() {
    return (
        <section className="reasons">
            <div className="grid_table">
                <div className="grid_table_item one">

                    <div className="table_text_wrapper">
                        <h4 className="table_main_text">
                            20 <span className="kursiv kurs_reasons">years</span>
                        </h4>
                        <p className="table_mini_text">We have honed our expertise
                            to provide you with exceptional travel experiences.</p>
                    </div>
                </div>
                <div className="grid_table_item two">
                    <h4 className="table_main_text two">
                            Reasons to Entrust
                            Your Journey to Us
                            </h4>
                </div>
                <div className="grid_table_item three">
                    <div className="table_text_wrapper">
                        <h4 className="table_main_text">
                            98 <span className="kursiv kurs_reasons">%</span>
                        </h4>
                        <p className="table_mini_text">Satisfaction rate from customers about our outstanding and memorable
                            journeys.</p>
                    </div>
                </div>
                <div className="grid_table_item four">
                    <div className="table_text_wrapper">
                        <h4 className="table_main_text">
                            50 <span className="kursiv kurs_reasons">countries</span>
                        </h4>
                        <p className="table_mini_text">In which we operate, ensuring that you have access to a wide range of
                            destinations and experiences worldwide.</p>
                    </div>
                </div>
                <div className="grid_table_item five">
                    <div className="table_text_wrapper">
                        <h4 className="table_main_text">
                            24/7 <span className="kursiv kurs_reasons">support</span>
                        </h4>
                        <p className="table_mini_text">We provide round-the-clock customer support, ensuring that assistance
                            is just a call away.</p>
                    </div>
                </div>
                <div className="grid_table_item six">
                    <div className="table_text_wrapper">
                        <h4 className="table_main_text">
                            7 <span className="kursiv kurs_reasons">categories</span>
                        </h4>
                        <p className="table_mini_text">We offer tours, ensuring there's something for every type of
                            traveler, from cultural enthusiasts to adventure seekers.</p>
                    </div>
                </div>
                <div className="grid_table_item seven">
                    <a href="#form_section">
                        <h5 className="table_booking">Book tour</h5>
                    </a>
                </div>
            </div>
        </section>
    )
}