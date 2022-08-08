const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

let actors =[
    'Hilary Clinton',
    'Tony Blair',
    'Princess Diana',
    'George W. Bush',
    'Buzz Aldren',
    'The CIA',
    'Paul Mccartney',
    'Barack Obama',
    'Tom Cruise',
    'Boris Johnson',
    'Mel Gibson',
    'Megan Markle',
    'Prince Charles',
    'The Illuminati',
    'The Freemasons',
    'Anti-vaxxers',
    'Joe Rogan',
    'Alex Jones',
    'David Cameron',
    'Vladamir Putin',
    'Bill Clinton',
    'The Clinton Foundation',
    'Bill Gates',
    'Arnold Schwarzenegger',
    'Steve Jobs',
    'Harvey Weinstein',
    'The Koch Brothers',
    'Elon Musk',
    'George Soros',
    'Tupac'

]
let acts =[
    'faked the moon landing',
    'releases new evidence proving the earth is flat',
    'is the secret 5th Beetle',
    'claims the Roswell saucer is not of this earth',
    'has new evidence that chemtrails are indeed used to control minds',
    'admits that birds are not real',
    'involved in breeding the murder hornets',
    'started the Australian wild fires',
    'reveals truth about the Bermuda Triangle',
    'discovers new use for belly button',
    'cannot stop wetting the bed',
    'had a secret room built into Denver Airport',
    'possesses bottle of original formula Cocacola',
    'is revealed to be Banksy',
    'reveals a secret underground bunker full of stolen art',
    'added LSD to local water supply',
    'a pawn of the lizard people?',
    'states that healing crystals are a threat to big pharma',
    'sells homeopathic remedies made of human sweat',
    'admits that witchcraft is indeed behind magnets',
    'caught on tape admitting that jugglers are Russian spies',
    'states that the Panama papers were a distraction from yet another illegitimate child of Boris Johnson',
    'leaks information that suggests that wrestling is fake',
    'claims to have photographic evidence that bigfoot is real, but its feet are small',
    'questions the existence of Finland "there is no reason to believe that such a place exists"',
    'finances secret Loch Ness Monster research',
]
app.use(cors())
app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/clientSideCode/index.html')
})
app.get('/api/', (request, response) =>{
    response.json(`${actors[Math.floor(Math.random()*actors.length)]} ${acts[Math.floor(Math.random()*acts.length)]}`)

})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})