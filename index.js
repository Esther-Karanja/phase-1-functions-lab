//return distance in blocks from hq(42)
function distanceFromHqInBlocks(newBlock){
    if(newBlock<42){
        return Math.abs((newBlock-42));
    }else{
        return Math.abs((42-newBlock));
    }
}

//calls distanceFromHqInBlocks function then multiply it by 264 to get feet
function distanceFromHqInFeet(newBlock){
    return distanceFromHqInBlocks(newBlock)*264;
}

//distance travelled in feet between 2 points: a start and a destination
function distanceTravelledInFeet(start, destination){
    if(destination>start){
        return (destination-start)*264; 
    }else{
        return (start-destination)*264;
    }
}

//calculates fare price based on feet travelled
function calculatesFarePrice(start, destination){
    let distance =distanceTravelledInFeet(start, destination)
    if(distance <=400){
        return 0;
    }else if(distance>=401 && distance<=2000){
        return ((distance-400)*2/100);
    }else if(distance>2000 && distance<=2500){
        return 25;
    }else if(distance>2500){
        return 'cannot travel that far';
    }

}