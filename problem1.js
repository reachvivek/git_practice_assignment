let num=5;
let boo=true;
for(let i=2; i<num-1; i++){
  (num%i==0)?boo=false:null;
}
(boo)?console.log("Prime"):console.log("Not Prime")