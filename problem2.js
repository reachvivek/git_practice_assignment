let num = 10101

let rev='';
while(num>1){
  let od=Math.round(num%10);
  rev+=od.toString();
  num=num/10;
}

console.log(rev)