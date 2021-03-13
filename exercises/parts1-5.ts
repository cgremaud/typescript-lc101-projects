// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kmMars: number = 225000000;
let kmMoon: number = 384400;
let milesPerKm: number = 0.621;

let milesMars: number = kmMars * milesPerKm;

// console.log(milesMars);
// console.log((milesMars/speedMph)/24)

// Part 2: Print Days to Mars



// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")

function getDaysToLocation(kmAway: number): number {
    let days: number = 0
    days = ((kmAway * milesPerKm) / speedMph)/24
    return days
}

// console.log(getDaysToLocation(kmMars))

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
