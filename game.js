/* Variables declared using the elements from the HTML id's */
const story = document.getElementById('storyboard'); 
const choiceElement = document.getElementById('choice');
const helmutScore = document.getElementById('helmut');
const armourScore = document.getElementById('armour');
const shieldScore = document.getElementById('shield');
const weaponScore = document.getElementById('weapon');


console.log('helmutScore');
console.log('armourScore');

let state = {}

function startGame () {
    state = {}
    showStoryNode(1)
}

// Function to populate the story board using the id="storyboard"
function showStoryNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    story.innerText = textNode.text
    while (choiceElement.firstChild) {
      choiceElement.removeChild(choiceElement.firstChild)  
}

//Function to present the options for the player
textNode.options.forEach(option => {
 if (showOption(option))  {
    const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      choice.appendChild(button)
  }
})
}

function showOption(option) {
    //return true
  return option.requiredState == null || option.requiredState(state)
}


//function to rise the armour levels
function chooseOption(option) {
  showTextNodes(option.storypart);
  helmutScore.innerHTML = option.helmutScore;
  armourScore.innerHTML = option.armourScore;
  shieldScore.innerHTML = option.shieldScore;
  weaponScore.innerHTML = option.weaponScore;

  //helmut strength
    if (option.helmutScore == 'low') {helmutScore.className = '30'} 
    else if (option.helmutScore == 'medium') {helmutScore.className = '60'} 
    else if (option.helmutScore == 'high') {helmutScore.className = '100'} 
    else {helmutScore.className = 'center'}

  //Armour strength
    if (option.armourScore == 'low') {armourScore.className = '30'}
    else if (option.armourScore == 'medium') {armourScore.className = '60'}
    else if (option.armourScore == 'high') {armourScore.className = '100'} 
    else {armourScore.className = 'center'}

  //Shield strength
    if (option.shieldScore == 'low') {shieldScore.className = '30'} 
    else if (option.shieldScore == 'medium') {shieldScore.className = '60'} 
    else if (option.shieldScore == 'high') {shieldScore.className = '100'} 
    else {shieldScore.className = 'center'}

  //Weapon strength
    if (option.weaponScore == 'low') {weaponScore.className = '30'} 
    else if (option.weaponScore == 'medium') {weaponScore.className = '60'} 
    else if (option.weaponScore == 'high') {weaponScore.className = '100'} 
    else {weaponScore.className = 'center'}
}



//Function to restart game if storypart is less than 0 (-1)
function selectOption(option) {
    const storypartNodeId = option.storypart
    if (storypartNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showStoryNode(storypartNodeId)
}



const textNodes = [
  {
    id: 1,
    text: 'You awaken in a prison cell dazed and unaware of your surroundings, all you can see is the light coming into your cell from the middle of the room and a couple of guards outside looking in and they say “so you’re finally awake”',
      options: [
      {text: 'You say nothing',
      helmutScore: 'low',
      armourScore: 'low',
      shieldScore: 'low',
      weaponScore: 'low',
      storypart: 2},

      {text: 'laugh out loud',
      helmutScore: 'low',
      armourScore: 'medium',
      shieldScore: 'low',
      weaponScore: 'low',
      storypart: 2},

      {text: 'You ask "How did I get here?',
      helmutScore: 'low',
      armourScore: 'low',
      shieldScore: 'medium',
      weaponScore: 'high',
      storypart: 2},
    ]
  },
  {
    id: 2,
    text: 'As you don’t respond the guards walk up to you and say “you know we can see you moving you can’t try and hide it”',
    options: [
      {text: 'How did I get here?', 
      helmutScore: 'high',
      armourScore: 'high',
      shieldScore: 'medium',
      weaponScore: 'high',
      storypart: 1},

      {text: 'Okay you got me, what is this place?',
      helmutScore: 'high',
      armourScore: 'low',
      shieldScore: 'medium',
      weaponScore: 'high',
      storypart: 1}
    ]
  },
  {
    id: 3,
    text: '“This is the prison of Donmore the capital in the kingdom of Didsmore” says the guard on the right while the guard on the left is looking in a chest for something',
    options: [
      {text: 'What are you looking for over there, are you struggling?',storypart: 14},
      {text: 'What did I do to be put in this place? I dont remember',storypart: 7}
    ]
  },
  {
    id: 4,
    text: '“This is the prison of Donmore the capital in the kingdom of Didsmore” says the guard on the right while the guard on the left is looking in a chest for something',
    options: [
      {text: 'What are you looking for over there, are you struggling?',storypart: 14},
      {text: 'What did I do to be put in this place? I dont remember',storypart: 7}
    ]
  },
  {
    id: 5,
    text: 'Okay you got me, what is this place?',
    options: [
      {text: 'Sure, give me the riddle',storypart: 6},
      {text: 'No thank you I would rather die',storypart: 99}
    ]
  },
  {
    id: 6,
    text: '“here goes, you have me today, tomorrow you will have more; As your time passes, Im not easy to store; I dont take up space, But Im only in one place; I am what you saw, but not what you see. What am I?”',
    options: [
      {text: 'Memories',storypart: 7},
      {text: 'Time', storypart: 99}
      ]
    },
  {
    id: 7,
    text: '“well done and what will you do with your newfound freedom?”',
    options: [
      {text: 'I guess ill find the exit…where is it?',
        storypart: 8},
      {text: 'Well I’m just going to go back to the streets',storypart: 9},
      {text: 'Nothing',storypart: 10},
      {text: 'Nothing',storypart: 11}
    ]
  },

  {
    id: 8,
    text: 'The guard shows you the exit you decide to....',
    options: [
      {text: 'go to the Inn',storypart: 9},
      {text: 'go to the Town Hall',storypart: 50}
    ]
  },

  {
    id: 9,
    text: 'a courier aproaches you with a letter and all he says is "p-please take this its u-urgent" as he stutters his words out he is getting more and more nervous',
    options: [
      {text: 'You take the letter',storypart: 10}
    ]
  },

  {
    id: 10,
    text: 'as you take the letter from the courier he runs away as fast as he could looking over his shoulder as if he was being followed',
    options: [
      {text: 'Read the letter',storypart: 11},
      {text: 'you put the letter in your pocket for later.',storypart: 50}
    ]
  },

  {
    id: 11,
    text: 'Dear sir/maam, The King has formally requested your presence, please make your way to the castle with much haste as he requires youre help',
    options: [
      {text: 'You go to the castle', storypart: 60},
      {text: 'ignore it and go on with youre day', storypart: 60}
    ]
  },
  {
    id: 21,
    text: 'The guard walks over to you and smacks you with a club ad says "if you ask anymore questions ill kill you',
    options: [
      {text: 'stay quiet', storypart: 25},
      {text: 'you ask again knowing the consequences', storypart: 99}
    ]
  },
  
  
  {
    id: 50,
    text: 'Town Hall',
    options: [
      {text: 'Restart the game?', storypart: -1}
    ]
  },


  {
    id: 60,
    text: 'On your journey to the castle you meet a band of raiders running from a small hamlet which you can see in the distance. There houses on fire and people screaming for help',
    options: [
      {text: 'talk to the bandits', storypart: 61},
      {text: 'fight the bandits', storypart: 62},
      {text: 'help the towns people', storypart: 63},     
    ]
  },

{
  id: 61,
  text: 'what do you want to say to the bandits',
  options: [
    {text: 'stop or else', storypart: 71},
    {text: 'im sure we can come to an agreement here', storypart: 72},
    {text: 'whats all this about', storypart: 73},   
  ]
},
{
  id: 62,
  text: 'as you aproach the bandits what weapon do you use',
  options: [
    {text: 'Short Sword', storypart: -1},
    {text: 'Dagger', storypart: -1},
  ]
},
{
  id: 63,
  text: 'Town Hall',
  options: [
    {text: 'Restart the game?', storypart: -1}
  ]
},

  
  
  {
    id: 99,
    text: 'You have been killed',
    options: [
      {
        text: 'Restart the game?',
        storypart: -1
      }
    ]
  },
]
startGame()