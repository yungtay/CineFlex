import "./SelectTime.css"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
export default function SelectTime(props) {
  const {reservations: [reservation,setReservation]} = props
  const {idSesson} = useParams()
  const [session,setSession] =  useState(null)

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idSesson}/showtimes`)
        requisicao.then((resposta) => setSession({...resposta.data}))
        setReservation({ids: [], name: "", cpf:"", seat:[], movieTitle:"", date:"", session:"", compradores:[]})
    },[idSesson])

    if(session === null) return "Carregando"
    return (
      <>
        <div className="select-film">Selecione o horário</div>
        <div className="session-times">
          {session.days.map((p) => (
            <div key={p.id}>
              <div className="date">
                {p.weekday} - {p.date}
              </div>
              <div className="schedules">
                {p.showtimes.map((r) => (
                  <div key={r.id}>
                    <Link to={`/selectSeat/${r.id}`}>
                      <div className="session">{r.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-thumbnail">
          <div className="thumbnail">
            <img src={session.posterURL} alt="filme" />
          </div>
          <div className="film-name">{session.title}</div>
        </div>
      </>
    );
}