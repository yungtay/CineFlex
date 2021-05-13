import ReactDom from "react-dom"
import { useState} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./css/reset.css"
import NavBar from "./components/NavBar/NavBar"
import FilmSelection from "./components/FilmSelection/FilmSelection"
import SelectTime from "./components/SelectTime/SelectTime"
import SelectSeat from "./components/SelectSeat/SelectSeat"
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation"

export default function App() {
  const reservation = useState({ids: [], name: "", cpf:"", seat:[], movieTitle:"", date:"", session:""})
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <FilmSelection />
          </Route>
          <Route path="/selectTime/:idSesson" exact>
            <SelectTime />
          </Route>
          <Route path="/selectSeat/:idSesson" exact>
            <SelectSeat reservations={reservation} />
          </Route>
          <Route path="/orderConfirmation" exact>
            <OrderConfirmation reservations={reservation} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

ReactDom.render(<App/>, document.querySelector(".root"))