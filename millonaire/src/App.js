// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Triva from './components/Trivia';

function App() {

  const [active, setActive] = useState(1)


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


  return (
    <div className="App">

    <div className="main">
       <div className="top">

         <div class="timer">
            30
         </div>

       </div>

       <div className="bottom">
           <Triva/>
       </div>
    </div>

    <div className='pyramid'>
      money

      <ul className="moneylist">
        {moneyPyramid.map(q=>(
          <li className={q.id === active ? 'moneyListItem active' : 'moneyListItem'}>
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
