class Quiz {
  constructor(){
    this.won = createElement('h2');
    this.lost = createElement('h2');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();

    }
  }

  play(){

    question.hide();
    background(bgImg);
    ans.visible=false;
    question3.visible=false;
    sparkle.visible=true;
    sparkle2.visible=true;
    sparkle3.visible=true;
    fill("white");
    textFont("Arial Black");
    textSize(30);
    text("Result of the Quiz",340, 150);
    text("----------------------------------",320, 165);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 350;
     fill("white");
     textSize(30);

      for(var plr in allContestants){
        debugger;
        var correctAns = "C";
        var correctAns2 = "c"
        if ((correctAns === allContestants[plr].answer)||(correctAns2 === allContestants[plr].answer))
         { fill("white")
          textSize(30);
          textFont("Arial Black");
          display_Answers+=60;
          text("🏆"+allContestants[plr].name + "         " + "  won", 270,display_Answers)
          textSize(35);
          text("🎉"+allContestants[plr].name + " is the winner of quiz🎉", 240,300)



      }
        else
         { fill("white");
          textSize(30);
          textFont("Arial Black");
          display_Answers+=60;
          text("    "+allContestants[plr].name + "        " + "  lost", 270,display_Answers)


        }
    
  }
    
    }}}
