// GLOBAL VARIABLE

let playerKuk = document.getElementById("player1");
let playerKuk2 = document.getElementById("player2");



let totalMove = 0;
let totalMove2 = 0;
let turn = "player1";

// CHANGE TURN
function changeTurn(){
  if(turn==="player1"){
    turn = "player2";
    return turn;
  } else {
    turn = "player1"
    return turn;
  }
}

// DICE NUMBER GENERATOR

function diceMove(){
  let ranNum = Math.floor(Math.random()*10);
  if(ranNum===0){
    ranNum = 1;
  } else if(ranNum>6){
    ranNum = ranNum -3;
  }
  let disp = document.getElementById("display");
  disp.innerHTML = ranNum;

  //MOVING THE PLAYER
  if(turn==="player1") {
    totalMove = totalMove + ranNum;
    console.log(totalMove);
    if(totalMove===1){
      playerKuk.style.transform = "translate(0vh,72vh)"
    } else if(totalMove===2){
      playerKuk.style.transform = "translate(8vh,72vh)"
    } else if(totalMove===3){
      playerKuk.style.transform = "translate(16vh,72vh)"
    } else if(totalMove===4){
      playerKuk.style.transform = "translate(24vh,72vh)"
    } else if(totalMove===5){
      playerKuk.style.transform = "translate(32vh,72vh)"
    } else if(totalMove===6){
      playerKuk.style.transform = "translate(40vh,72vh)"
    } else if(totalMove===7){
      playerKuk.style.transform = "translate(48vh,72vh)"
    } else if(totalMove===8){
      playerKuk.style.transform = "translate(56vh,72vh)"
    } else if(totalMove===9){
      playerKuk.style.transform = "translate(64vh,72vh)"
    } else if(totalMove===10){
      playerKuk.style.transform = "translate(72vh,72vh)"
    } else if(totalMove===11){
      playerKuk.style.transform = "translate(72vh,64vh)"
    } else if(totalMove===12){
      playerKuk.style.transform = "translate(64vh,64vh)"
    } else if(totalMove===13){
      playerKuk.style.transform = "translate(56vh,64vh)"
    } else if(totalMove===14){
      playerKuk.style.transform = "translate(48vh,64vh)"
    } else if(totalMove===15){
      playerKuk.style.transform = "translate(40vh,64vh)"
    } else if(totalMove===16){
      playerKuk.style.transform = "translate(32vh,64vh)"
    } else if(totalMove===17){
      playerKuk.style.transform = "translate(24vh,64vh)"
    } else if(totalMove===18){
      playerKuk.style.transform = "translate(16vh,64vh)"
    } else if(totalMove===19){
      playerKuk.style.transform = "translate(8vh,64vh)"
    } else if(totalMove===20){
      playerKuk.style.transform = "translate(0vh,64vh)"
    } else if(totalMove===21){
      playerKuk.style.transform = "translate(0vh,56vh)"
    } else if(totalMove===22){
      playerKuk.style.transform = "translate(8vh,56vh)"
    } else if(totalMove===23){
      playerKuk.style.transform = "translate(16vh,56vh)"
    } else if(totalMove===24){
      playerKuk.style.transform = "translate(24vh,56vh)"
    } else if(totalMove===25){
      playerKuk.style.transform = "translate(32vh,56vh)"
    } else if(totalMove===26){
      playerKuk.style.transform = "translate(40vh,56vh)"
    } else if(totalMove===27){
      playerKuk.style.transform = "translate(48vh,56vh)"
    } else if(totalMove===28){
      playerKuk.style.transform = "translate(56vh,56vh)"
    } else if(totalMove===29){
      playerKuk.style.transform = "translate(64vh,56vh)"
    } else if(totalMove===30){
      playerKuk.style.transform = "translate(72vh,56vh)"
    } else if(totalMove===31){
      playerKuk.style.transform = "translate(72vh,48vh)"
    } else if(totalMove===32){
      playerKuk.style.transform = "translate(64vh,48vh)"
    } else if(totalMove===33){
      playerKuk.style.transform = "translate(56vh,48vh)"
    } else if(totalMove===34){
      playerKuk.style.transform = "translate(48vh,48vh)"
    } else if(totalMove===35){
      playerKuk.style.transform = "translate(40vh,48vh)"
    } else if(totalMove===36){
      playerKuk.style.transform = "translate(32vh,48vh)"
    } else if(totalMove===37){
      playerKuk.style.transform = "translate(24vh,48vh)"
    } else if(totalMove===38){
      playerKuk.style.transform = "translate(16vh,48vh)"
    } else if(totalMove===39){
      playerKuk.style.transform = "translate(8vh,48vh)"
    } else if(totalMove===40){
      playerKuk.style.transform = "translate(0vh,48vh)"
    } else if(totalMove===41){
      playerKuk.style.transform = "translate(0vh,40vh)"
    } else if(totalMove===42){
      playerKuk.style.transform = "translate(08vh,40vh)"
    } else if(totalMove===43){
      playerKuk.style.transform = "translate(16vh,40vh)"
    } else if(totalMove===44){
      playerKuk.style.transform = "translate(24vh,40vh)"
    } else if(totalMove===45){
      playerKuk.style.transform = "translate(32vh,40vh)"
    } else if(totalMove===46){
      playerKuk.style.transform = "translate(40vh,40vh)"
    } else if(totalMove===47){
      playerKuk.style.transform = "translate(48vh,40vh)"
    } else if(totalMove===48){
      playerKuk.style.transform = "translate(56vh,40vh)"
    } else if(totalMove===49){
      playerKuk.style.transform = "translate(64vh,40vh)"
    } else if(totalMove===50){
      playerKuk.style.transform = "translate(72vh,40vh)"
    } else if(totalMove===51){
      playerKuk.style.transform = "translate(72vh,32vh)"
    } else if(totalMove===52){
      playerKuk.style.transform = "translate(64vh,32vh)"
    } else if(totalMove===53){
      playerKuk.style.transform = "translate(56vh,32vh)"
    } else if(totalMove===54){
      playerKuk.style.transform = "translate(48vh,32vh)"
    } else if(totalMove===55){
      playerKuk.style.transform = "translate(40vh,32vh)"
    } else if(totalMove===56){
      playerKuk.style.transform = "translate(32vh,32vh)"
    } else if(totalMove===57){
      playerKuk.style.transform = "translate(24vh,32vh)"
    } else if(totalMove===58){
      playerKuk.style.transform = "translate(16vh,32vh)"
    } else if(totalMove===59){
      playerKuk.style.transform = "translate(08vh,32vh)"
    } else if(totalMove===60){
      playerKuk.style.transform = "translate(00vh,32vh)"
    } else if(totalMove===61){
      playerKuk.style.transform = "translate(00vh,24vh)"
    } else if(totalMove===62){
      playerKuk.style.transform = "translate(08vh,24vh)"
    } else if(totalMove===63){
      playerKuk.style.transform = "translate(16vh,24vh)"
    } else if(totalMove===64){
      playerKuk.style.transform = "translate(24vh,24vh)"
    } else if(totalMove===65){
      playerKuk.style.transform = "translate(32vh,24vh)"
    } else if(totalMove===66){
      playerKuk.style.transform = "translate(40vh,24vh)"
    } else if(totalMove===67){
      playerKuk.style.transform = "translate(48vh,24vh)"
    } else if(totalMove===68){
      playerKuk.style.transform = "translate(56vh,24vh)"
    } else if(totalMove===69){
      playerKuk.style.transform = "translate(64vh,24vh)"
    } else if(totalMove===70){
      playerKuk.style.transform = "translate(72vh,24vh)"
    } else if(totalMove===71){
      playerKuk.style.transform = "translate(72vh,16vh)"
    } else if(totalMove===72){
      playerKuk.style.transform = "translate(64vh,16vh)"
    } else if(totalMove===73){
      playerKuk.style.transform = "translate(56vh,16vh)"
    } else if(totalMove===74){
      playerKuk.style.transform = "translate(48vh,16vh)"
    } else if(totalMove===75){
      playerKuk.style.transform = "translate(40vh,16vh)"
    } else if(totalMove===76){
      playerKuk.style.transform = "translate(32vh,16vh)"
    } else if(totalMove===77){
      playerKuk.style.transform = "translate(24vh,16vh)"
    } else if(totalMove===78){
      playerKuk.style.transform = "translate(16vh,16vh)"
    } else if(totalMove===79){
      playerKuk.style.transform = "translate(08vh,16vh)"
    } else if(totalMove===80){
      playerKuk.style.transform = "translate(00vh,16vh)"
    } else if(totalMove===81){
      playerKuk.style.transform = "translate(00vh,08vh)"
    } else if(totalMove===82){
      playerKuk.style.transform = "translate(08vh,08vh)"
    } else if(totalMove===83){
      playerKuk.style.transform = "translate(16vh,08vh)"
    } else if(totalMove===84){
      playerKuk.style.transform = "translate(24vh,08vh)"
    } else if(totalMove===85){
      playerKuk.style.transform = "translate(32vh,08vh)"
    } else if(totalMove===86){
      playerKuk.style.transform = "translate(40vh,08vh)"
    } else if(totalMove===87){
      playerKuk.style.transform = "translate(48vh,08vh)"
    } else if(totalMove===88){
      playerKuk.style.transform = "translate(56vh,08vh)"
    } else if(totalMove===89){
      playerKuk.style.transform = "translate(64vh,08vh)"
    } else if(totalMove===90){
      playerKuk.style.transform = "translate(72vh,0vh)"
    } else if(totalMove===91){
      playerKuk.style.transform = "translate(72vh,0vh)"
    } else if(totalMove===92){
      playerKuk.style.transform = "translate(64vh,0vh)"
    } else if(totalMove===93){
      playerKuk.style.transform = "translate(56vh,0vh)"
    } else if(totalMove===94){
      playerKuk.style.transform = "translate(48vh,0vh)"
    } else if(totalMove===95){
      playerKuk.style.transform = "translate(40vh,0vh)"
    } else if(totalMove===96){
      playerKuk.style.transform = "translate(32vh,0vh)"
    } else if(totalMove===97){
      playerKuk.style.transform = "translate(24vh,0vh)"
    } else if(totalMove===98){
      playerKuk.style.transform = "translate(16vh,0vh)"
    } else if(totalMove===99){
      playerKuk.style.transform = "translate(08vh,0vh)"
    } else if(totalMove===100){
      playerKuk.style.transform = "translate(0vh,00vh)"
      alert("Player 1 Won the game.")
    } else if(totalMove>100){
      totalMove = totalMove - ranNum;
    }
  }    
  else {
      totalMove2 = totalMove2 + ranNum;
      console.log(totalMove2);
      if(totalMove2===1){
        playerKuk2.style.transform = "translate(0vh,72vh)"
      } else if(totalMove2===2){
        playerKuk2.style.transform = "translate(8vh,72vh)"
      } else if(totalMove2===3){
        playerKuk2.style.transform = "translate(16vh,72vh)"
      } else if(totalMove2===4){
        playerKuk2.style.transform = "translate(24vh,72vh)"
      } else if(totalMove2===5){
        playerKuk2.style.transform = "translate(32vh,72vh)"
      } else if(totalMove2===6){
        playerKuk2.style.transform = "translate(40vh,72vh)"
      } else if(totalMove2===7){
        playerKuk2.style.transform = "translate(48vh,72vh)"
      } else if(totalMove2===8){
        playerKuk2.style.transform = "translate(56vh,72vh)"
      } else if(totalMove2===9){
        playerKuk2.style.transform = "translate(64vh,72vh)"
      } else if(totalMove2===10){
        playerKuk2.style.transform = "translate(72vh,72vh)"
      } else if(totalMove2===11){
        playerKuk2.style.transform = "translate(72vh,64vh)"
      } else if(totalMove2===12){
        playerKuk2.style.transform = "translate(64vh,64vh)"
      } else if(totalMove2===13){
        playerKuk2.style.transform = "translate(56vh,64vh)"
      } else if(totalMove2===14){
        playerKuk2.style.transform = "translate(48vh,64vh)"
      } else if(totalMove2===15){
        playerKuk2.style.transform = "translate(40vh,64vh)"
      } else if(totalMove2===16){
        playerKuk2.style.transform = "translate(32vh,64vh)"
      } else if(totalMove2===17){
        playerKuk2.style.transform = "translate(24vh,64vh)"
      } else if(totalMove2===18){
        playerKuk2.style.transform = "translate(16vh,64vh)"
      } else if(totalMove2===19){
        playerKuk2.style.transform = "translate(8vh,64vh)"
      } else if(totalMove2===20){
        playerKuk2.style.transform = "translate(0vh,64vh)"
      } else if(totalMove2===21){
        playerKuk2.style.transform = "translate(0vh,56vh)"
      } else if(totalMove2===22){
        playerKuk2.style.transform = "translate(8vh,56vh)"
      } else if(totalMove2===23){
        playerKuk2.style.transform = "translate(16vh,56vh)"
      } else if(totalMove2===24){
        playerKuk2.style.transform = "translate(24vh,56vh)"
      } else if(totalMove2===25){
        playerKuk2.style.transform = "translate(32vh,56vh)"
      } else if(totalMove2===26){
        playerKuk2.style.transform = "translate(40vh,56vh)"
      } else if(totalMove2===27){
        playerKuk2.style.transform = "translate(48vh,56vh)"
      } else if(totalMove2===28){
        playerKuk2.style.transform = "translate(56vh,56vh)"
      } else if(totalMove2===29){
        playerKuk2.style.transform = "translate(64vh,56vh)"
      } else if(totalMove2===30){
        playerKuk2.style.transform = "translate(72vh,56vh)"
      } else if(totalMove2===31){
        playerKuk2.style.transform = "translate(72vh,48vh)"
      } else if(totalMove2===32){
        playerKuk2.style.transform = "translate(64vh,48vh)"
      } else if(totalMove2===33){
        playerKuk2.style.transform = "translate(56vh,48vh)"
      } else if(totalMove2===34){
        playerKuk2.style.transform = "translate(48vh,48vh)"
      } else if(totalMove2===35){
        playerKuk2.style.transform = "translate(40vh,48vh)"
      } else if(totalMove2===36){
        playerKuk2.style.transform = "translate(32vh,48vh)"
      } else if(totalMove2===37){
        playerKuk2.style.transform = "translate(24vh,48vh)"
      } else if(totalMove2===38){
        playerKuk2.style.transform = "translate(16vh,48vh)"
      } else if(totalMove2===39){
        playerKuk2.style.transform = "translate(8vh,48vh)"
      } else if(totalMove2===40){
        playerKuk2.style.transform = "translate(0vh,48vh)"
      } else if(totalMove2===41){
        playerKuk2.style.transform = "translate(0vh,40vh)"
      } else if(totalMove2===42){
        playerKuk2.style.transform = "translate(08vh,40vh)"
      } else if(totalMove2===43){
        playerKuk2.style.transform = "translate(16vh,40vh)"
      } else if(totalMove2===44){
        playerKuk2.style.transform = "translate(24vh,40vh)"
      } else if(totalMove2===45){
        playerKuk2.style.transform = "translate(32vh,40vh)"
      } else if(totalMove2===46){
        playerKuk2.style.transform = "translate(40vh,40vh)"
      } else if(totalMove2===47){
        playerKuk2.style.transform = "translate(48vh,40vh)"
      } else if(totalMove2===48){
        playerKuk2.style.transform = "translate(56vh,40vh)"
      } else if(totalMove2===49){
        playerKuk2.style.transform = "translate(64vh,40vh)"
      } else if(totalMove2===50){
        playerKuk2.style.transform = "translate(72vh,40vh)"
      } else if(totalMove2===51){
        playerKuk2.style.transform = "translate(72vh,32vh)"
      } else if(totalMove2===52){
        playerKuk2.style.transform = "translate(64vh,32vh)"
      } else if(totalMove2===53){
        playerKuk2.style.transform = "translate(56vh,32vh)"
      } else if(totalMove2===54){
        playerKuk2.style.transform = "translate(48vh,32vh)"
      } else if(totalMove2===55){
        playerKuk2.style.transform = "translate(40vh,32vh)"
      } else if(totalMove2===56){
        playerKuk2.style.transform = "translate(32vh,32vh)"
      } else if(totalMove2===57){
        playerKuk2.style.transform = "translate(24vh,32vh)"
      } else if(totalMove2===58){
        playerKuk2.style.transform = "translate(16vh,32vh)"
      } else if(totalMove2===59){
        playerKuk2.style.transform = "translate(08vh,32vh)"
      } else if(totalMove2===60){
        playerKuk2.style.transform = "translate(00vh,32vh)"
      } else if(totalMove2===61){
        playerKuk2.style.transform = "translate(00vh,24vh)"
      } else if(totalMove2===62){
        playerKuk2.style.transform = "translate(08vh,24vh)"
      } else if(totalMove2===63){
        playerKuk2.style.transform = "translate(16vh,24vh)"
      } else if(totalMove2===64){
        playerKuk2.style.transform = "translate(24vh,24vh)"
      } else if(totalMove2===65){
        playerKuk2.style.transform = "translate(32vh,24vh)"
      } else if(totalMove2===66){
        playerKuk2.style.transform = "translate(40vh,24vh)"
      } else if(totalMove2===67){
        playerKuk2.style.transform = "translate(48vh,24vh)"
      } else if(totalMove2===68){
        playerKuk2.style.transform = "translate(56vh,24vh)"
      } else if(totalMove2===69){
        playerKuk2.style.transform = "translate(64vh,24vh)"
      } else if(totalMove2===70){
        playerKuk2.style.transform = "translate(72vh,24vh)"
      } else if(totalMove2===71){
        playerKuk2.style.transform = "translate(72vh,16vh)"
      } else if(totalMove2===72){
        playerKuk2.style.transform = "translate(64vh,16vh)"
      } else if(totalMove2===73){
        playerKuk2.style.transform = "translate(56vh,16vh)"
      } else if(totalMove2===74){
        playerKuk2.style.transform = "translate(48vh,16vh)"
      } else if(totalMove2===75){
        playerKuk2.style.transform = "translate(40vh,16vh)"
      } else if(totalMove2===76){
        playerKuk2.style.transform = "translate(32vh,16vh)"
      } else if(totalMove2===77){
        playerKuk2.style.transform = "translate(24vh,16vh)"
      } else if(totalMove2===78){
        playerKuk2.style.transform = "translate(16vh,16vh)"
      } else if(totalMove2===79){
        playerKuk2.style.transform = "translate(08vh,16vh)"
      } else if(totalMove2===80){
        playerKuk2.style.transform = "translate(00vh,16vh)"
      } else if(totalMove2===81){
        playerKuk2.style.transform = "translate(00vh,08vh)"
      } else if(totalMove2===82){
        playerKuk2.style.transform = "translate(08vh,08vh)"
      } else if(totalMove2===83){
        playerKuk2.style.transform = "translate(16vh,08vh)"
      } else if(totalMove2===84){
        playerKuk2.style.transform = "translate(24vh,08vh)"
      } else if(totalMove2===85){
        playerKuk2.style.transform = "translate(32vh,08vh)"
      } else if(totalMove2===86){
        playerKuk2.style.transform = "translate(40vh,08vh)"
      } else if(totalMove2===87){
        playerKuk2.style.transform = "translate(48vh,08vh)"
      } else if(totalMove2===88){
        playerKuk2.style.transform = "translate(56vh,08vh)"
      } else if(totalMove2===89){
        playerKuk2.style.transform = "translate(64vh,08vh)"
      } else if(totalMove2===90){
        playerKuk2.style.transform = "translate(72vh,0vh)"
      } else if(totalMove2===91){
        playerKuk2.style.transform = "translate(72vh,0vh)"
      } else if(totalMove2===92){
        playerKuk2.style.transform = "translate(64vh,0vh)"
      } else if(totalMove2===93){
        playerKuk2.style.transform = "translate(56vh,0vh)"
      } else if(totalMove2===94){
        playerKuk2.style.transform = "translate(48vh,0vh)"
      } else if(totalMove2===95){
        playerKuk2.style.transform = "translate(40vh,0vh)"
      } else if(totalMove2===96){
        playerKuk2.style.transform = "translate(32vh,0vh)"
      } else if(totalMove2===97){
        playerKuk2.style.transform = "translate(24vh,0vh)"
      } else if(totalMove2===98){
        playerKuk2.style.transform = "translate(16vh,0vh)"
      } else if(totalMove2===99){
        playerKuk2.style.transform = "translate(08vh,0vh)"
      } else if(totalMove2===100){
        playerKuk2.style.transform = "translate(0vh,00vh)"
        alert("Player 2 Won the game.")
      } else if(totalMove2>100){
        totalMove2 = totalMove2 - ranNum;
      }
    }
    let turnind = document.querySelector(".playerTurnInd") 
    
      changeTurn();
      turnind.innerHTML = turn + "'s TURN"
}

// DICE BUTTON FUNCTIONING

const diceButton = document.getElementById("diceBut");
diceButton.addEventListener("click", diceMove);

//GAME START
window.onload = function(){
    playerKuk.style.transform = "translate(0vh,80vh)"
    playerKuk2.style.transform = "translate(0vh,80vh)"
}


