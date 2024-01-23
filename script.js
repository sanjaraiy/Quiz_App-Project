const questions=[{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'What year was Javascript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does CSS stands for',
    'a':'Hypertext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'Helicopters Terminals Motorboats Lamborinis',
    'correct':'b'
},
]
let idx=0;
let total=questions.length;
let right=0,wrong=0;

const quesBox=document.querySelector('#quesBox');
const option=document.querySelectorAll('.option');
const loadQuestions=()=>{
    if((idx)===total){
        return endQuiz();
    }else{
        reset();
        data=questions[idx];
        quesBox.innerText=`${idx+1}) ${data.que}`;
        option[0].nextElementSibling.innerText=data.a;
        option[1].nextElementSibling.innerText=data.b;
        option[2].nextElementSibling.innerText=data.c;
        option[3].nextElementSibling.innerText=data.d;
       
    }
    
}

const submitQuiz=()=>{
    const data=questions[idx];
    const ans=getAnswer();
    console.log(ans);
    if(ans===data.correct){
          right++;
    }else{
        wrong++;
    }
    idx++;
    loadQuestions();

}

const getAnswer=()=>{
    let answer;
    option.forEach((input)=>{
          if(input.checked){
            answer= input.value;
            
          }
    })
    return answer;
}

const reset=()=>{
    option.forEach(
        (input)=>{
           input.checked=false;
        }
    )
}

const endQuiz=()=>{
    const box=document.querySelector('.box')
    box.innerHTML=`
     <h3>Thanks you for playing the Quiz...</h3>
     <h2>${right}/${total} are correct</h2>
     `
     box.style.display='flex';
     box.style.justifyContent='center';
     box.style.alignItems='center';
     box.style.flexDirection='column';
}

document.querySelector('#submit').addEventListener('click',submitQuiz,false);
loadQuestions();
    
