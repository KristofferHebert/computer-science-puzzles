function getMoviesByLength(moviesArray, flightTime){

    // Validate inputs
    if(!Array.isArray(moviesArray) || flight) {
        return throw new Error('Please provide correct inputs of a Array and Integer')
    }

    // Grab first movie and subtract from flighTime
    var firstMovie = moviesArray.pop()
    var timeLeft = firstMovie - flightTime

    //Search for movies that would fit in flight time left
    if(moviesArray.indexOf(timeLeft))
        return true

    // No matching movies
    return false
}
