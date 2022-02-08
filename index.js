const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  return newArrayThree; 
}

const newArrayOne = tutorials.map(function (element) {
  return element.split(" ");
});

//console.log(newArrayOne)

const newArrayTwo = newArrayOne.map(function (element) {
  return wordIteration(element);
})

const newArrayThree = newArrayTwo.map(function (element) {
  return element.join(" ");
})


function wordIteration(array){
  const tempArray = []
  for(let element of array){
      tempArray.push(element[0].toUpperCase() + element.substr(1)); 
  }
  return tempArray;
}
