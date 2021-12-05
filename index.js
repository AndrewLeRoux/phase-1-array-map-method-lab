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


function capitalizeFirstLetter(name) {
  let newName = ''
  
  for (let i = 0; i < name.length; i++) {
    
    if (i === 0){
      newName = newName.concat(name[i].toUpperCase())
    }
    else if (name[i - 1] === ' '){
      newName = newName.concat(name[i].toUpperCase())
    }
    else {
      newName = newName.concat(name[i])
    }
  }
  return newName
}


/*
function capitalizeWord (word){
  return word.substring(0,1).toUpperCase() + word.slice(1)
}

function capitalizeFirstLetter(sentance) {
  const wordArray = sentance.split(' ')
  const capArray = wordArray.map(capitalizeWord)
  const sentance2 = capArray.join(' ')
  return sentance2

}

*/


const titleCased = () => {
  return tutorials.map(capitalizeFirstLetter)
}


console.log(titleCased(tutorials))


