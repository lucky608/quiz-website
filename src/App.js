import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';


 //const API_URL ="https://sheets.googleapis.com......" write your api here


function App() {
 let i=0;
 //let j=0;
  const [questions,setQuestions]=useState([]);
     const [currentIndex , setCurrentIndex]= useState(0);
     const [score, setScore] = useState(0);
     const [showAnswers, setShowAnswers] = useState(false);
    const val= questions[currentIndex];
   // console.log(Math.floor(Math.random()*10));
   //  console.log(val);
  
  const handleAnswer = (answer) => {
    if(!showAnswers){
      if(answer === val[5]){
        setScore(score+1);
      //  console.log(score);

      }
      
    }
    
    setShowAnswers(true);
    
  }
  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex+1);
    
    setShowAnswers(false);
  }

   useEffect(()=>{
     Axios.get(API_URL)
     .then(res=> res.data)
     .then(data=>{

       setQuestions(data.values)
      const val=data.values[currentIndex];
       console.log(data.values.Array[0]);
      // console.log(questions[0]);
     //  console.log(questions[currentIndex]);




  });

     
   },[])
 

  

  return ( questions.length>0?(
    
    <div className="App">
      {currentIndex >= 10 ? (
         <h2>Game Ended, Your Score is {score}</h2>):(
           <div>
             <div className='que'>
        <h1  dangerouslySetInnerHTML={{__html:(currentIndex+1)+(".")+val[0]}} />
        </div>
        {/* <QuestionCont data={val[currentIndex]} /> */}

        <div className='opt-section'>
         <button onClick = {() => handleAnswer(val[1])}>{val[1]}</button>
         <button  onClick = {() => handleAnswer(val[2])}>{val[2]}</button>
         <button  onClick = {() => handleAnswer(val[3])}>{val[3]}</button>
         <button  onClick = {() => handleAnswer(val[4])}>{val[4]}</button>
         </div>
         <div>
         <button className='nextbtn' onClick = {() => handleNextQuestion()}>next</button>

    </div>
         </div>)}
    </div>):"Loading...."
        

  );
  
}

export default App;
