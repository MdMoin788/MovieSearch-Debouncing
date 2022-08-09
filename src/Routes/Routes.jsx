import React from 'react'
import { Routes as Router, Route } from "react-router-dom"
import DetailsPage from '../Components/DetailsPage'
import Home from '../Components/Home'

const Routes = () => {
  return (
    <div>
    <Router>

        <Route path='/'  element= { < Home />} />
        <Route path='/detailspage'  element= { < DetailsPage />} />
    </Router>
    </div>
  )
}

export default Routes
