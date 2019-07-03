import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Abbyfy</h5>
            <p>
              Your one stop destination for supply chain management.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">CONNECT WITH US</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><img src="https://image.flaticon.com/icons/svg/23/23931.svg" width="20" height="20"/></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><img src="https://image.flaticon.com/icons/png/512/33/33702.png" width="20" height="20"/></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-1-logo-png-transparent.png" width="20" height="20"/></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="www.tridentchronicle.com"> Trident Chronicle</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;