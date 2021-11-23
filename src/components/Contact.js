import React from "react";

function Contact() {
    return(
      <div className = "contactpf">
        <h1>Contact</h1>
        <hr className="hr-line"></hr>
        
        <div className="row" >
          <div className="col-md-4"></div>
          <div className="col-md-5" styleName="text-align:left;" >
          <table width="100%">
          <tr><td>Work Email</td>
          <td>:</td>
          <td className="conVal">ren.sushmak@gmail.com</td>
          </tr>
          <tr><td>Email to Stay Connected</td>
          <td>:</td>
          <td className="conVal">sushmakr533@gmail.com</td>
          </tr>
          <tr><td>Phone</td>
          <td>:</td>
          <td className="conVal">1-800-800-8000</td>
          </tr>
        </table>
          </div>
        <div className="col-md-3"></div>
        </div>
      </div>
    )
}

export default Contact;