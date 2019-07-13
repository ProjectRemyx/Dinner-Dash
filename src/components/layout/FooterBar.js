import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="primary-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Dinner Dash</h5>
            <p>
                This site is created in React and uses the OpenTable open-source API that can be found here: http://opentable.herokuapp.com/.
                If you would like to contact me you can reach me at: "jingkcheng@hotmail.com". Thank you for checking out my project! 
                To see more of what I've worked on, I've provided links you can click to the right. You can also view my portfolio page by
                clicking my name at the bottom of the footer. Have a great day!                
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h6 className="title">Other Projects:</h6>
            <ul>
              <li className="list-unstyled">
                <a href="http://tridentgaming.org">Trident</a>
              </li>
              <li className="list-unstyled">
                <a href="http://tollo.jingkcheng.com">Tollo</a>
              </li>
              <li className="list-unstyled">
                <a href="https:/e7armory.herokuapp.com/">E7 Armory</a>
              </li>
              <li className="list-unstyled">
                <a href="https://wild-coinflip.herokuapp.com/">Wild Cards Coinflip</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.jingkcheng.com"> Jing Cheng </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;