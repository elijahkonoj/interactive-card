import { IoRadioButtonOffSharp } from "react-icons/io5";

const ProgressCard = () => {

    return ( 

    <div className="form-container">
      <p id="demo"></p>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
       <h3>THANK YOU!</h3>
       <p id="para">We have added your card details</p>
       <button id="continue-btn">continue</button>
        <div className="front-atm-section">
          <header>
              <span className="radio-button-unchecked"><IoRadioButtonOffSharp /></span>  
          </header>
          <p id="zeros">2341 5674 9086 0130</p>
          <p id="holder-name">Jane Plisis<span id="holder-code">08/22</span></p>
        </div>
        <div className="back-atm-section">
             <div id="empty-column"></div>
             <div>
              <p id="cvc-code"><span id="code-num">123</span></p>
             </div>
        </div>
    </div>
     );
}
 
export default ProgressCard;