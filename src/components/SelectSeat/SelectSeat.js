import "./SelectSeat.css"
export default function SelectSeat() {
    return (
      <>
        <div className="select-film">Selecione o(s) assento(s)</div>
        <div className="select-seat">
          {[...Array(50).keys()].map((p) => (
            <div className="seat">{p}</div>
          ))}
        </div>
      </>
    );
}