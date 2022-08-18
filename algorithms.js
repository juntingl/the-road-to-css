// 罗马数
function intToRoman(num) {
  // 1～3 由 I 累加组合成，5～8 由 V 和 I 累加组合成
  // [4，9]、[40,90]、[400,900] 等这些值比较特殊，不是通过累加组合而成(4 => IIII、9 => VIIII)
  // 而是由 (IV => 4、IX => 9) 通过后一位罗马数字向左拼接一个前一位罗马符号，从而达到表示减的意思
  // 采用倒序从大进行对比
  const romanSymbolsMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanStr = "";

  for (let i in romanSymbolsMap) {
    while(num >= romanSymbolsMap[i]) {
      console.log("Before romanStr:", romanStr, "num:", num);
      // 匹配到最大值罗马数符号
      romanStr += i;
      // 除去最大罗马数，对剩余数再次进行配对
      num -= romanSymbolsMap[i];
      console.log("After romanStr:", romanStr, "num:", num);
    }
  }

  return romanStr;
}

console.log(intToRoman(4));
console.log("---------------------------");
console.log(intToRoman(400));
console.log("---------------------------");
console.log(intToRoman(403));
console.log("---------------------------");
console.log(intToRoman(501));


// 凯撒密码
function rot13(str) {
  // const ACharCode = "A".charCodeAt(); // 65
  // const ZCharCode = "Z".charCodeAt(); // 90
  // const aCharCode = "a".charCodeAt(); // 97
  // const zCharCode = "z".charCodeAt(); // 122

  const strCharCode = str.charCodeAt();
  // A-Z
  if (strCharCode >= 65 && strCharCode <= 90) {
    return 65 + (strCharCode - 65 + 13) % 26;
  }
  // a-z
  if (strCharCode >= 97 && strCharCode <= 122) {
    return 97 + (strCharCode - 97 + 13) % 26;
  }
}

function strToRot13 (str) {
  return str.split("").map(char => {
    if (/[a-zA-Z]/.test(char)) {
      return String.fromCharCode(rot13(char));
    }
    return char
  }).join("");
}

console.log(strToRot13("SERR PBQR PNZC"));

console.log("---------------------------");
// 美国电话号码正则
const regexp = /^[1]?([0-9]{3}|[\s-]?[0-9]{3}[-\s]?|[\s-]?[（((]+[0-9]{3}[)）)]+[-\s]?)[0-9]{3}[\s-]?[0-9]{4}$/g;
