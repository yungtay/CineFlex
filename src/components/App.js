import { useState} from "react"
import {BrowserRouter, Switch, Route, useHistory, useLocation} from "react-router-dom"
import "../css/reset.css"
import NavBar from "./NavBar/NavBar"
import FilmSelection from "./FilmSelection/FilmSelection"
import SelectTime from "./SelectTime/SelectTime"
import SelectSeat from "./SelectSeat/SelectSeat"
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation"
import Back from "./Back/Back"



export default function App() {
    const reservation = useState({ids: [], name: "", cpf:"", seat:[], movieTitle:"", date:"", session:"", compradores:[]})
      return (
        <BrowserRouter>
          <NavBar />
          <Back/>
          <Switch>
            <Route path="/" exact>
              <FilmSelection />
            </Route>
            <Route path="/selectTime/:idSesson" exact>
              <SelectTime reservations={reservation} />
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