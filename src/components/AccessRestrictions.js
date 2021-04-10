import React from 'react'
import './AccessRestrictions.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


export const AccessRestrictions = () => (
    <>
    <h1 className="headingtext">Access Restrictions</h1>
    <br></br>
    <Container>
        <div className="bodytext">
            <h4>Navigate</h4>
            <li>
                <a href="#copyright" data-hs-anchor="true">Copyright</a>
            </li>
            <li>
                <a href="#restrictions" data-hs-anchor="true">Contractual or cultural restrictions</a>
            </li>
            <li>
                <a href="#moralrights" data-hs-anchor="true">Indigenous moral rights</a>
            </li>         
        </div>
        <br></br>
        <br></br>
        
        <div>
            <a name="copyright"><span>Copyright</span></a>
            <h4>Copyright</h4>
            <br></br>
            <p>
                Most of the items in the National Collection are protected by copyright and in most cases a third party will own this copyright. The copyright owner is often the only person who may grant permission for the use of his or her work.
            </p>
            <p>
                Material can be made available for viewing or auditioning on the NFSA's premises in Canberra, Sydney and Melbourne, or through Access Centres in Hobart, Perth, Brisbane, Darwin and Adelaide. However, items loaned or copied for off-site access are only made available under licence, or with the permission of third party copyright owners.
            </p>
            <p>
                Clearing the right to use material will be up to you. NFSA Collection Access staff can help you identify a copyright contact, and advise you of any conditions that might affect access or any restrictions that might apply.
            </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <a name="restrictions" data-hs-anchor="true"></a>
            <h4>Contractual or cultural restrictions</h4>
            <br></br>
            <p>
                Some titles may be culturally sensitive (secret/sacred material) or embargoed for a specified period due to donor or contractual obligations. Please contact us for further information as some restricted material is still available to be viewed or auditioned on the NFSA's premises.
            </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <a name="moralrights" data-hs-anchor="true"></a>
            <h4>Indigenous moral rights</h4>
            <br></br>
            <p>
                The NFSA respects and recognises Indigenous moral rights. A work may be noted as 'restricted' when it contains secret or sacred material which an Indigenous community has identified as not available for general access. Therefore, access and any subsequent use of some materials in the NFSA's collection with Indigenous content requires prior permission of the traditional owners or appropriate Indigenous communities or families in addition to normal copyright clearances. The NFSA's Collection Access section will advise clients when this applies to specific requested titles.The NFSA respects and recognises Indigenous moral rights. A work may be noted as 'restricted' when it contains secret or sacred material which an Indigenous community has identified as not available for general access. Therefore, access and any subsequent use of some materials in the NFSA's collection with Indigenous content requires prior permission of the traditional owners or appropriate Indigenous communities or families in addition to normal copyright clearances. The NFSA's Collection Access section will advise clients when this applies to specific requested titles.
            </p>
        </div>
        <br></br>
        <div className="justify-content-center">
            <b>See <a href="http://nfsa.gov.au/collection/collection-enquiries/">Accessing the Collection</a> for more information about the NFSA's access services.</b>
        </div>
        <br></br>
        <br></br>
        </Container>
        </>
)