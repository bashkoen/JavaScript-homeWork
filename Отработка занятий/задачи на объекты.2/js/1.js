var user = {};
    user.name = "вася",
    user.surname = 'петров',

console.log(user.name);
console.log(user.surname);

user.name = "ахметов";
console.log(user.name);

delete user.name;
console.log(user.name);
