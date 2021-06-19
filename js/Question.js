class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h1');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
  }
 position(){
  this.question.position(130, 200);
  }

  display(){
    this.title.html("👨‍🎓My Quiz Game👨‍🎓");
    this.title.position(350, 50);

    this.question.html("Question:- Which is the longest river in the world ?" );
    this.question.position(130, 220);
    this.option1.html("A: Ganga" );
    this.option1.position(150, 350);
    this.option2.html("B: Amazon River" );
    this.option2.position(550,350);
    this.option3.html("C: Nile" );
    this.option3.position(150,400);
    this.option4.html("D: Yamuna River" );
    this.option4.position(550, 400);

    this.input1.position(250, 530);
    this.input2.position(550, 530);
    this.button.position(460, 570);

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
    });
  }
}
