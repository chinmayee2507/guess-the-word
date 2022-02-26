player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player1" ;
answer_turn = "player2" ;


document.getElementById("player1_name").innerHTML = player1_name + ": " ;
document.getElementById("player2_name").innerHTML = player2_name + ": " ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn :  " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn :  " + player2_name ;

function send(){

  get_word = document.getElementById("word").value ;
  word = get_word.toLowerCase();
  console.log("lowercase word =  " + word );

  charAt1 = word.charAt(1);
  console.log(charAt1);

  length_half = Math.floor(word.length / 2);
  charAt2 = word.charAt(length_half);
  console.log(charAt2);

  length_minus_1 = word.length - 1 ;
  charAt3 = word.charAt(length_minus_1);
  console.log(charAt3);

  remove_char1 = word.replace(charAt1 , "_");
  remove_char2 = remove_char1.replace(charAt2 , "_");
  remove_char3 = remove_char2.replace(charAt3 , "_");

  console.log(remove_char3);

 q_word = "<h4 id='word_display'>" + "Q.  " + remove_char3 + "</h4>" ;
 input_box = "<br><br>" + "Answer:  " + "<input type='text' id='input_checkbox'>" ;
btn_check = "<br><br>" + "<button id='checkbtn' class='btn btn-primary' onclick = 'check()'> Check </button>" ;

row = q_word + input_box + btn_check ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "" ;

}

function check(){

  get_answer = document.getElementById("input_checkbox").value ;
  answer = get_answer.toLowerCase();
  console.log("Answer in lower case: " + answer);

if (answer == word){

  if(answer_turn == "player1"){
    player1_score = player1_score + 1 ;
    document.getElementById("player1_score").innerHTML = player1_score ;
  }
  else{
player2_score = player2_score + 1 ;
document.getElementById("player2_score").innerHTML = player2_score ;
  }

}
 if (answer_turn == "player1"){
   answer_turn = "player2" ;
   document.getElementById("player_answer").innerHTML = "Answer turn: " + player2_name ;
 }

 else{
   answer_turn = "player1" ;
   document.getElementById("player_answer").innerHTML = "Answer turn: " + player1_name ;
 }

 if (question_turn == "player1"){
   question_turn = "player2" ;
   document.getElementById("question_turn").innerHTML = "Question turn: " + player2_name ;
 }

 else{
   question_turn = "player1" ;
   document.getElementById("question_turn").innerHTML = "Question turn: " + player1_name ;
 }

 document.getElementById("output").innerHTML = "";
}