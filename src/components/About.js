import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

export const About = () => (
    <>
        <h1 className="headingtext">About</h1>
        <br></br>
        <Container>
            <div className="bodytext">
                <h4>Navigate</h4>
                <li>
                    <a href="#aboutcatalogue" data-hs-anchor="true">About the Catalogue</a>
                </li>
                <li>
                    <a href="#datastandards" data-hs-anchor="true">Data Standards</a>
                </li>
                <li>
                    <a href="#types" data-hs-anchor="true">Types of Holdings</a>
                </li>
                <li>
                    <a href="#registeredmaterial" data-hs-anchor="true">Registered Material</a>
                </li>           
            </div>
            <br></br>
            <br></br>
            
            <div className="bodytext">
                <a name="aboutcatalogue"><span>About the Catalogue</span></a>
                <h4>About the Catalogue</h4>
                <br></br>
                <p>
                    This Search the Collection function gives you online access to information in the NFSA's collection management database, which lists more than 700,000 items and spans more than 100 years of film, television, radio and recorded sound.
                </p>
                <p>
                    Some items have been digitised and can be previewed directly online. To enquire about viewing or listening to other items, you can submit an <a href="">Access Services Request</a>.
                </p>
                <p>
                    See <a href="http://nfsa.gov.au/collection/collection-enquiries/">Accessing the Collection</a> for more information about the NFSA's access services.
                </p>
                <p>
                    Note that this Search the Collection function does not include merchandise available from the NFSA Shop. You can Search the <a href="http://nfsa.gov.au/nfsa-shop/">Shop Catalogue</a> separately.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="bodytext">
                <a name="datastandards" data-hs-anchor="true"></a>
                <h4>Data Standards</h4>
                <br></br>
                <p>
                    Database records are created for moving image works, recorded sound, documents and artefacts in accordance with international cataloguing standards. These records describe the significant intellectual and physical features of collection items.
                </p>
                <p>
                    The main factors affecting the level of detail included in each record are:
                    <ul>
                        <li>
                            whether the material is commercially published/produced/released, or unpublished;
                        </li>
                        <li>
                            the format and content of the material;
                        </li>
                        <li>
                            the types of demand expected or experienced on the various materials and formats held.
                        </li>
                    </ul>
                </p>
                <p>
                Data may not be consistent across all records in the collection, as data entry processes have developed over many years. The current guidelines were compiled after drawing on user needs, practical experience and international standards. If you find an error in a catalogue description please let us know at <a href="mailto:corrections@nfsa.gov.au">corrections@nfsa.gov.au</a>.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="bodytext">
                <a name="types" data-hs-anchor="true"></a>
                <h4>Types of Holdings</h4>
                <br></br>
                <p>
                    The NFSA may hold several copies of a collection item, each with a different function. These holdings are listed in the title record for the item.
                    <ul>
                        <li>
                            <i>Access Copy</i> - copy of an item which is available for viewing, single-projector/platter projection or auditioning. These copies have been made to protect original and master material. If access copies are not already held for a title, clients need to allow additional time for copies to be made; there will also be additional costs.
                        </li>
                        <li>
                            <i>Archival Projection Print</i> - high-quality film prints to be used in NFSA-approved dual-projector archival standard projection environments. High-quality uncut prints and rare prints. Additional conditions apply to the use of this material.
                        </li>
                        <li>
                            <i>Reference Copy</i> - prints not generally suitable for projection but considered suitable for on-site study or research purposes.
                        </li>
                        <li>
                            <i>Duplicating (Duping) Copy</i> - master copy of an item from which further access copies can be made.
                        </li>
                        <li>
                            <i>Preservation Copy</i> - highest-quality original component or copy closest to original (when the original is not available). Generally used only to make duping material.
                        </li>
                        <li>
                            <i>Digital Copy</i> - digitised version of a title.
                        </li>
                    </ul>
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="bodytext">
                <a name="registeredmaterial" data-hs-anchor="true"></a>
                <h4>Registered Material</h4>
                <br></br>
                <p>
                    Registered items are minimally described and will require further preparation before they can be accessed. All efforts will be made to provide timely delivery, but delays can be expected due to the additional processing required. Registered records have been made public in order to increase information about the National Collection. Your patience is appreciated.
                </p>
            </div>
        </Container>
        </>
)