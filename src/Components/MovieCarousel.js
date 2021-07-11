import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { fetchUpcomingMoviesBegin } from "../Actions/UpcomingMovieActions"
import { bindActionCreators} from 'redux';
import { Carousel } from "react-bootstrap";
import '../Styles/MovieCarousel.css'

/***** Upcoming Movie Component *****/

class UpComingMovieList extends Component{
   componentDidMount(){
       this.props.fetchUpcomingMoviesBegin()
   }

   render(){
    console.log('upcomingmovies props in carousel',this.props.upcomingmovies)
   const upcomingmovieslist= this.props.upcomingmovies

   console.log('upcoming list:',upcomingmovieslist)
   return (
       <div>
            <h1 className={"text-center"}>Upcoming Movies</h1>
            <Carousel>
            {upcomingmovieslist.map((review,id) => (
              <Carousel.Item key={id}>
                <img className="center-block" width={300} height={300} 
                  src={review.imageUrl}
                  alt={review.language}
                />
                <Carousel.Caption>
                  <h3>{review.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          
       </div>
   )
}
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
      return {
          upcomingmovies:state.upcomingMoviesReducer.upcomingmoviedata
      }
  }
  
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchUpcomingMoviesBegin},dispatch)
}
  export default connect(mapStateToProps,mapDispatchToProps)(UpComingMovieList)

