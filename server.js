const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

let actors =[
    'Hilary Clinton',
    'Tony Blair',
    'Princess Diana',
    'George Bush',
    'Buzz Aldren',
    'The CIA',
    'Paul Mccartney',
    'Barack Obama',  
]
let acts =[
    'faked the moon landing',
    'did 9/11',
    'releases new evidence proving the earth is flat',
    'is the secret 5th Beetle',
    'assassinated JFK',
    'claims he saw the Roswell saucer and it is not of this earth',
    'has new evidence that chemtrails are indeed used to control minds',
    'admits that birds are not real',
]
app.use(cors())

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/clientSideCode/index.html')
})
app.get('/api/', (request, response) =>{
    response.json(`${actors[Math.floor(Math.random()*actors.length)]} ${acts[Math.floor(Math.random()*acts.length)]}`)

})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})