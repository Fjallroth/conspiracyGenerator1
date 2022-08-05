document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    try{
        const response = await fetch(`https://git.heroku.com/conspiracy-generator-100devs.git/api`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }catch(error){
        console.log(error)
    }
}
