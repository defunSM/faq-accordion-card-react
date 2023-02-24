import './App.css';
import desktopimg from './images/illustration-box-desktop.svg';
import desktopwoman from './images/illustration-woman-online-desktop.svg';
import downarrow from './images/icon-arrow-down.svg'
import { useState } from 'react'

function FaqSection (props) {

  const [ showAnswer, setShowAnswer ] = useState(false);

  const isAnswerVisible = showAnswer ? "answer-visible" : "answer-not-visible";
  const arrowState = showAnswer ? "upArrow": "downArrow";
  const questionState = showAnswer ? "question-active" : "question";

  return (
    <>
        <div className="faqsection">
        <div className={questionState} onClick={() => setShowAnswer(!showAnswer)}>{props.question}<img className={arrowState} src={downarrow} alt="arrow"></img></div>
        <div className={isAnswerVisible}>{props.answer}</div>
        </div>
    </>
  )
}

function App() {
  return (<>
  <div className="pseudo-box">
  <img className="box" src={desktopimg} alt="desktopimg"></img>
  </div>
    <div className="container">

      <div className="left">
        <img className="woman" src={desktopwoman} alt="desktopwoman"></img>


      </div>
      <div className="right">
        <h1>FAQ</h1>
        <div className="faq-section">        <FaqSection question="How many team members can I invite?" answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."></FaqSection>

        <FaqSection question="What is the maximum file upload size?" answer="No more than 2GB. All files in your account must fit your allotted storage space."></FaqSection>

        <FaqSection question="How do I reset my password?" answer="        Click “Forgot password” from the login page or “Change password” from your profile page.

        A reset link will be emailed to you."></FaqSection>

        <FaqSection question="Can I cancel my subscription?" answer="      Yes! Send us a message and we’ll process your request no questions asked."></FaqSection>

        <FaqSection question="Do you provide additional support?" answer=" Chat and email support is available 24/7. Phone lines are open during normal business hours."></FaqSection>
        </div>
      </div>


    </div>

</>
  );
}

export default App;
