function findOverLap (point1, length1, point2, length2) {
    var highestStartPoint = Math.max(point1, point2)
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2)
    var overlapLength

    if ( highestStartPoint >= lowestEndPoint ) {
        return false
    }

    overlapLength = lowestEndPoint - highestStartPoint

    return (highestStartPoint, overlapLength)
}

function findRectangularOverlap(rect1, rect2) {
    var xOverLapPoint
    var overlapWidth = findOverLap(rect1['x'], rect1['width'],  rect2['x'], rect2['width'])

    var yOverLapPoint
    var overlapHeight = findOverLap(rect1['y'], rect1['height'],  rect2['y'], rect2['height'])

    if(x)

    return {
        'x' :
        'y' :
        'width' :
        'height' :
    }
}
