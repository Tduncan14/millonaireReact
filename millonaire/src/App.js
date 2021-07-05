// import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react'
import Triva from './components/Trivia';

function App() {

  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");
  const [active,setActive] = useState(false)
  const [stop,setStop] = useState(false)


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];




  const moneyPyramid = [
    { id: 1, amount: '$ 100'},
    { id: 2, amount: '$ 200'},
     {id: 3, amount: '$ 300'},
     { id: 4, amount: '$ 500'},
     { id: 5, amount: '$ 1000'},
      {id: 6, amount: '$ 2000'},
      {id: 7, amount: '$ 4000'},
     { id: 8, amount: '$ 8000'},
     {id: 9, amount: '$ 16000'},
      {id: 10, amount: '$ 32000'},
      {id: 11, amount: '$ 64000'},
      {id: 12, amount: '$ 12500'},
      {id: 13, amount: '$ 250000'},
     { id: 14, amount: '$ 50000'},
      {id: 15 , amount: ' $ 1000000'}
      

  ].reverse()

  useEffect(() => {

    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)


  },[moneyPyramid , questionNumber])

  return (
    <div className="App">

    <div className="main">

     {stop ? <h1 className ="endText"> You earned: {earned}</h1> : ( 
       <>

       
<div className="top">

<div class="timer">
   30
</div>

</div>

<div className="bottom">
  <Triva data={data}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
           setTimeOut={setTimeOut}
           setstop = {setStop}/>
</div>



       </>

       
     )}

    </div>

    <div className='pyramid'>

      <ul className="moneylist">
        {moneyPyramid.map(q=>(
          <li  className={
            questionNumber === q.id
              ? "moneyListItem active"
              : "moneyListItem"
          }>
            
              <span className="moneyListNumber">{q.id}</span>
              <span className="moneyListAmount">{q.amount}</span>
          </li>


        ))}

      </ul>
    </div>
    
    </div>
  );
}

export default App;
