const findTheOldest = function(people) {
    let oldest = people[0];
    let oldestAge, personAge;
    people.forEach( (person) => {
        if(person.yearOfDeath === undefined){
            person.yearOfDeath = 2024;
        }
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        personAge = person.yearOfDeath - person.yearOfBirth;
        if(personAge > oldestAge){
            oldest = person;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
