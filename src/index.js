module.exports = function reverse (n) {
  n = Math.abs(n);
  var strN = String(n);
  var revInt='';
  for (var i = 0; i < strN.length; i++){
    let pR = n/10;
    var perN = (pR - Math.floor(pR)) * 10;
    perN = Math.round(perN);
    n=(n-perN) / 10;
    revInt += perN;
  }
  return revInt;
}
/*(function reverse (n) {
  var strN = String(n);
  var revInt='';
  for (var i = 0; i < strN.length; i++){
    let pR = n/10;
    console.log('pR ='+pR);
    console.log('Math.floor(pR) ='+ Math.floor(pR));
    console.log('result='+ (pR - Math.floor(pR)));
    var perN = (pR - Math.floor(pR)) * 10;
    perN = Math.round(perN);
    console.log('perN ='+perN);
    n=(n-perN) / 10;
    console.log('n ='+n);
    revInt += perN;
    console.log('revInt ='+revInt);

  }
    console.log (revInt);
  return revInt;
})(123)*/
