/**************************************************************************
 * Subject: Elevator Saga Programming Game (https://play.elevatorsaga.com)
 * Description: Solution to the Elevator Saga game written in JavaScript.
 *              Works minimally for challenges 1-13.
 **************************************************************************/

/******************************************************************************
 *  Note: The documentation for these excercises are a bit incomplete.
 *        For example, there exists an attribute for each floor item in the 
 *        floors array called buttonStates appears to be an object containing
 *        directions of boolean type. Looking at some of the examples in the
 *        GitHub repository may shed more light as to what is available to use
 *        and how to use it.
 ******************************************************************************/

{
    init: function(elevators, floors) {
        elevators.forEach((elevator) => {
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });

            elevator.on("passing_floor", (floorNum, direction) => {
                if (floors[floorNum].buttonStates[direction] == elevator.destinationDirection() && elevator.loadFactor() < .7 || elevator.destinationQueue.includes(floorNum)) {
                    elevator.destinationQueue.unshift(floorNum);
                    elevator.checkDestinationQueue();
                } 
            });

            elevator.on("floor_button_pressed", (floorNum) => {
                elevator.goToFloor(floorNum);
            });
        });
    },
    update: function(dt, elevators, floors) {
    }
}