import React ,{Component} from 'react'
import {connect} from 'react-redux'
import Loading from './Loading'
import { fetchLatestMoviesBegin } from "../Actions/LatestMovieActions"
import { bindActionCreators} from 'redux';
import LatestMovieItems from './LatestMovieItems'
import {CardDeck} from 'react-bootstrap'

/***** To display list of latest movies  *****/

class LatestMovieList extends Component{

   componentDidMount(){
       this.props.fetchLatestMoviesBegin()
   }
   

   render(){
    console.log('latest movie props',this.props.latestmovies)
   const latestMovieslist= this.props.latestmovies && this.props.latestmovies.map((item,id)=>
   <LatestMovieItems key={id} entity={item}></LatestMovieItems>)

   console.log('latestMovies list:',latestMovieslist)
   return (
        <div>
           <Loading/>
           <CardDeck>
                 {latestMovieslist}
           </CardDeck>
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
  export default connect(mapStateToProps,mapDispatchToProps)(LatestMovieList)