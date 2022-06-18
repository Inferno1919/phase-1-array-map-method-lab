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

const titleCased = () => {
  return tutorials.map(sentence => {
    //single sentence called sentence
    //capitalize first letter of each sentence
    let newString = ""
    //step one colon split string into words
    let wordArray = sentence.split(' ');
    //setp two colon cap first letter of each word
    wordArray = wordArray.map(word => word[0].toUpperCase() + word.slice(1));
    //sep 3 cln mash together
    wordArray.forEach(word =>{
    
      newString = newString +  " " + word;
    })
    
    newString = newString.slice(1);
  
    return newString;
    //return a string with the first letter of each word capped
  });
}



