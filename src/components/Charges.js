import React from 'react'
import './Charges.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


export const Charges = () => (
    <>
        <h1 className="headingtext">Charges</h1>
        <br></br>
        <Container>
            <div className="bodytext">
                <h4>Fees And Conditions of Use</h4>
                <li>
                    <a href="#fees" data-hs-anchor="true">About Our Fees</a>
                </li>
                <li>
                    <a href="#servicerates" data-hs-anchor="true">Access Services Rates</a> - <a href="https://www.nfsa.gov.au/collection/curated/collection-reference-rates-and-fees">Download&nbsp;NFSA Rate Card&nbsp;PDF</a>
                </li>
                <li>
                    <a href="#faqs" data-hs-anchor="true">Frequently Asked Questions </a>
                </li>       
            </div>
            <br></br>
            <br></br>
            {/* About Fees Section */}
            <div className="bodytext">
                <a name="fees"></a>
                <h4>About Our Fees</h4>
                <br></br>
                <p>
                    Fees apply to any request that requires the services of our Access team, including:
                    <ul>
                        <li>
                            facilitating research access to collection materials at <a href="https://www.nfsa.gov.au/collection/using-collection/access-centres">NFSA Access Centres</a> 
                        </li>
                        <li>
                            supplying digital copies of collection material (master quality and preview quality) 
                        </li>
                        <li>
                            facilitating the use of collection materials under NFSA Licence Agreements and Usage Agreements
                        </li>
                        <li>
                            organising conservation treatment and/or technical examination of collection materials
                        </li>
                        <li>
                            loaning film prints and digital cinema packages (DCPs)
                        </li>
                        <li>
                            loaning original documents and artefacts 
                        </li>
                        <li>
                            loaning original audiovisual components.
                        </li>
                    </ul>
                </p>
                <p>
                    Every access request is unique, because it relates to different collection items. The total fee is determined by a combination of:
                    <ul>
                        <li>
                            the volume of collection materials requested
                        </li>
                        <li>
                            the amount of staff time involved to facilitate the request
                        </li>
                        <li>
                            whether conservation, preservation or technical treatment is required
                        </li>
                        <li>
                            copyright status and ownership of the materials
                        </li>
                        <li>
                            proposed use of the materials
                        </li>
                        <li>
                            urgency of the request.
                        </li>
                    </ul>  
                    <p>
                    Our team will work with you to provide a realistic assessment of the work, costs and timeframes involved to service your request. We provide itemised quotes for all work undertaken and generally require payment prior to work commencing.   
                    </p>
                    <p>
                        Read the <a href="https://www.nfsa.gov.au/collection/curated/collection-reference-rates-and-fees">NFSA Rate Card</a> in conjunction with the <a href="https://www.nfsa.gov.au/conditions-use">Conditions of Use</a>.  
                    </p>
                    <p>
                        See our <a href="#faqs">Frequently Asked Questions</a> below to learn why the NFSA charges fees for Access services, including for use of materials in the Public Domain. 
                    </p>
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            {/*Service Rates Links Section */}
            <div className="bodytext">
                <a name="servicerates" data-hs-anchor="true"></a>
                <h4>Access Services Rates</h4>
                <a href="#research" data-hs-anchor="true">Research, handling and transfer fees</a>
                <br></br>
                <a href="#commercial" data-hs-anchor="true">Usage and licence fees – commercial use</a>
                <br></br>
                <a href="#advertising" data-hs-anchor="true">Usage and licence fees – advertising/merchandising</a>
                <br></br>
                <a href="#educational" data-hs-anchor="true">Usage and licence fees – cultural/educational/non-broadcast</a>
                <br></br>
                <a href="#theatrical" data-hs-anchor="true">Screening loans – theatrical</a>
                <br></br>
                <a href="#additionalservices" data-hs-anchor="true">Screening loans – additional services</a>
                <br></br>
                <br></br>
            </div>
            <div className="bodytext">
                <a name="research"></a>
                <h5>Research, Handling and Transfer Fees</h5>
                <p><b>Research and handling fees</b> apply to all requests.</p>
                <p><b>Transfer fees</b> apply to all requests where a copy is supplied.</p>
                <p><b>Loan fees</b> apply to all request where material is made available for loan.</p>
                <p><b>Technical fees</b> apply to all requests where conservation treatment and/or technical assessment is required to make the required collection materials available.</p>
                <p><b>Freight charges</b> apply to all transfer and loan requests.</p>
                {/*Research and Handling Table */}
                <table>
                    <tbody>
                        <tr>
                            <th>Research and Handling</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Research, Handling and Client On-site Viewing - Commercial / Advertising / Merchandising</td>
                            <td>$110 for first hour, $60 for extra hours</td>
                        </tr>
                        <tr>
                            <td>Research, Handling and Client On-site Viewing - Educational / Cultural /  Non-Commercial</td>
                            <td>$60 per hour</td>
                        </tr>
                        <tr>
                            <td>Technical services</td>
                            <td>$110 per hour</td>
                        </tr>
                        <tr>
                            <td>Failure to acknowledge surcharge</td>
                            <td>Additional 25% on usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Urgent jobs (same day – 48 hours turnaround)</td>
                            <td>Additional 25% on handling and transfer fees</td>
                        </tr>
                        <tr>
                            <th>Transfer</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Preview footage (timecoded)</td>
                            <td>$30 up to one hour of content</td>
                        </tr>
                        <tr>
                            <td>DVD  (digital source, non-timecoded)</td>
                            <td>$60 per title</td>
                        </tr>
                        <tr>
                            <td>DVD (tape source, non-timecoded)</td>
                            <td>$360 per program hour</td>
                        </tr>
                        <tr>
                            <td>Master footage (digital source, full title)</td>
                            <td>$180 per program hour</td>
                        </tr>
                        <tr>
                            <td>Master footage (tape source, full title)</td>
                            <td>$360 per program hour</td>
                        </tr>
                        <tr>
                            <td>Master footage segment compilation (digital or tape source)</td>
                            <td>$360 per hour</td>
                        </tr>
                        <tr>
                            <td>Master film soundtrack (analogue source, full title)</td>
                            <td>$360 per title</td>
                        </tr>
                        <tr>
                            <td>Master film soundtrack (digital source, full title)</td>
                            <td>$90 per title</td>
                        </tr>
                        <tr>
                            <td>Preview audio</td>
                            <td>$30 up to one hour of content</td>
                        </tr>
                        <tr>
                            <td>Master audio (digital source, full title)</td>
                            <td>$90 per program hour</td>
                        </tr>
                        <tr>
                            <td>Master audio (analogue source, full title)</td>
                            <td>$180 per program hour</td>
                        </tr>
                        <tr>
                            <td>Master audio segment compilation (digital or analogue source)</td>
                            <td>$180 per hour</td>
                        </tr>
                        <tr>
                            <td>Preview still image</td>
                            <td>$15 per image</td>
                        </tr>
                        <tr>
                            <td>Master still image (digital source)</td>
                            <td>$30 per image</td>
                        </tr>
                        <tr>
                            <td>Master still image (analogue source)</td>
                            <td>$60 per image</td>
                        </tr>
                        <tr>
                            <td>Documentation scanning</td>
                            <td>$110 per hour</td>
                        </tr>
                        <tr>
                            <td>Film loan</td>
                            <td>$75 per component</td>
                        </tr>
                        <tr>
                            <td>Video, audio and document loan</td>
                            <td>$45 per component</td>
                        </tr>
                        <tr>
                            <td>NFSA-supplied hard drive</td>
                            <td>500GB = 150 / 1TB= $200 / 2TB = $300</td>
                        </tr>
                        <tr>
                            <td>NFSA-supplied USB sticks</td>
                            <td>up to 16GB = $15 / 32GB= $25 / 64GB = $50</td>
                        </tr>
                        <tr>
                            <th>Freight</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Postage - Express</td>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <td>FTP delivery</td>
                            <td>$12</td>
                        </tr>
                        <tr>
                            <td>Courier</td>
                            <td>POA</td>
                        </tr>
                    </tbody>
                </table>

                <br></br>
                <br></br>
                <br></br>
                <h5>Usage And Licence Fees</h5>
                <p><b>Usage fees</b> apply to footage, sound and images in the Public Domain and are supplied under an NFSA Usage Agreement.</p>
                <p><b>Licence fees</b> apply to footage, sound and images for which the NFSA owns copyright and are supplied under an NFSA Licence Agreement.</p>
                <p><b>Access fees</b> apply to supply of footage, sound and images that are under the legal control of a third-party copyright holder. Such material can only be provided if the client has obtained written copyright clearance from the rights holder. Any licence fee charged by the rights holder is at their discretion and is separate to the NFSA’s access fee.</p>
                <br></br>
                <a name="commercial"></a>
                <h5>Usage And Licence Fees – Commercial Use</h5>
                {/*Usage And Licence Fees – Commercial Use Table */}
                <table>
                    <tbody>
                        <tr>
                            <th>Usage and license fees - commerical use</th>
                            <th>Single medium up to 10 years (30 second minimum)</th>
                            <th>Two media up to 10 years (30 second minimum)</th>
                            <th>Multiple media use up to 10 years (30 second minimum)</th>
                        </tr>
                        <tr>
                            <td>Footage - Single Country</td>
                            <td>$30 per second</td>
                            <td>$45 per second</td>
                            <td>$60 per second</td>
                        </tr>
                        <tr>
                            <td>Footage - World</td>
                            <td>$50 per second</td>
                            <td>$65 per second</td>
                            <td>$90 per second</td>
                        </tr>
                        <tr>
                            <td>Audio - Single Country and World</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Stills - Publishing Single Country</td>
                            <td>$130 per image</td>
                            <td>$180 per image</td>
                            <td>$230 per image</td>
                        </tr>
                        <tr>
                            <td>Stills - Publishing World</td>
                            <td>$250 per image</td>
                            <td>$350 per image</td>
                            <td>$450 per image</td>
                        </tr>
                        <tr>
                            <td>Whole Program Screening (NFSA watermarked) - Single Country</td>
                            <td>$175 per title</td>
                            <td>$275 per title</td>
                            <td>$400 per title</td>
                        </tr>
                        <tr>
                            <td>Whole Program Screening (NFSA watermarked) - World</td>
                            <td>$350 per title</td>
                            <td>$550 per title</td>
                            <td>$750 per title</td>
                        </tr>
                        <tr>
                            <td>In Perpetuity</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Film Australia Collection Access fee - Footage, Audio or Still Image</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Footage</td>
                            <td>$100 per title</td>
                            <td>$100 per title</td>
                            <td>$100 per title</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Still Image or Audio</td>
                            <td>$50 per title</td>
                            <td>$50 per title</td>
                            <td>$50 per title</td>
                        </tr>
                    </tbody>
                </table>

                <br></br>
                <a name="advertising"></a>
                <h5>Usage And Licence Fees – Advertising/Merchandising</h5>
                {/*Usage And Licence Fees – Advertising/Merchandising */}
                <table>
                    <tbody>
                        <tr>
                            <th>Usage and Licence Fees – Advertising / Merchandising Use</th>
                            <th>Single Medium up to 1 year (5 second minimum)</th>
                            <th>Two Media up to 1 year (5 second minimum)</th>
                            <th>Multiple media use up to 1 year (5 second minimum)</th>
                        </tr>
                        <tr>
                            <td>Footage - Single Country</td>
                            <td>$320 per second</td>
                            <td>$430 per second</td>
                            <td>$540 per second</td>
                        </tr>
                        <tr>
                            <td>Footage - World</td>
                            <td>$485 per second</td>
                            <td>$625 per second</td>
                            <td>$765 per second</td>
                        </tr>
                        <tr>
                            <td>Audio - Single Country and World</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Stills - Single Country</td>
                            <td>$250 per image</td>
                            <td>$350 per image</td>
                            <td>$450 per image</td>
                        </tr>
                        <tr>
                            <td>Stills - World</td>
                            <td>$460 per image</td>
                            <td>$585 per image</td>
                            <td>$710 per image</td>
                        </tr>
                        <tr>
                            <td>In Perpetuity</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Film Australia Collection Access fee - Footage, Audio or Still Image</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Footage</td>
                            <td>$200 per title</td>
                            <td>$200 per title</td>
                            <td>$200 per title</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Still Image or Audio</td>
                            <td>$100 per title</td>
                            <td>$100 per title</td>
                            <td>$100 per title</td>
                        </tr>
                    </tbody>
                </table>

                <br></br>
                <a name="educational"></a>
                <h5>Usage And Licence Fees – Cultural/Educational/Non-Broadcast</h5>
                {/*Usage And Licence Fees – Cultural/Educational/Non-Broadcast */}
                <table>
                    <tbody>
                        <tr>
                            <th>Usage and Licence Fees - Educational / Cultural  / Non-Commercial Use</th>
                            <th>Single medium up to 10 years (30 second minimum)</th>
                            <th>Two media up to 10 years (30 second minimum)</th>
                            <th>Multiple media use up to 10 years (30 second minimum)</th>
                        </tr>
                        <tr>
                            <td>Footage - Single Country</td>
                            <td>$15 per second</td>
                            <td>$20 per second</td>
                            <td>$30 per second</td>
                        </tr>
                        <tr>
                            <td>Footage - World</td>
                            <td>$30 per second</td>
                            <td>$45 per second</td>
                            <td>$60 per second</td>
                        </tr>
                        <tr>
                            <td>Audio - Single Country and World</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                            <td>50% of footage usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Stills - Publishing / Exhibition - Single Country</td>
                            <td>$60 per image</td>
                            <td>$90 per image</td>
                            <td>$120 per image</td>
                        </tr>
                        <tr>
                            <td>Stills - Publishing / Exhibition World</td>
                            <td>$120 per image</td>
                            <td>$180 per image</td>
                            <td>$240 per image</td>
                        </tr>
                        <tr>
                            <td>Stills - Advertising / Merchandising - Single Country</td>
                            <td>$120 per image</td>
                            <td>$180 per image</td>
                            <td>$240 per image</td>
                        </tr>
                        <tr>
                            <td>Stills - Advertising / Merchandising - World</td>
                            <td>$240 per image</td>
                            <td>$360 per image</td>
                            <td>$480 per image</td>
                        </tr>
                        <tr>
                            <td>Whole Program Screening (NFSA watermarked) - Single Country</td>
                            <td>$105 per title</td>
                            <td>$145 per title</td>
                            <td>$195 per title</td>
                        </tr>
                        <tr>
                            <td>Whole Program Screening (NFSA watermarked) - World</td>
                            <td>$210 per title</td>
                            <td>$290 per title</td>
                            <td>$370 per title</td>
                        </tr>
                        <tr>
                            <td>In Perpetuity</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                            <td>Additional 50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>Film Australia Collection Access fee - Footage, Audio or Still Image</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                            <td>50% of usage or licence fee</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Footage</td>
                            <td>$50 per title</td>
                            <td>$50 per title</td>
                            <td>$50 per title</td>
                        </tr>
                        <tr>
                            <td>National collection Access fee - Still Image or Audio</td>
                            <td>$25 per title</td>
                            <td>$25 per title</td>
                            <td>$25 per title</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            {/* Screening Loans Section */}
            <div className="bodytext">
                <h5>Screening Loans</h5>
                <a name="theatrical"></a>
                <h6>Screening Loans: Thearical</h6>
                <table>
                    <tbody>
                        <tr>
                            <th>NFSA Screening Loans - Theatrical</th>
                            <th>Australian Loans</th>
                            <th>International Loans</th>
                        </tr>
                        <tr>
                            <td>35mm feature film prints</td>
                            <td>$205</td>
                            <td>$310</td>
                        </tr>
                        <tr>
                            <td>16mm feature film prints</td>
                            <td>$125</td>
                            <td>$200</td>
                        </tr>
                        <tr>
                            <td>35mm short film prints</td>
                            <td>$85</td>
                            <td>$125</td>
                        </tr>
                        <tr>
                            <td>16mm short film prints</td>
                            <td>$85</td>
                            <td>$125</td>
                        </tr>
                        <tr>
                            <td>35mm or 16mm short films package (up to 90 minutes)</td>
                            <td>$205</td>
                            <td>$310</td>
                        </tr>
                        <tr>
                            <td>70mm feature films</td>
                            <td>$410</td>
                            <td>$620</td>
                        </tr>
                        <tr>
                            <td>DCP (Digital Cinema Package</td>
                            <td>$205</td>
                            <td>$310</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <ul>
                    <li>Note: feature films are 60 minutes or more, short films are 59 minutes or less.</li>
                </ul>
                <br></br>
                <a name="additionalservices"></a>
                <h6>Screening Loans - Additional Services</h6>
                <table>
                    <tbody>
                        <tr>
                            <th>Screening Loans - Additional Services (All Clients)</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Research and Handling</td>
                            <td>$60 per hour</td>
                        </tr>
                        <tr>
                            <td>Additional Screening</td>
                            <td>Additional 50% of loan fee</td>
                        </tr>
                        <tr>
                            <td>Film print condition assessment - spot check</td>
                            <td>$60 per 35mm print / $30 per 16mm print</td>
                        </tr>
                        <tr>
                            <td>Film print condition assessment - full report</td>
                            <td>$110 per 35mm print / $60 per 16mm print</td>
                        </tr>
                        <tr>
                            <td>Urgent job</td>
                            <td>$110 per print</td>
                        </tr>
                        <tr>
                            <td>Cancellation charge</td>
                            <td>$110 or 50% of loan fee</td>
                        </tr>
                        <tr>
                            <td>Surcharge - failure to acknowledge NFSA</td>
                            <td>$110 or 50% of loan fee</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <ul>
                    <li>Collection material must be sent using a trackable/registered service. Additional charges apply for loan extensions, overdue loans and replacement of lost or damaged collection material.</li>
                </ul>
            </div>

            <br></br>
            <br></br>
            <br></br>
            {/* FAQ Section */}
            <div className="bodytext">
                <a name="faqs" data-hs-anchor="true"></a>
                <h4>Frequently Asked Questions</h4>
                <br></br>
                <p>
                    <b>Why does the NFSA charge fees for Access services?</b>
                </p>
                <p>
                    The <a href="https://www.legislation.gov.au/Details/C2016C00386" rel="noreferrer noopener" target="_blank"><em>National Film and Sound Archive of Australia&nbsp;Act</em>&nbsp;2008 (Cth)</a> enables us to charge fees for activities done in performing our functions. Income generated from the fees we charge assists us to recover the costs of providing Access services. The income also supports us to perform our core function of collecting, preserving and sharing the collection in the national interest through our public programs and online initiatives. 
                </p>
                <p>
                    The <a href="https://www.nfsa.gov.au/collection/curated/collection-reference-rates-and-fees">NFSA Rate Card</a> is approved by the <a href="https://www.nfsa.gov.au/about/corporate-information/governance/nfsa-board">NFSA Board</a> and fees are reviewed periodically.
                </p>

                <br></br>

                <p>
                    <b>How does the NFSA set its pricing?</b>
                </p>
                <p>
                    Our pricing structure is tiered and includes reduced rates for non-commercial clients. All fees are priced largely on cost-recovery principles. 
                </p>
                <p>
                    The NFSA Rate Card is approved by the NFSA Board and fees are reviewed periodically.
                </p>

                <br></br>

                <p>
                    <b>Why does the NFSA charge usage fees for material that’s in the Public Domain?</b>
                </p>
                <p>
                    Preserving and storing the collection for future generations is a costly undertaking. Income generated from fees assists us to fulfil these responsibilities.
                </p>
                <p>
                    Material in the Public Domain is no longer subject to the Copyright Act 1968 but can be accessed under a NFSA Usage Agreement for specific purposes.
                </p>
                <p>
                    Our decision to charge for use of material from our collection that is in the Public Domain has been approved by the NFSA Board. 
                </p>

                <br></br>

                <p>
                    <b>Can you assist me to estimate how much my Access request will cost?</b>
                </p>
                <p>
                    Yes. Please submit an <a href="https://www.nfsa.gov.au/access-enquiry-form">Access Enquiry form</a> so that our staff can provide you with a realistic assessment of the costs and timeframes involved to service your request.
                </p>

                <br></br>

                <p>
                    <b>I want to use archival footage, sound and images in my production or project but I have a limited budget. Can the NFSA support me?</b>
                </p>
                <p>
                    We support eligible individuals and organisations to access archival footage, sound and images from the collection at a reduced cost for use in documentary productions and other creative projects through our <a href="https://www.nfsa.gov.au/collection/using-collection/zero-fee-licence" rel="noreferrer noopener" target="_blank">Zero Fee Licence</a> and <a href="https://www.nfsa.gov.au/collection/using-collection/take-three" rel="noreferrer noopener" target="_blank">Take Three</a> programs.
                </p>
                <p>
                    Not all collection materials are available under these programs and conditions and fees apply. All Access requests that do not meet the criteria for Zero Fee Licence or Take Three are serviced as standard requests and incur <a href="https://www.nfsa.gov.au/collection/using-collection/access-fees" rel="noreferrer noopener" target="_blank">standard fees</a>.
                </p>

                <br></br>

                <p>
                    <b>Where can I find more information about services for which the NFSA charges a fee?</b>
                </p>
                <p>
                    See <a href="https://www.nfsa.gov.au/collection/using-collection/using-collection">Access Services – Essential Information</a>. 
                </p>
            </div>
        </Container>
        </>
)