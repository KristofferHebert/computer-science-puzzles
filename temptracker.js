function TempTracker() {

    var temps = []
	var min = 0
	var max = 0

	var hashtable = {}

	function getMode() {

        var modeValue = 0
        var mode

        for(key in hashtable){

            if(hashtable.hasOwnProperty(key)){

                if(key < modeValue){
                    modeValue = key
                    mode = hashtable[key]
                }
            }

        }

        return mode
	}

	function getMean() {
		var mean = temps.reduce(function(a, b) {
			return a + b
		})

		return (mean / temps.length)
	}

	function getMax() {
		return max
	}

	function getMin() {
		return min
	}

	function insert(val) {

		// Check if value exists in temps array, then add to hashtable
		if (temps.indexOf(val)) {
			if (hashtable.hasOwnProperty(val)) {
				hashtable[val] = hashtable[val] + 1
			} else {
				hashtable[val] = 1
			}
		}

		// Cache Max/ Min values
		if (min === 0) {

			max = val
			min = val
		} else {

			if (max < val)
				max = val
			else if (min > val) {
				min = val
			}

		}

		temps.push(val)
	}


	return {
		getMean: getMean,
		getMax: getMax,
		getMin: getMin,
		getMode: getMode,
		insert: insert
	}
}


var temptracker = TempTracker()


temptracker.insert(90)
temptracker.insert(99)
temptracker.insert(99)
temptracker.insert(99)
temptracker.insert(99)
temptracker.insert(100)

console.log(temptracker.getMax())
console.log(temptracker.getMin())
console.log(temptracker.getMean())
console.log(temptracker.getMode())
