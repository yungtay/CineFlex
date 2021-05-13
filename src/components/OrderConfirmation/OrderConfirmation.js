import { Link } from "react-router-dom"
import "./OrderConfirmation.css"
export default function OrderConfirmation(props) {
  const {reservations: [reservation,setReservation]} = props
  console.log(reservation.name)
  
    return (
      <>
        <div className="message-success">Pedido feito com sucesso!</div>
        <div className="confirmation-name-session">
          <div className="confirmation-title">
            <strong className="subtitle">Filmes e sessão</strong>
            <div className="confirmation-movie">{reservation.movieTitle}</div>
            <div className="confirmation-session">
              {reservation.date} {reservation.session}
            </div>
          </div>
        </div>

        <div className="confirmation-name-session">
          <div className="confirmation-ticket">
            <strong className="subtitle">Ingressos</strong>
            {reservation.seat.map((p) => (
              <div key={p} className="confirmation-seat">Assento {p}</div>
            ))}
          </div>
        </div>

        <div className="confirmation-name-session">
          <div className="confirmation-buyer">
            <strong className="subtitle">Comprador</strong>
            <div className="confirmation-name">Nome: {reservation.name}</div>
            <div className="confirmation-cpf">CPF: {reservation.cpf}</div>
          </div>
        </div>

        <div className="home">
          <Link
            to="/"
            onClick={() => setReservation({ids: [], name: "", cpf:"", seat:[], movieTitle:"", date:"", session:""})}
          >
            Voltar para Home
          </Link>
        </div>
      </>
    );
    
}