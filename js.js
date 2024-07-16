function playRound(butn)
{
    let comp_choice =  Math.floor(Math.random()*3);
    let choice = butn.getAttribute("id");
    console.log(choice);
    console.log(comp_choice);
    let msg = document.createElement("li");
    


    if(choice > comp_choice && Math.abs(choice - comp_choice)<2)
        {
            msg.textContent = "You Win";
            msg.style.backgroundColor = "#31ce58";
            num_score++;
            score.textContent = `${num_score}`;

        }
        else if(choice == comp_choice){
            msg.style.backgroundColor = "#29d6cc";
            msg.textContent = "Draw";

        }
        else {
            msg.style.backgroundColor = "#db242f"
            msg.textContent = "You Lose";}
        list.appendChild(msg);
    
}

let btn = document.querySelectorAll("button");
let list = document.querySelector("ul");
let score = document.querySelector(".score");
let num_score = 0;
for(let i=0;i<btn.length;i++)
    {   
        btn[i].addEventListener("click",() => {
    playRound(btn[i]);});

    }




