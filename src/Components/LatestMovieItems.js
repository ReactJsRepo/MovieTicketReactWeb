import React ,{Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'

/***** Card display component to display Latest Movie *****/


const styles = {
    cardImage: {
      //borderRadius: 25,
      width: '100%',
      height: '70%',
      marginRight: '50px',
      //padding: '1rem',``
    }
  }

class LatestMovieItems extends Component{
   
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
               <Card style={{ width: '18rem',height:'41rem',float:'left'}} border="dark" 
                  className="text-dark" >
                <Card.Img variant="top" src={this.state.entity.imageUrl} style={styles.cardImage} />
                <Card.Body>
                    <Card.Title style={{color:'black', fontSize:'15px' }}>
                            {this.state.entity.name}</Card.Title>
                    <Card.Text>{this.state.entity.type}</Card.Text>
                </Card.Body>

                <Card.Footer>
                <Button variant='primary' size="lg">
                        <Link style={{ textDecoration: 'none', color: 'white' }}
                            to={`/latestmovies/${this.state.entity.id}`}>
                       Book</Link></Button>  
                </Card.Footer>
                          
                
                </Card>
            </div>
        )
    }
}

export default  LatestMovieItems 
