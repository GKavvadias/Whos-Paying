function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomName = Math.floor(Math.random(names) * numberOfPeople);
    return names[randomName] + " is going to pay today!"
}
