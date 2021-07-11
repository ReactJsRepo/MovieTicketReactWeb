import React, { useState } from "react"
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Home from "./Components/Home"
import UpcomingMovies from "./Components/UpcomingMovies"
import EventList from "./Components/EventList"
import LatestMovieList from './Components/LatestMovieList'
import MovieDetails from './Components/MovieDetails'
import TicketBookingDetail from "./Components/TicketBookingDetail"
import FinalBookingPage from "./Components/FinalBookingPage"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import SearchResults from "./Components/SearchResults"
import { useHistory } from "react-router-dom";


function App() {
  const [searchText, setSearchText] = useState("");
  let history = useHistory();

  const handleSearchInput = event => {
      setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('in submit')
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('in handleKeyDown',searchText)
     history.push(`/results/${searchText}`)
    }
   }

  return (
    /***** Nav bar and Routing paths*****/

    <Router>
      <div>
          <header>
                <Navbar bg="dark" variant="dark" height="10" style={{ maxHeight: '70px' }} >
                    <Nav className="mr-auto" style={{color:"white", fontSize:"15px", paddingLeft:"20px"}}>
                      <Nav.Link style={{color:"white", fontSize:"15px", paddingLeft:"20px"}} 
                          href="/" >Home</Nav.Link>
                      <Nav.Link style={{color:"white", fontSize:"15px", paddingLeft:"20px"}} 
                          href="/latestmovies">Latest Movies</Nav.Link>
                      <Nav.Link style={{color:"white", fontSize:"15px", paddingLeft:"20px"}}
                          href="/upcomingMovies">Upcoming Movies</Nav.Link>
                      <Nav.Link style={{color:"white", fontSize:"15px", paddingLeft:"20px"}}
                        href="/events">Events</Nav.Link>
                    </Nav>

                    <Form inline>
                      <FormControl 
                          onChange={handleSearchInput}
                          type="text" 
                          placeholder="Search" 
                          className="mr-sm-2"
                          onKeyPress={(e) => handleKeyPress(e)}
                          />
                      <Button 
                      type="submit"
                      onSubmit={handleSearchSubmit}               
                        >
                      <Link style={{ textDecoration: 'none', color: 'white' }}
                            to={`/results/${searchText}`}>
                        Search</Link></Button>
                    </Form>
                </Navbar>
            </header>
            <Route path='/' exact component={Home} />
            <Route path='/latestmovies' exact component={LatestMovieList} />
            <Route path='/upcomingMovies' component={UpcomingMovies} />
            <Route path='/events' component={EventList} />
            <Route path='/latestmovies/:id' exact component={MovieDetails}></Route>
            <Route path='/ticketbooking/:name/' exact component={TicketBookingDetail}></Route>
            <Route path='/finalconfirmation' exact component={FinalBookingPage}></Route>
            <Route path='/results/:name' component={SearchResults}></Route>
      </div>
    </Router>
  )
}

export default App
