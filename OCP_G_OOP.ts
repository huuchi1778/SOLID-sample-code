type Question = {
  description: string,
  printQuestionChoices(): void;
}

class Exam {
  questions: Question[];

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  printOut() {
    this.questions.forEach(question => {
      console.log(question.description);
      question.printQuestionChoices();
    });
  }
}

class BooleanQuestion {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. Option A');
    console.log('2. Option B');
    console.log('3. Option C');
    console.log('4. Option D');
  }
}

class TextQuestion {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Answer:_____________');
  }
}

const questions = [
  new BooleanQuestion('Is 2 + 5 = 7?'),
  new MultipleChoiceQuestion('What is your favourite color?'),
  new TextQuestion('What is your name?')
];

const myExam = new Exam(questions);
myExam.printOut();