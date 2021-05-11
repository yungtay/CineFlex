import "./FilmSelection.css"
import {Link} from "react-router-dom"
export default function FilmSelection() {
    return (
      <>
        <div className="select-film">Selecione o filme</div>
        <div className="films">
          <div className="film">
            <Link to="/selectTime">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg"
                alt="filme"
              />
            </Link>
          </div>
        </div>
      </>
    );
}