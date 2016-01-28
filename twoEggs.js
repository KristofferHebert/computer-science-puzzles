function twoEggs(floorBreak){
    firstEggBreak;
    floors = 100
    trys = 0

    function getFirstBreak(flrs){
        var fl = (flrs / 2)

        if (floorBreak < fl) {
            floors = fl
            return fl
        } else {
            getFirstBreak(flrs)
        }
    }

    firstEggBreak = getFirstBreak(floors)

    for(var i = 0; i !== firstEggBreak; i++){
        console.log('Second egg dropped from' + i)

        if()
    }
}
