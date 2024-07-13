let choice = prompt("Enter your choice : \n1: rock\n2: paper\n3: scissor\n");

let a = Math.floor(Math.random()*3);
if(choice == a) console.log("draw");
else if(choice>a && Math.abs(choice-a) < 2) console.log("You Win");
else console.log("You Lost");