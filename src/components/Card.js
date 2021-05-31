import React, { Component } from 'react'
import PostData from './Data/mediadata.json'
import "./Card.css"
import { Container } from 'react-bootstrap'
import Popup from './Popup'
import { useState } from 'react';
import Toggle from './Toggle'




function Card () {
  // const [buttonPopup, setButtonPopup] = useState(false);
 
  // render () {
    return (
      <Container>
      <div >


        <h1 className="headingtext">Cards</h1>
        {PostData.map((postDetail, index) => {
          return<div class="card" >  
            {/* <BoxContainer> */}

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
            {/* <p>{postDetail.ipfs}</p> */}
            </div>
            </Toggle>
          </div>

          

        })}


{/* <button onClick={() => setButtonPopup(true)}>expand</button> */}
{/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>mypopup</h3>
              <p>this is my btnpopup</p>
            </Popup> */}
      </div>

      </Container>
    )
  }
// }

export default Card;



// import React from 'react'

// function Card() {
//     return
//     <div>
//         Card
//     </div>
// }

// export default Card;

// import React from 'react'
// import "./Card.css"


// export const Card = (title,imageUrl,body) => (
    
//     <div className = 'card-container'>
//         <h1>Card</h1>
//         <div className="image-container">
//             <imd src={imageUrl} alt=''/>
//             <div className="card-tittle">
//                 <h3>{title}</h3>
//                 <div className="card-body">
//                 <p1>{body}</p1>
//                 <div className="btn">
//                     <button>
//                         <a>
//                             View more
//                         </a>
//                     </button>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )


// export default Card;
