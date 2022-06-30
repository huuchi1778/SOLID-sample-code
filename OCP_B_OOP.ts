type Question = {
  description: string,
  type: string
}

class Exam {
  questions: Question[];

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  printOut() {
    this.questions.forEach(question => {
      console.log(question.description);
      switch (question.type) {
        case 'boolean':
          console.log('1. True');
          console.log('2. False');
          break;
        case 'multipleChoice':
          console.log('1. Option A');
          console.log('2. Option B');
          console.log('3. Option C');
          console.log('4. Option D');
          break;
        case 'text':
          console.log('Answer:_____________');
          break;
      }
    });
  }
}

const questions = [
  {
    description: 'Is 2 + 5 = 7?',
    type: 'boolean'
  },
  {
    description: 'What is your favorite color?',
    type: 'multipleChoice'
  },
  {
    description: 'What is your name?',
    type: 'text'
  }
];

const myExam = new Exam(questions);
myExam.printOut();