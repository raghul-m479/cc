import React from 'react';


function Footer() {
  return (
    <footer style={{backgroundColor:'bisque'}}>
      <div className="contact">
        <h4>CONTACT US</h4>
        <p>No 3,SPACE IND GROUPt</p>
        <p>coimbatore-641005</p>
        
        <p>Email: Spaceind@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <a  href="#">Facebook</a><br></br>
          <a  href="#">Twitter</a><br></br>
       
          <a  href="#">Instagram</a><br></br>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;