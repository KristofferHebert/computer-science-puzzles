function binarySearch(array, target){

    var middle = array.length / 2
    var firstHalf = array.slice(0, middle)
    var secondHalf =  array.slice(middle, array.length)

        if (array[middle] === target)
            return middle
        else if(array[middle] < target)
            binarySearch(secondHalf, value)
        else if(array[middle] > target)
            binarySearch(firstHalf, value)
        else {
            return -1
        }

}
