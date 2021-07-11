import React ,{Component} from 'react'
import {connect} from 'react-redux'
import Loading from './Loading'
import { fetchEventsBegin } from "../Actions/EventActions"
import { bindActionCreators} from 'redux';
import MovieItem from './MovieItem'
import {CardDeck} from 'react-bootstrap'

/***** Event List Component *****/

class EventList extends Component{
   componentDidMount(){
       this.props.fetchEventsBegin()
   }

   render(){
    console.log('events props',this.props.events)
   const eventlist= this.props.events && this.props.events.map((item, id)=> 
   <MovieItem key={id} entity={item}></MovieItem>)
   console.log('events list:',eventlist)
   return (
       <div>
            <h1 className={"text-center"}>Events Near Me</h1>
           <Loading/>
           <CardDeck>
                {eventlist}
           </CardDeck>
       </div>
   )
}
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
      return {
          events:state.eventReducer.eventData
      }
  }
  
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchEventsBegin},dispatch)
}
  export default connect(mapStateToProps,mapDispatchToProps)(EventList)