const countries = [
	'ALBANIA',
	'BOLIVIA',
	'CANADA',
	'DENMARK',
	'ETHIOPIA',
	'FINLAND',
	'GERMANY',
	'HUNGARY',
	'IRELAND',
	'JAPAN',
	'KENYA'
]


const createArrayOfArrays = (countries) => {
	let finalArray = []
	for (var i = 0; i < countries.length; i++) {
		var myArray = countries[i][0] + countries[i].substring(1).toLowerCase();
		var firstThreeLetter = countries[i][0] + countries[i][1] + countries[i][2];
		var contryLength = countries[i].length
		var subArray = [].concat(myArray, firstThreeLetter, contryLength)
		// var array = mainArray
		// console.log("Capitalize", myArray,firstThreeLetter,contryLength)
		// console.log("mainArray", mainArray)
		// console.log("arrayyyyyyyyyyy", subArray)
		finalArray.push(subArray)
	}
	return finalArray
}
console.log("Final Array ", createArrayOfArrays(countries))

const users = [
	{
		name: 'Brook',
		scores: 75,
		skills: ['HTM', 'CSS', 'JS'],
		age: 16
	},
	{
		name: 'Alex',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18
	},
	{
		name: 'David',
		scores: 75,
		skills: ['HTM', 'CSS'],
		age: 22
	},
	{
		name: 'John',
		scores: 85,
		skills: ['HTM'],
		age: 25
	},
	{
		name: 'Sara',
		scores: 95,
		skills: ['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name: 'Martha',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18
	},
	{
		name: 'Thomas',
		scores: 90,
		skills: ['HTM', 'CSS', 'JS'],
		age: 20
	}
];

const scoresGreaterThan85 = (users) => {

	var isScores85 = users.filter((el) => {
		return el.scores >= 85 //el.target is target users
	})
	return isScores85
}

console.log("scoresGreaterThan85", scoresGreaterThan85(users))

function scoresGreaterThan85Normal(users) {
	let isScores85 = users.filter(function (el) {
		return el.scores >= 85
	})
	return isScores85
}

console.log("scoresGreaterThan85 normal ", scoresGreaterThan85Normal(users))

const newUser1 = {
	name: 'Dipak',
	scores: 90,
	skills: ['HTM', 'CSS', 'JS'],
	age: 25
};

const addUser = (users, newUser) => {
	const arr = [];
	arr.push(newUser)
	let newArray = users.concat(arr)
	return newArray
}
console.log("newuser new  list", addUser(users, newUser1))
let obj2 = {
	name: 'Goutam',
	scores: 90,
	skills: ['HTM', 'CSS', 'JS'],
	age: 20
}

console.log("newuser second  list", addUser(users, obj2))

//add new user solution


let newUser2 = {
	name: 'Goutam',
	scores: 90,
	skills: ['HTM', 'CSS', 'JS'],
	age: 20
}

let newUser3 = {
	name: 'Thomas',
	scores: 90,
	skills: ['HTM', 'CSS', 'JS'],
	age: 20
}
let newUser4 = {
	name: 'Dipak',
	scores: 90,
	skills: ['HTM', 'CSS', 'JS'],
	age: 20
}

const addNewUser=(arr,newUser)=>{
    for(const user of arr){
        if(user['name']===newUser.name){
            return "A user already exist";
        }
    }
     arr.push(newUser)
    
    return arr;
}


console.log("newuser Sampa  list", addNewUser(users, newUser1))
console.log("newuser Goutam  list", addNewUser(users, newUser2))
console.log("newuser Thomas  list", addNewUser(users, newUser3))
console.log("newuser Dipak  list", addNewUser(users, newUser4))
console.log("newuser second time Dipak  list", addNewUser(users, newUser4))
//add user skill
/////////////////////////////////////
const addUserSkill = (arr, name, skill) => {
	let found = false;
	for (const user of arr) {
		if (user['name'] === name) {
			user.skills.push(skill);
			found = true;
			break
		}
		
	}
	if (!found) {
		return 'A user does not exist';
	}

	return arr
}
console.log("add user newskills", addUserSkill(users, 'Thomas', 'React Developer'))

const editUser = (arr, name, newUser) => {
	let found = false;
	for (let user of arr) {
		if (user['name'] === name) {
			user.name = newUser.name;
			user.scores = newUser.scores;
			user.skills = newUser.skills;
			user.age = newUser.age;
			found = true;
			break
		}
	}
	if (!found) {
		return "A user Does not Exist"
	}
	return arr;
}

const newUser = {
	name: 'Thomas',
	scores: 75,
	skills: ['HTM', 'CSS', 'JS', 'React', 'bootstrap'],
	age: 24
}

console.log("edituser Thomas", editUser(users, 'Thomas', newUser))

console.log("lastaaaaaaaa", createArrayOfArrays(countries))


const createArrayOfArraysNew=()=>{

}
