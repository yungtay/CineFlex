import { Link } from "react-router-dom";
import "./SelectSeat.css"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
export default function SelectSeat() {
    const {idSesson} = useParams()
    const [seat,setSeat] =  useState(null)
    const [reservation, setReservation] = useState([])
    console.log(idSesson)


    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSesson}/seats`)
        requisicao.then((resposta) => setSeat({...resposta.data}))
    },[])

    if (seat === null) return "Carregando";

    return (
      <>
        <div className="select-seat-title">Selecione o(s) assento(s)</div>
        <div className="select-seat">
          {seat.seats.map((p) => (
            <div key={p.id} onClick={() => selectSeat(p.id,p.isAvailable)} className={`seat ${p.isAvailable ? (reservation.includes(p.id) ? "selected-seat" : "") : "seat-unavailable"}`}>{p.name}</div>
          ))}
        </div>
        <div className="seat-availability">
          <div className="container-status-seat">
            <div className="seat selected-seat"></div>
            Selecionado
          </div>
          <div className="container-status-seat">
            <div className="seat"></div>
            Disponível
          </div>
          <div className="container-status-seat">
            <div className="seat seat-unavailable"></div>
            Indisponível
          </div>
        </div>
        <div className="buyer-data">
          <div className="buyer-name">
            Nome do comprador:
            <input placeholder="Digite seu nome..." />
          </div>
          <div className="buyer-cpf">
            CPF do comprador:
            <input placeholder="Digite seu CPF..." />
          </div>
        </div>
        <div className="reserve-seats">
          <Link to="/orderConfirmation">Reservar Assento(s)</Link>
        </div>
        <div className="bottom-thumbnail">
          <div className="thumbnail">
            <img
              src={seat.movie.posterURL}
              alt="filme"
            />
          </div>
          <div className="film-name">
          {seat.movie.title}
            <div className="session-description">{seat.day.weekday} - {seat.name}</div>
          </div>
        </div>
      </>
    );

    function selectSeat(seatId, availableId){
        console.log(seatId);
        console.log(reservation)
        if(reservation.includes(seatId)){
            setReservation(reservation.filter((p) => p !== seatId))
        } else if(availableId) {
            setReservation([...reservation,seatId])
        } else {
            alert("Esse assento não está disponível")
        }
    }
}