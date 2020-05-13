function morganAndString(a, b) {
  var result = [];

  console.log(a.slice(1, a.length));
  console.log(b);

  var n = a.length + b.length;
  console.log(n);
  while (n !== 0) {
    if (a < b || a.charAt(0) === b.charAt(0)) {
      result.push(a.charAt(0));
      a = a.slice(1, a.length);
    } else {
      result.push(b.charAt(0));
      b = b.slice(1, b.length);
    }
    if (a.length === 0) {
      b = b.split("");
      console.log(result.concat(b));
      result = result.concat(b);
      break;
    } else if (b.length === 0) {
      a = a.split("");
     result = result.concat(a);
      break;
    }
    n--;
  }
  console.log(result);
}

morganAndString("JACK", "DANIEL");
