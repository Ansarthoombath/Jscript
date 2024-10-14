function fetchData(callback){
    setInterval(()=>{
        console.log('Data fetched')
        callback()

    },2000)
}

function processData(){
    console.log('This is asynchronous callback')
}
fetchData(processData)