import React from 'react'
import PostData from './Data/mediadata.json'
import "./Card.css"
import { Container } from 'react-bootstrap'
import Toggle from './Toggle'


function Card () {
    return (
      <Container>
      <div>
        {/* Retrieves the data from the JSON file and displays into Cards */}
        <h1 className="headingtext">Cards</h1>
        {PostData.map((postDetail, index) => {
          return<div class="card" >  
            <a href={postDetail.url}>
            <img className="img-fluid" 
                  src={postDetail.icon} 
                  alt={postDetail.site} />
          </a>

          <div class="striped-border"></div>
            <h3>{postDetail.title} </h3>
            <h4>{postDetail.itemNumber}</h4>
            <Toggle className="t" >
            <div className="p" >
            <p>Category: {postDetail.category}</p>
            <p>Format: {postDetail.format}</p>
            <p>File Type: {postDetail.type}</p>
            <p>File Size: {postDetail.size}</p>
            <p>Colour: {postDetail.colour}</p>
            <p>Sound: {postDetail.sound}</p>
            </div>
            </Toggle>
          </div>
        })}
      </div>
      </Container>
    )
  }

export default Card;