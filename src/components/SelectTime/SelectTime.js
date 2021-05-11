import "./SelectTime.css"
import {Link} from "react-router-dom"
export default function SelectTime() {
    return (
      <>
        <div className="select-film">Selecione o horário</div>
        <div className="session-times">
          <div className="date">Quinta-feira - 24/06/2021</div>
          <div className="schedules">
            <Link to="selectSeat">
              <div className="session">15:00</div>
            </Link>
            <Link to="selectSeat">
              <div className="session">19:00</div>
            </Link>
          </div>
          <div className="date">Sexta-feira - 25/06/2021</div>
          <div className="schedules">
          <Link to="selectSeat">
              <div className="session">15:00</div>
            </Link>
            <Link to="selectSeat">
              <div className="session">19:00</div>
            </Link>
          </div>
        </div>
        <div className="bottom-thumbnail">
          <div className="thumbnail">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg"
              alt="filme"
            />
          </div>
          <div className="film-name">Enola Holmes</div>
        </div>
      </>
    );
}