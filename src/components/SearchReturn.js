import React, { Component } from 'react'
import {ListGroup, ListGroupItem, Card, CardDeck, Button, Container, Col} from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchReturn.css'


class SearchReturn extends Component {
    render() {
        return (
 <div className="wrapper">
    <div>
        <h1 className="headingtext">Welcome to the NFSA Collection</h1>
    </div>
     {/*First row of Cards for displaying search results */}
     <div className="row">
         <CardDeck>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
         </CardDeck>
     </div>
     <br></br>
     {/*Second row of Cards for displaying search results */}
     <div className="row">
         <CardDeck>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
             <Card style={{ width: '18rem' }} className='' onClick={this.showModal}>
                 <Card.Img variant="top" src="../../default-placeholder.png"/>
                 <Card.Body>
                     <Card.Title>Title: Test 1</Card.Title>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>
                         <p>Title No: 000001</p>
                         <p>Production Date: c. 1985</p>
                         <p>Produced As: Advertisement</p>
                         <p>Media: Radio</p>
                     </ListGroupItem>
                 </ListGroup>
             </Card>
         </CardDeck>
     </div>
    <br></br>
    <Container>
        <div className="row">
            <Col lg={{span: 4, offset: 2}}>
                <Button size="lg" variant="link" className="search-button">
                    Previous
                </Button>
            </Col>
            <Col lg={{span: 4, offset: 2}}>
                <Button size="lg" variant="link" className="search-button">
                    Next
                </Button>
            </Col>
        </div>
    </Container>
    <br></br>
 </div>
        
        )
    }
}

export default SearchReturn