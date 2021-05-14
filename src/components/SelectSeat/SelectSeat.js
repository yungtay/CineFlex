import { Link } from "react-router-dom";
import "./SelectSeat.css"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
export default function SelectSeat(props) {
    const {reservations: [reservation,setReservation]} = props
    const {idSesson} = useParams()
    let [seat,setSeat] =  useState(null)

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSesson}/seats`)
        request.then((resposta) => {
          seat = resposta.data;
          setSeat({ ...seat});
          setReservation({ ...reservation, movieTitle: seat.movie.title, date:seat.day.date, session:seat.name })
        });
        
    },[idSesson])
    
    //console.log(reservation)

    if (seat === null) return "Carregando";

    
    return (
      <>
        <div className="select-seat-title">Selecione o(s) assento(s)</div>
        <div className="select-seat">
          {seat.seats.map((p) => (
            <div
              key={p.id}
              onClick={() => selectSeat(p.id, p.isAvailable, p.name)}
              className={`seat ${
                p.isAvailable
                  ? reservation.ids.includes(p.id)
                    ? "selected-seat"
                    : ""
                  : "seat-unavailable"
              }`}
            >
              {p.name}
            </div>
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

        {reservation.seat.sort((a,b) => a - b).map((p,i) => (
          <div className="buyer-data">
            <div className="buyer-name">
              Nome do comprador do Assento {p}:
              <input
                value={reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id)) ? reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id)).nome : ""}
                key={`nome${p}`}
                placeholder="Digite seu nome..."
                onChange={(e) =>{
                  const nomeExiste = reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id))
                  if(nomeExiste){
                    setReservation({...reservation, compradores: [...reservation.compradores.filter((p) => p.idAssento !== reservation.ids[i]), {...reservation.compradores[i] ,nome: e.target.value }]})
                  } else {
                    setReservation({ ...reservation, compradores: [...reservation.compradores, {idAssento:reservation.ids[i], nome: e.target.value}]})
                  }
                }}
              />
            </div>
            <div className="buyer-cpf">
              CPF do comprador do Assento {p}:
              <input
                value={reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id)) ? reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id)).cpf : ""}
                key={`cpf${p}`}
                placeholder="Digite seu CPF..."
                onChange={(e) =>{
                  const cpfExiste = reservation.compradores.find((x) => x.idAssento === (seat.seats.find((w) => w.name === p).id))
                  if(cpfExiste){
                    setReservation({...reservation, compradores: [...reservation.compradores.filter((p) => p.idAssento !== reservation.ids[i]), {...reservation.compradores[i] ,cpf: e.target.value }]})
                  } else {
                    setReservation({ ...reservation, compradores: [...reservation.compradores, {idAssento:reservation.ids[i], cpf: e.target.value}]})
                  }
                }}
              />
            </div>
          </div>
        ))}

        <Link
          to="/orderConfirmation"
        >
          <div onClick={sendRequestReservation} className="reserve-seats">
            Reservar Assento(s)
          </div>
        </Link>

        <div className="bottom-thumbnail">
          <div className="thumbnail">
            <img src={seat.movie.posterURL} alt="filme" />
          </div>
          <div className="film-name">
            {seat.movie.title}
            <div className="session-description">
              {seat.day.weekday} - {seat.name}
            </div>
          </div>
        </div>
      </>
    );

    function selectSeat(seatId, availableId, seat){
        if(reservation.ids.includes(seatId)){
          if(reservation.compradores.find((x) => x.idAssento === seatId) && (reservation.compradores.find((x) => x.idAssento === seatId).nome || reservation.compradores.find((x) => x.idAssento === seatId).cpf)){
            const desejaApagar = window.confirm("Você irá remover o assento e apagar os dados, deseja continuar ?")
            if(!desejaApagar) return 
          }
          setReservation({...reservation, ids: reservation.ids.filter((p) => p !== seatId), seat: reservation.seat.filter((r) => r !== seat), compradores: reservation.compradores.filter((f) => f.idAssento !== seatId)})
            
        } else if(availableId) {
            setReservation({...reservation, ids: [...reservation.ids,seatId].sort((a,b) => a - b), seat:[...reservation.seat, seat]})
        } else {
            alert("Esse assento não está disponível")
        }
    }

    function sendRequestReservation() {
      const dados = { ids: reservation.ids, compradores: reservation.compradores }
      console.log(dados)
      const request = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", dados
      );
      request.then((resposta) => alert(`Pedido Efetuado ! ${resposta.data}` ));
    }
}