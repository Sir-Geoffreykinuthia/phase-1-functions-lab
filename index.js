function distanceFromHqInBlocks(street){
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street){
    return Math.abs(42 - street) *264;
}

function distanceTravelledInFeet(start,destination){
    return Math.abs(distanceFromHqInFeet(destination) - distanceFromHqInFeet(start));
}

function calculatesFarePrice(start,destination){
    let distanceInFeet = distanceTravelledInFeet(start,destination);
    let fare;
    if (distanceInFeet <= 400){
        fare = 0;
    }else if (distanceInFeet <= 2000){
        fare = (distanceInFeet - 400) * 0.02;
    }else if (distanceInFeet <= 2500){
        fare = 25;
    }else{
        fare = 'cannot travel that far'
    }
    return fare;
}
