import React ,{Component} from 'react'
import {connect} from 'react-redux'
import Loading from './Loading'
import { fetchUpcomingMoviesBegin } from "../Actions/UpcomingMovieActions"
import { bindActionCreators} from 'redux';
import MovieItem from './MovieItem'
import {CardDeck} from 'react-bootstrap'

/***** Upcoming Movie Component *****/

class UpComingMovieList extends Component{
   componentDidMount(){
       this.props.fetchUpcomingMoviesBegin()
   }

   render(){
    console.log('upcomingmovies props',this.props.upcomingmovies)
   const upcomingmovieslist= this.props.upcomingmovies && this.props.upcomingmovies.map((item, id)=>
         <MovieItem key={id} entity={item}></MovieItem>)

   console.log('upcoming list:',upcomingmovieslist)
   return (
       <div>
            <h1 className={"text-center"}>Upcoming Movies</h1>
           <Loading/>
           <CardDeck>
                {upcomingmovieslist}
           </CardDeck>

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