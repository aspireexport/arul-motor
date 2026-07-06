import html2pdf from "html2pdf.js";

const generatePDF = () => {
  const element = document.getElementById("invoice");

  if (!element) return;

  const options = {
    margin: 10,
    filename: "Invoice.pdf",
    image: {
      type: "jpeg",
      quality: 1,
    },
    html2canvas: {
      scale: 3,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["avoid-all", "css", "legacy"],
    },
  };

  html2pdf().set(options).from(element).save();
};

export default generatePDF;