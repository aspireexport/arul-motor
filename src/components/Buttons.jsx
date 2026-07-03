import generatePDF from "../utils/pdfGenerator";

function Buttons() {

    return (

        <div className="buttons">

            <button onClick={generatePDF}>

                Generate PDF

            </button>

        </div>

    );

}

export default Buttons;