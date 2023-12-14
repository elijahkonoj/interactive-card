import { IoRadioButtonOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const FormFrontContainer = () => {


  //const submitBtn = document.getElementById('submit-btn');
  const zerosDigit = document.getElementById('zeros');
  const holderCode = document.getElementById('holder-code');
  //const cardNumField = document.getElementById("cardnumber");
  const cvvField = document.getElementById("cvv");
  //const formElements = document.querySelector(".form-container");
  
     
  const card = () => {
    let cardno = "2341 0139 3456 9854";
    let expirycode = "08/22";
    zerosDigit.innerHTML = cardno;
    holderCode.innerHTML = expirycode;

    console.log("clicked")
  }
  


    return ( 
<>
    <div className="form-container">     
      <form method="post" action="/" id="form-template" >
        <label htmlFor="Cardholder name" id="cardholder-label">CARDHOLDER NAME</label><br/>
        <input type="text" id="cardholder" placeholder="e.g Jane Plisis" required /><br/>
        <label htmlFor="Card number" id="cardnumber-label">CARD NUMBER</label><br/>
        <input type="text" id="cardnumber"placeholder="e.g 0000 0000 0000 0000" required pattern="[0-9]{16}" /><br/>
        <label htmlFor="Exp date" id="exp-label">EXP.DATE(DD/MM/YY)</label><br/>
        <input type="date" id="expirydate" required />
        <label htmlFor="cvc" id="cvc-label">CVC</label>
        <input type="text" id="cvc" placeholder="e.g 123" required max="3" /><br/>
      <Link to="/progressCard">
           <button type="submit" id="submit-btn" onClick={card}>Confirm</button>
      </Link>
      </form>
    
      <div className="front-atm-section">
        <header>
            <span className="radio-button-unchecked"><IoRadioButtonOffSharp /></span>  
        </header>
        <p id="zeros">0000 0000 0000 0000</p>
        <p id="holder-name">Jane Plisis<span id="holder-code">00/00</span></p>
      </div>
      <div className="back-atm-section">
           <div id="empty-column"></div>
           <p id="cvc-code"><span id="code-num">123</span></p>
      </div>
            
            
    </div> 
</>   
     );
}
 
export default FormFrontContainer;