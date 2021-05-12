import { Link } from "react-router-dom"
import "./OrderConfirmation.css"
export default function OrderConfirmation() {
    return (
      <>
        <div className="message-success">Pedido feito com sucesso!</div>
        <div className="confirmation-name-session">
          <div className="confirmation-title">
            <strong className="subtitle">Filmes e sessão</strong>
            <div className="confirmation-movie">Enola Holmes</div>
            <div className="confirmation-session">24/06/2021 15:00</div>
          </div>
        </div>

        <div className="confirmation-name-session">
          <div className="confirmation-ticket">
            <strong className="subtitle">Ingressos</strong>
            <div className="confirmation-seat">Assento 15</div>
            <div className="confirmation-seat">Assento 16</div>
          </div>
        </div>

        <div className="confirmation-name-session">
          <div className="confirmation-buyer">
            <strong className="subtitle">Comprador</strong>
            <div className="confirmation-name">Nome: João da Silva Sauro</div>
            <div className="confirmation-cpf">CPF: 123.456.789-10</div>
          </div>
        </div>

        <div className="home">
            <Link to="/">Voltar para Home</Link>
        </div>
      </>
    );
    
}