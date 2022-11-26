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
    // console.log("rest", countries)
    let finalArray = []
    for (var i = 0; i < countries.length; i++) {
        var myArray = countries[i][0]+countries[i].substring(1).toLowerCase();
        var firstThreeLetter=countries[i][0]+countries[i][1]+countries[i][2];
        var contryLength=countries[i].length
        var subArray=[].concat(myArray,firstThreeLetter,contryLength)
        // var array = mainArray
        // console.log("Capitalize", myArray,firstThreeLetter,contryLength)
        // console.log("mainArray", mainArray)
        console.log("arrayyyyyyyyyyy", subArray)
    }
    return subArray
}
console.log("lastaaaaaaaa", createArrayOfArrays(countries))

const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

const scoresGreaterThan85=(users)=>{

  var isScores85=users.filter((el)=>{
        return el.scores>=85 //el.target is target users
    })
return isScores85
}

console.log("scoresGreaterThan85",scoresGreaterThan85(users))

function scoresGreaterThan85Normal(users){
    let isScores85=users.filter(function(el){
        return el.scores>=85
    })
return isScores85
}

console.log("scoresGreaterThan85 normal ",scoresGreaterThan85Normal(users))
