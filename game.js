function nextsequence() {
  var r;
  r=(Math.random())*10;
  r=Math.floor(r);
  r=r%4;
  alert(r);
}

nextsequence();
