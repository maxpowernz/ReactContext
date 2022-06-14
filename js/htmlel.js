const str = "<div><div><b></b></div></p>";

let left = str.match(/<\w*>/gm);
let right = str.match(/<\/\w*>/gm).reverse();

for (let i = 0; i < Math.max(left.length, right.length); i++) {
  if (left[i] !== right[i].replace("/", "")) {
    console.log("bad", right[i]);
    break;
  }

  if (left[i] !== right[i].replace("/", "")) {
    console.log("bad", right[i]);
    break;
  }
}
