const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side Framework", isCorrect: false },
      { id: 1, text: "User Interface Framework", isCorrect: true },
      { id: 2, text: "Both A and B", isCorrect: false },
      { id: 3, text: "None of the Above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect:  false },
      { id: 2, text: "C", isCorrect: false},
      { id: 3, text: "C++", isCorrect: false  },
    ],
  },
  {
    text: "What is a State in React?",
    options: [
      { id: 0, text: "A Permanent Storage.", isCorrect:false },
      { id: 1, text: "Internal Storage of the Component.", isCorrect:true },
      { id: 2, text: "External Storage of the Component.", isCorrect:  false },
      { id: 3, text: "None of the Above.", isCorrect:  false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: "Pair of Current State & Func updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect:  false },
      { id: 2, text: "Function Updating the Current State", isCorrect:  false },
      { id: 3, text: "useState Returns Nothing", isCorrect:  false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: true },
      { id: 1, text: "2", isCorrect:  false  },
      { id: 2, text: "3", isCorrect:  false },
      { id: 3, text: "4", isCorrect:  false},
    ],
  },
];

export default questions;