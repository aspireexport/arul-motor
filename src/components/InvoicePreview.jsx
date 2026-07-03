import "../styles/invoice.css";
import numberToWords from "../utils/numberToWords";
import signature from "../assets/Signature.png";

function InvoicePreview({ customer, items, total }) {
  return (
    <div className="invoice" id="invoice">

      <div className="invoiceHeader">
        <h1>ARUL MOTOR</h1>

        <p className="addressLine1">
          Arasur Main Road &nbsp; | &nbsp; Opp. ESAP Bank
        </p>

        <p className="addressLine2">
          Vellanapatti, Coimbatore - 641048
        </p>
      </div>

      <div className="topDetails">

        <div>
          <p>
            <b>Customer :</b>{" "}
            {customer.name || "_____________________"}
          </p>

          <p>
            <b>Vehicle :</b>{" "}
            {customer.vehicle || "_____________________"}
          </p>
        </div>

        <div>
          <p>
            <b>Date :</b>{" "}
            {customer.date || "____________"}
          </p>

          <p>
            <b>Km :</b>{" "}
            {customer.km || "____________"}
          </p>
        </div>

      </div>

      <table className="billTable">

        <thead>

          <tr>
            <th width="60%">Particulars</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>

        </thead>

        <tbody>

          {items.map((item, index) => (

            <tr key={index}>

              <td>{item.particular}</td>

              <td>{item.qty}</td>

              <td>₹ {item.amount}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="totalSection">

        <h2>Total : ₹ {total}</h2>

      </div>

      <div className="words">

        <b>Amount in Words</b>

        <br />
        <br />

        <strong>
          Rupees {numberToWords(total)}
        </strong>

      </div>

      <div className="signature">

    <img
        src={signature}
        alt="Signature"
        className="signatureImage"
    />

    <p>For <b>ARUL MOTOR</b></p>

    <hr />

    <small>Authorised Signature</small>

</div>

    </div>
  );
}

export default InvoicePreview;