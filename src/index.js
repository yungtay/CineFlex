import ReactDom from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./css/reset.css"
import NavBar from "./components/NavBar/NavBar"
import FilmSelection from "./components/FilmSelection/FilmSelection"
import SelectTime from "./components/SelectTime/SelectTime"
import SelectSeat from "./components/SelectSeat/SelectSeat"
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation"

export default function App() {
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
            <SelectSeat />
          </Route>
          <Route path="/orderConfirmation" exact>
            <OrderConfirmation />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

ReactDom.render(<App/>, document.querySelector(".root"))