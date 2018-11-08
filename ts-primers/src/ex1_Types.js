function admitAge(age) {
    return "I am " + age + ", alright?!";
}
var myAge = 50;
var yourAge = 'One Hundred';
console.log("1. Type as Union ");
console.log(admitAge(yourAge)); // 'I am One Hundred, alright?!'
console.log(admitAge(myAge));
console.log("--------------------");
function goToParty(place) {
    return "lets go to the " + place;
}
goToParty("chuck e. cheese");
console.log("2. Type as enum ");
console.log(goToParty("pizza hut")); // 'I am One Hundred, alright?!'
console.log("--------------------");
