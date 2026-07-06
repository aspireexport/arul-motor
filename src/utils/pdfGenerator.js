import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const generatePDF = async () => {
    const invoice = document.getElementById("invoice");

    if (!invoice) return;

    const canvas = await html2canvas(invoice, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#ffffff",

    windowWidth: invoice.scrollWidth,
    windowHeight: invoice.scrollHeight,

    width: invoice.scrollWidth,
    height: invoice.scrollHeight,

    scrollX: 0,
    scrollY: 0,
});

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }

    pdf.save("Invoice.pdf");
};

export default generatePDF;