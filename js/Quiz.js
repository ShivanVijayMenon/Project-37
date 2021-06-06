class Quiz {
  constructor(){}

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
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background(255, 237, 79);
    //write code to show a heading for showing the result of Quiz]
    fill("black");
    textSize(30);
    text("Result of the Quiz!", displayWidth/2 - 150, 50);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      
      fill("blue");
      textSize(20);
      text("Contestants who answered correctly are in green color!", displayWidth/2 - 50, displayWidth + 100);

      var displayPosition = 200;

      for(var ans in allContestants){
        
        if(allContestants[ans].answer === "2"){
          
          fill("green");

        }
        else{

          fill("red");

        }
      displayPosition = displayPosition + 50;
      textSize(20);
      text(allContestants[ans].name + " : " + allContestants[ans].answer, displayWidth/2 -50, displayPosition);
      


    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }
}