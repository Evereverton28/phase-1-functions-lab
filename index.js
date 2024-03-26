function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    let distance;

    if (pickupLocation > hqLocation) {
        distance = pickupLocation - hqLocation;
    } else {
        distance = hqLocation - pickupLocation;
    }

    return distance;
}
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blockInFeet = 264;
    return distanceFromHqInBlocks(pickupLocation) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264;
    return Math.abs(destination - start) * blockInFeet;
}

function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination);

    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02;
    } else if (totalDistance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

