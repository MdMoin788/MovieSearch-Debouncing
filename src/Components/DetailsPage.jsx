import React from 'react'
import { useSelector } from 'react-redux'
const DetailsPage = () => {
    const singleMovie = useSelector((store) => store.movies.single)
    return (
        <div>
            {
                <div>
                    <div > <img src={singleMovie.Poster}  alt="" /></div>
                    <div  > {singleMovie.Title}</div>
                    <div  > {singleMovie.Type}</div>
                    <div  > {singleMovie.Year}</div>
                </div>
            }
        </div>
    )
}
export default DetailsPage
