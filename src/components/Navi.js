
import svgSprite from '../assets/sprite.svg';
export default function NaviHeader(){
    return(
        <div className="navi_wrapper">
        <a href="#">
        <svg className="logo">
        <use xlinkHref={`${svgSprite}#logo`} />
                  </svg>
        </a>
        <div className="icon_wrapper">
            <a href="#">
            <svg className="youtube">
            <use xlinkHref={`${svgSprite}#youtube`} />
                  </svg>
            </a>
            <a href="#">
            <svg className="icon">
            <use xlinkHref={`${svgSprite}#inst`} />
                  </svg>
            </a>
            <a href="#">
            <svg className="icon">
            <use xlinkHref={`${svgSprite}#tg`}/>
                  </svg>
            </a>
        </div>
    </div>
    )
}