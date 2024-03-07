import "./App.css";
import PlusIcon from "./assets/images/icon-star.svg?react";

function App() {
  return (
    <div className="container">
      <FAQ
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
"
      />
      <FAQ
        question="Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
      />

      <FAQ
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
      />

      <FAQ
        question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      />
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="faq-each-container">
      <div className="question-container">
        <h2 className="question">{question}</h2>
        <PlusIcon />
      </div>
      <p className="answer">{answer}</p>
    </div>
  );
}

export default App;
