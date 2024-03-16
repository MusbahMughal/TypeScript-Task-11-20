// Question-12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ["Honda Motorcycle", "Honda City", "Honda Civics"];

transportation.map((item) => console.log("I would like to own ", item));

// Question-13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArray: string[] = ["haniya", "arfa", "safiullah"];

guestArray.map((Guest) => console.log(`Hello friends, ${Guest} you are invited to dinner `));

// Question-14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("Changing Guest List:");

let canNotAttend: string = "arfa";
console.log(`${canNotAttend} cannot make it for dinner.`);

let newGuest: string = "haniya";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;

guestArray.map((Guest) => console.log(`Hello  ${Guest} you are invited to dinner `));

// Question -15 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Welcome all, we found a bigger table.");

guestArray.unshift("abdullah");
console.log(guestArray);

let middleGuest: string = "umair";
let middleIndex = Math.floor(guestArray.length / 2);
guestArray.splice(middleIndex, 0, middleGuest);

console.log(guestArray);

guestArray.push("kulsoom");
console.log(guestArray);

guestArray.map((item) => console.log(`Dear ${item} you are invited for dinner `));

// Question-16 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("We can invite only two people!");

while (guestArray.length > 2) {
    let removeGuest = guestArray.pop();
    console.log(`Sorry ${removeGuest}, we can't invite to dinner`);
}

guestArray.forEach((item) => console.log(`${item} you are still invited to dinner`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);

// Question-17 Seeing the World: Think of at least five places in the world you’d like to visit.

let placesToVisit: string[] = ["Hong Kong", "Canada", "Pakistan", "Iran", "Brazil"];
console.log("Places to visit: ", placesToVisit);

// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order: ", [...placesToVisit].sort());

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order: ", [...placesToVisit].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("Original order: ", placesToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order: ", [...placesToVisit].reverse());

let sortArray = ["Hong Kong", "Canada", "Pakistan", "Iran", "Brazil"];
console.log("Sorted Array: ", sortArray.sort());
console.log("Reversed Sorted Array: ", sortArray.sort().reverse());

// Question-19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`${guestArray.length} people are invited to dinner`);

// Question-20 Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries: string[] = ["London", "Pakistan", "Canada", "Japan"];
console.log("List of countries that I would visit:");
countries.forEach((item) => console.log(item));
