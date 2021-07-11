import React ,{Component} from 'react'
import {Card} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

/***** Movie Card Page (Used to display Cards for Upcoming movies and Events) *****/

const styles = {
     cardImage: {
        borderRadius: 25,
        width: '100%',
        height: '75%',
        marginRight: '50px',
        padding: '1rem',
    }
  }

class MovieItem extends Component{
   
    constructor(props){
        super(props)
        this.state={
          entity : props.entity
        }
    }
    render(){
        console.log(this.state.entity)
        return (
            <div>
               <Card style={{ width: '18rem',height:'41rem',float:'left'}} 
                border="dark">
                <Card.Img variant="top" src={this.state.entity.imageUrl} style={styles.cardImage} className="img-responsive" />
                <Card.Body>
                    <Card.Title>{this.state.entity.name}</Card.Title>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default  MovieItem 
