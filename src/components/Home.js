import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/*import SearchReturn from './SearchReturn'*/
import { Container } from 'react-bootstrap'

export const Home = () => (
        /*<SearchReturn/>*/
        <>
        <h1 className="headingtext">Welcome to the NFSA Collection</h1>
        <br></br>
        <Container>
            <div className="bodytext">
                <p>This system is now loaded with data from our new collection management system. For users who previously used the 'Photograph' or 'Paper' facet on this page, 
                    both are now available by selecting the 'Documentation' facet or by using the 'Advanced Search' option at the top of the screen. 
                    If searching sound items, tick both 'Sound Recording' facets to ensure highest return of results. We welcome your feedback on these changes.</p>
                    <br></br>
                <p>Any feedback? Please send to <a href="mailto:access@nfsa.gov.au?subject=feedback">access@nfsa.gov.au</a></p>            
            </div>
            <br></br>
            <br></br>
            <div>
            <p className="disclaimertext"><b>Disclaimer: </b> Titles and related text are often exact transcriptions from original items and reflect attitudes of the time. Some text may also contain inappropriate or offensive language. This collection contains descriptions, images and audio recordings from audiovisual material relating to Indigenous Australians. Users should be aware that, in some Aboriginal and Torres Strait Islander communities, seeing the names and/or images of deceased persons may cause sadness or distress, particularly to the relatives of these people.</p>
            </div>
        </Container>
        </>
    )