function dontCarry(param1, param2) {
  let p1 = param1.toString().split(""), p2 = param2.toString().split("");
  let longest = null, shortest = null;

  if (p1.length < p2.length) {
    shortest = p1;
    longest = p2;
  }
  else {
    shortest = p2;
    longest = p1;
  }

  const diff = longest.length - shortest.length;

  for (let i = 0; i < diff; i++) shortest.unshift("0");
  
  let i = 0, sum = 0;

  while (i < longest.length) {
    let s = (+shortest[i] + +longest[i]).toString();
    
    if (i > 0 && s.length > 1) sum = sum + s.split("").pop();
    else sum = sum + s;
    
    i++;
  }

  return +sum;
}


dontCarry(9999, 999)