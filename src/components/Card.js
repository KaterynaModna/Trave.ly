
import svgSprite from '../assets/sprite.svg';
export default function Card(props) {
    return(
<div className="one_card">
<div className="card_header_wrapper">
    <img className="user_photo" src={props.author_photo}/>
    <div className="card_head_text_wrapper">
        <h6 className="comment_header">“{props.title}”</h6>
        <div className="insta_nick">
            <svg className="comment_insta">
                <use xlinkHref={`${svgSprite}#comment_insta`} />
            </svg>
            <span className="insta_nick_text">{props.author_nick}</span>
        </div>
    </div>
</div>
<p className="card_main_text">{props.description}
</p>
<button className="see_all" type="button">See All</button>
</div>
    )
}