function goat(username, originalPoints, tagList)
{
    this.name = username;
    this.healthyPoints = orignalPoints; 
    this.currnetLevel = "level/0.png";
    this.tagList = null
        
    function setList(taglist){
        this.tagList = tagList.sort()
    }
    
    this.pointsRecalculator = function (foodTag){
        tagListFindValue = tagList.find(foodTag);
        //Check if the tag exists in the list 
        if(typeof tagListFindValue == 'undefined')
        {
            this.healthyPoints -= 1;
        }
        else
        {
            this.healthyPoints += 1;
        }//end if 
    };
    
    this.getLevel = function(){
        LEVELS = ['levels/0.png', 'levels/1.png', 'levels/2.png', 'levels/3.png', 'levels/4.png', 'levels/5.png', 'levels/6.png', 'levels/7.png', 'levels/8.png', 'levels/9.png', 'levels/10.png', 'levels/11.png', 'levels/12.png', 'levels/13.png', 'levels/14.png', 'levels/15.png', 'levels/16.png']
        this.currentLevel = LEVEL[this.healthyPoints]; 
    };
    
    
    

}