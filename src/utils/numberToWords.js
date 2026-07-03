const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function convertBelowThousand(num) {
  let result = "";

  if (num >= 100) {
    result += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    result += ones[num] + " ";
  }

  return result.trim();
}

export default function numberToWords(num) {
  if (num === 0) return "Zero Only";

  let words = "";

  if (num >= 100000) {
    words += convertBelowThousand(Math.floor(num / 100000)) + " Lakh ";
    num %= 100000;
  }

  if (num >= 1000) {
    words += convertBelowThousand(Math.floor(num / 1000)) + " Thousand ";
    num %= 1000;
  }

  if (num > 0) {
    words += convertBelowThousand(num);
  }

  return words.trim() + " Only";
}