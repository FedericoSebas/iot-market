import { readFile, readFileSync } from "fs";
import path from "path";

export function GET(req) {
  function convertNumberToWord(number) {
    const ones = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    var numString = number.toString();
    var output = "";
    for (var i = 0; i < numString.length; i++) {
      output += "-" + ones[parseInt(numString.charAt(i))];
    }
    return output;
  }
  function getNumbersFromString(str) {
    var numbers = str.match(/\d+/g);
    return numbers ? numbers.join("") : "";
  }

    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileContet = readFileSync(filePath);
    const products = JSON.parse(fileContet);

    for (const key in products) {
      const numString = getNumbersFromString(key);
      const word = convertNumberToWord(parseInt(numString));

      products[key].title = key.replace("-", " ").replace(/\d+/g, "");
      products[key].slug = key
    }
    return Response.json({products},{status: 200});
}
