import React, { useEffect,useState } from 'react'


const Trivia = ({  data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
    setstop}) => {
    

    const [question, setQuestion] = useState(null)
    const [selectAnswer, setSelectAnswer] = useState(null)
    const [className,setClassName] = useState('')

    const delay = (duration, callback) => {
      setTimeout(() => {
        callback();
      }, duration);
    };

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);



      const handleClick = (a) => {
        setSelectAnswer(a);
        setClassName("answer active");
        delay(3000, () => {
          setClassName(a.correct ? "answer correct" : "answer wrong");
        });
        // setTimeout(() => {
        //   setClassName(a.correct ? "answer correct" : "answer wrong");
        // }, 3000);
    
        // setTimeout(() => {
          delay(5000, () => {

            setQuestionNumber((prev) => prev + 1);
            setSelectAnswer(null);
         
        // }, 5000);
          })
      };

  return(
      <div className="trivia">

          <div className="question">
             {question?.question}
          </div>

          <div className="answers" >
            {question?.answers.map((a)=>(
                
                <div className={ selectAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text} </div>
  ))}
                  </div>



      </div>
  )
    


}


export default Trivia