import React from 'react'
import Styles from "../Styles/Search.module.css"
import { Movie_Search, SingleMovie } from '../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useState } from 'react'
import{Link} from "react-router-dom"


const SearchBar = () => {
    const dispatch = useDispatch()
    const movies = useSelector((store)=>store.movies.movie)
    const singleMovie = useSelector((store)=>store.movies.single)
    console.log('singleMovie', singleMovie);
    const [values, setValue] = useState("")
    console.log('movies', movies);
    function debouncing(argument) {
        let timer
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(function () {
                timer = null
                argument.apply(this, args)
            }, 1000)
        }
    }
    const handleSubmit = async () => {
        dispatch(Movie_Search(values))

    }
    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
        dispatch(Movie_Search(value))

    }
    const deb = useCallback(debouncing(handleChange))

   
    
    return (
        <div className={Styles.SearchContainer}>
            <input type="text" onChange={deb} className={Styles.SearchBox} />
            <button className={Styles.SearchIcone} onClick={handleSubmit}><i className={Styles.SearchIcone} class="fa-solid fa-magnifying-glass"></i></button>
            <br />
            <div className={Styles.Movie}>
        
                {
                   movies &&  movies.map((ele)=>{
                    return (
                       <Link to={"/detailspage"}>
                       
                       <button className={Styles.MovieBox} onClick={()=>dispatch(SingleMovie(ele))}>
                            <div className={Styles.Movies_Contents}> <img src={ele.Poster} className={Styles.Movies_Contents_Img}alt="" /></div>
                            <div className={Styles.Movies_Contents} > {ele.Title}</div>
                            <div className={Styles.Movies_Contents} > {ele.Type}</div>
                            <div className={Styles.Movies_Contents} > {ele.Year}</div>
                       </button>
                       
                       </Link>
                    )
                })

                
                }
              
                {
                    !movies && <><div   className={Styles.MovieBoxError}>Movie Not Available 404 </div></>
                }
            </div>
        </div>
    )
}
export default SearchBar
