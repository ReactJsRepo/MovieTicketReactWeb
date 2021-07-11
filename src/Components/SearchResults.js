import React ,{Component} from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'

const url= 'http://localhost:6700/latestmovies';

const styles = {
  cardImage: {
    //borderRadius: 25,
    width: '100%',
    height: '70%',
    marginRight: '50px',
    //padding: '1rem',``
  }
}


/***** Search Result Page *****/
class SearchResults extends Component{
        constructor(props){
          super(props);
          this.state={
            details:''

          }
      }
        componentDidMount(){
          console.log('in component did mount',this.props.match.params.name)
            fetch(`${url}`,{
              method:'GET'
          })
          .then(response => response.json())
          .then((data)=> {
              this.setState({
                  details:data
              })
          })
      }
   

   render(){

    console.log('params',this.props.match.params.name)
    const searchText = this.props.match.params.name
    console.log('searchText',searchText)


   return (
    <div>
        {this.state.details && this.state.details.map((item,id) => {
            if(item.name.toLowerCase() === searchText.toLowerCase()){
            return (
                <div key={item.id}>
                <Card style={{ width: '18rem',height:'41rem',float:'left'}} border="dark" 
                  className="text-dark" >
                <Card.Img variant="top" src={item.imageUrl} style={styles.cardImage} />
                <Card.Body>
                    <Card.Title style={{color:'black', fontSize:'15px' }}>
                            {item.name}</Card.Title>
                    <Card.Text>{item.type}</Card.Text>
                </Card.Body>

                <Card.Footer>
                <Button variant='primary' size='lg'>
                        <Link style={{ textDecoration: 'none', color: 'white' }}
                            to={`/latestmovies/${item.id}`}>
                       Book</Link></Button>  
                </Card.Footer>
                          
                
                </Card>
                </div>   
            )}
            return null
        })}        
    </div>
)
    } 

  }

  export default SearchResults