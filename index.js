// Write your code in this file!
const currentUser = 'Seo Choi'

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

//const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`
//user created

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//lab method

//const shortGreeting = `Welcome, ${currentUser[0]}!`
//user created 

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;