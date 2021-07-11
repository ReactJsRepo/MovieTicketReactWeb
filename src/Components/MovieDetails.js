import React from 'react'
//import Listing from './MovieDetailListing'
import { Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { FaStar,FaClock } from 'react-icons/fa'
import {connect} from 'react-redux'
import { fetchLatestMoviesBegin } from "../Actions/LatestMovieActions"
import { bindActionCreators} from 'redux';



class MovieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            details:''
        }
    }   

    componentDidMount(){
        this.props.fetchLatestMoviesBegin()
    }


    render(){    
        return (
            <div>
                {this.props.latestmovies.map((item,id) => {
                    if(item.id === this.props.match.params.id){
                    return (
                        <div key={item.id}>
                        <Card style={{ width: '50rem',height:'60rem',float:'left', flexDirection:'row',backgroundColor:'black'}} 
                        border="dark" >
                            <Card.Img variant="top" src={item.imageUrl}/>
                            <Card.Body style={{backgroundColor:'black', width: '20rem'}}>
                                <Card.Title style={{color:'white', fontSize:'20px'}}>{item.name}</Card.Title>
                                <Card.Subtitle style={{color:'white'}} className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text style={{color:'white', fontSize:'12px'}}>   
                                        {item.language} <br/>
                                    <FaStar/> {item.rate}   <br/>
                                    <FaClock/> {item.time}  <br/>
                                    {item.desc}
                            </Card.Text>
        
                            <Button style={{ marginTop: '15rem'}} variant='primary' size='lg' >
                            <Link style={{ textDecoration: 'none', color: 'white', padding: '3rem' }} to={{
                                pathname: `/ticketbooking/${item.name}`,
                                state: this.state.details
                                }}>
                               Book Now</Link></Button>
                        </Card.Body>
                        </Card>   
                        </div>   
                    )}
                    return null
                })}        
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
      return {
          latestmovies:state.latestMoviesReducer.latestMovieData
      }
  }
  
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchLatestMoviesBegin},dispatch)
}
  export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails)


