export function getNextInvoiceNumber() {
    let current = localStorage.getItem("invoiceNumber");

    if (!current) {
        current = 1;
    } else {
        current = parseInt(current) + 1;
    }

    localStorage.setItem("invoiceNumber", current);

    return current.toString().padStart(4, "0");
}