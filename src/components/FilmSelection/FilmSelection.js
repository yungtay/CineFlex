import "./FilmSelection.css"
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
export default function FilmSelection() {

    const [films,setFilms] =  useState([])

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        requisicao.then((resposta) => setFilms([...resposta.data]))
    },[])

    if(films === []){
        return "Carregando"
    } 
    
    return (
      <>
        <div className="select-film">Selecione o filme</div>
        <div className="films">
          {films.map((p, i) => (
            <div className="film" key={p.id}>
              <Link to={`/selectTime/${p.id}`} key={i}>
                <img src={p.posterURL} alt="filme" />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
}