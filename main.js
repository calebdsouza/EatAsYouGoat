function Goat(username, password, originalPoints, tags) {
    if (username === null) {
        this.name = "newUser";   
    } else {
        this.name = username; 
    }
    if (password === null) {
        this.pass = "1234"
    } else {
        this.pass = password
    }
    if (originalPoints === null) {
        this.healthyPoints = 1
    } else {
        this.healthyPoints = originalPoints;
    }
    if (tags === null) {
        this.tagList = []
    } else {
        this.tagList = function setList(tags) {
            this.tagList = tags.sort();
        }
    }
    
    this.pointsRecalculator = function (foodTag) {
        var tagListFindValue = tagList.find(foodTag);
        //Check if the tag exists in the list 
        if (typeof tagListFindValue === 'undefined') {
            this.healthyPoints -= 1;
        } else {
            this.healthyPoints += 1;
        }//end if 
    };
    
    this.currentLevel = function Level(){
        if (healthyPoints>=0 && healthyPoints<10){
            currnetLevel = 0;
        }
        else if (healthyPoints>=10 && healthyPoints<20){
            currnetLevel = 1;
        }
        else if (healthyPoints>=20 && healthyPoints<30){
            currnetLevel = 2;
        }
        else if (healthyPoints>=30 && healthyPoints<40){
            currnetLevel = 3;
        }
        else if (healthyPoints>=40 && healthyPoints<60){
            currnetLevel = 4;
        }
        else if (healthyPoints>=60 && healthyPoints<80){
            currnetLevel = 5;
        }
        else if (healthyPoints>=80 && healthyPoints<100){
            currnetLevel = 6;
        }
        else if (healthyPoints>=100 && healthyPoints<125){
            currnetLevel = 7;
        }
        else if (healthyPoints>=125 && healthyPoints<150){
            currnetLevel = 8;
        }
        else if (healthyPoints>=150 && healthyPoints<175){
            currnetLevel = 9;
        }
        else if (healthyPoints>=175 && healthyPoints<200){
            currnetLevel = 10;
        }
        else if (healthyPoints>=200 && healthyPoints<225){
            currnetLevel = 11;
        }
        else if (healthyPoints>225){
            currnetLevel = 12;
        }
    };
    this.levelPic = function () {
        var LEVELS = ['levels/0.png', 'levels/1.png', 'levels/2.png', 'levels/3.png', 'levels/4.png', 'levels/5.png', 'levels/6.png', 'levels/7.png', 'levels/8.png', 'levels/9.png', 'levels/10.png', 'levels/11.png', 'levels/12.png']
        return LEVEL[this.currentLevel]; 
    };
    (function () {
        document.getElementById("pg").src=this.levelPic
    })();

}
var goat1 = new Goat("gaotie", "20", ['apple', 'pear', 'salad'])
