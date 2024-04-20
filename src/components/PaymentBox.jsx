const PaymentBox = () => {
    return ( 
        <>
        <div class="payment">
      <div class="fullpayment">
        <h2>FULL PAYMENT</h2>
        <p>
          Full payment at the time of signing the <br />
          contract attracts a discount of 5%.
        </p>
        <div class="para">
          <p>
            Full Price: ₦ 180 000 000 (Without discount)
            <br />
            Full Price: ₦ 150 000 000 (With discount)
          </p>
        </div>
        <div class="btns">
          <div class="btn1">
            <button>SIGN & PAY ONLINE</button>
          </div>
          <div class="btn2">
            <button>SIGN & PAY IN PERSON</button>
          </div>
        </div>
      </div>
      <div class="instalmentalpayment">
        <h2>INSTALMENTAL PAYMENT</h2>
        <p>
          Installmental payment to be completed over a <br />
          period of 18 months. <br />
          Starting wit an initial payment of 25%
        </p>
        <div class="text">
          <p>
            Full Price: ₦ 180 000 000
            <br />
            Initial 25% Payment Price ₦ 45 000 000
          </p>
        </div>
        <div class="buttons">
          <div class="button1">
            <button>SIGN & PAY ONLINE</button>
          </div>
          <div class="button2">
            <button>SIGN & PAY IN PERSON</button>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default PaymentBox;