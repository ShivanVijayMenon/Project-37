class Question {
  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.greeting = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.greeting.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/2-150, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(width/2 -400, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(width/2 -400, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(width/2 -400, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(width/2 -400, 140);
    this.option4.html("4: Example" );
    this.option4.position(width/2 -400, 160);

    this.input1.position(width/2 - 300, 230);
    this.input2.position(width/2- 100 , 230);
    this.button.position(width/2 -150, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      this.greeting.position(width/2 - 150, 0);
      this.greeting.html("Wait for atleast second player to type answer");

    });
  }
}
