import React, { Component } from 'react'
import {ListGroup, ListGroupItem, Card, CardDeck} from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class SearchReturn extends Component {
    render() {
        return (
 <div className="wrapper">
 <div>
     <h1 className="headingtext">Welcome to the NFSA Collection</h1>
     {/*First row of Cards for displaying search results */}
     <div className="row">
         <CardDeck>
             <Card bg='dark' style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../logo192.png" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
         </CardDeck>
     </div>
     <br></br>
     {/*Second row of Cards for displaying search results */}
     <div className="row ">
         <CardDeck>
             <Card bg='dark' style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="../../logo192.png" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="" />
                 <Card.Body>
                     <Card.Title>Test 1</Card.Title>
                     <Card.Text>
                         Sample card
                     </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>Item 1</ListGroupItem>
                     <ListGroupItem>Item 2</ListGroupItem>
                     <ListGroupItem>Item 3</ListGroupItem>
                     <ListGroupItem>Item 4</ListGroupItem>
                 </ListGroup>
             </Card>
         </CardDeck>
     </div>
 </div>
 </div>
        )
    }
}

export default SearchReturn