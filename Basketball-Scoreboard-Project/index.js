
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnSecond = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreBtnFour = document.getElementById("home-score-btn-4")
let homeScoreBtnFivth= document.getElementById("home-score-btn-5")
let homeScoreBtnSixthe = document.getElementById("home-score-btn-6")

let homeStoreEl1 =document.getElementById("home-score1")
let homeStoreEl2 =document.getElementById("home-score2")
let homeScore1 = 0
let homeScore2 = 0

function increaseHomeScoreOne(){
    homeScore1 += 1
    homeStoreEl1.textContent = homeScore1
}

function increaseHomeScoreSecond(){
    homeScore1 += 2
    homeStoreEl1.textContent = homeScore1
}

function increaseHomeScoreThree(){
    homeScore1 += 3
    homeStoreEl1.textContent = homeScore1
}

function increaseHomeScoreFour() {
    homeScore2 += 1
    homeStoreEl2.textContent = homeScore2
}

function increaseHomeScoreFive() {
    homeScore2 += 2
    homeStoreEl2.textContent = homeScore2
}

function increaseHomeScoreSixthe() {
    homeScore2 += 3
    homeStoreEl2.textContent = homeScore2
}