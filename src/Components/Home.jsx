import React, { useEffect } from 'react'
import Homes from "../Styles/Home.module.css"
import SearchBar from './SearchBar'

const Home = () => {
    return (
        <>
            <div className={Homes.HomeContainer}>
                <div className={Homes.SearchBar}>
                    <SearchBar></SearchBar>
                </div>
                <br />
            </div>
        </>
    )
}
export default Home
