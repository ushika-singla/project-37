class Quiz{
   constructor(){

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
   background("yellow");
   textSize(30);
   text("Result of the Quiz",400,50);
   Contestant.getContestantInfo();
   console.log(allContestants);
   if(allContestants!=undefined){
    var y=300;
      for(var plr in allContestants){
         var correctAns = "2";
         if(correctAns === allContestants[plr].answer){
            fill("green");
         }
         else
            fill("red");

            text(allContestants[plr].name + " : " + allContestants[plr].answer,100,y);
            y=y+30;
      }

   }

}

}