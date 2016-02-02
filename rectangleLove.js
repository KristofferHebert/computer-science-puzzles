  def find_range_overlap(point1, length1, point2, length2):

    # Find the highest start point and lowest end point.
    # The highest ("rightmost" or "upmost") start point is
    # the start point of the overlap.
    # The lowest end point is the end point of the overlap.
    highest_start_point = max(point1, point2)
    lowest_end_point = min(point1 + length1, point2 + length2)

    # Return (None, None) if there is no overlap.
    if highest_start_point >= lowest_end_point:
        return (None, None)

    # Compute the overlap length.
    overlap_length = lowest_end_point - highest_start_point

    return (highest_start_point, overlap_length)

def find_rectangular_overlap(rect1, rect2):

    # get the x and y overlap points and lengths
    x_overlap_point, overlap_width  = find_range_overlap(\
        rect1['x'], rect1['width'],  rect2['x'], rect2['width'])
    y_overlap_point, overlap_height = find_range_overlap(\
        rect1['y'], rect1['height'], rect2['y'], rect2['height'])

    # return None if there is no overlap
    if not overlap_width or not overlap_height:
        return None

    return {
        'x': x_overlap_point,
        'y': y_overlap_point,
        'width': overlap_width,
        'height': overlap_height
    }



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


    return {
        'x' :
        'y' :
        'width' :
        'height' :
    }
}
