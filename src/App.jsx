import "./App.css";
import PlusIcon from "./assets/images/icon-plus.svg?react";
import MinusIcon from "./assets/images/icon-minus.svg?react";
import StarIcon from "./assets/images/icon-star.svg?react";
import { useState } from "react";

function App() {
  return (
    <main className="FAQ-container">
      <div className="title">
        <h1>
          <span>
            <StarIcon />
          </span>
          FAQs
        </h1>
      </div>
      <div className="question-container">
        <FAQ
          question="What is Frontend Mentor, and how will it help me?"
          answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
"
          airaControlContent="answer1"
        />
        <FAQ
          question="Is Frontend Mentor free?"
          answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          airaControlContent="answer2"
        />

        <FAQ
          question="Can I use Frontend Mentor projects in my portfolio?"
          answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          airaControlContent="answer3"
        />

        <FAQ
          question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
          answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          airaControlContent="answer4"
        />
      </div>
    </main>
  );
}

function FAQ({ question, answer, airaControlContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(isOpen);

  return (
    <div className="faq-each-container">
      <div className="question-container">
        <div className="question">
          <Icon />
        </div>
      </div>
      {isOpen && (
        <p className="answer" id={airaControlContent}>
          {answer}
        </p>
      )}
    </div>
  );

  function Icon() {
    return (
      <button
        aria-expanded={ariaExpanded}
        aria-controls={airaControlContent}
        className="icon-container"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <MinusIcon
            className="minusIcon"
            ocusable="false"
            aria-hidden="true"
          />
        ) : (
          <PlusIcon className="plusIcon" focusable="false" aria-hidden="true" />
        )}
      </button>
    );
  }
}

export default App;
