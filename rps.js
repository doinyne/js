const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}
};