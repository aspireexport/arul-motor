import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const generatePDF = async () => {
    const invoice = document.getElementById("invoice");

    if (!invoice) return;

    const canvas = await html2canvas(invoice, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();

    const pageHeight =
        (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pageWidth,
        pageHeight
    );

    pdf.save("Invoice.pdf");
};

export default generatePDF;