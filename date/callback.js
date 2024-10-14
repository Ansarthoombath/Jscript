  // function hello(){
    //     console.log("hello")
    // }

    // setTimeout(hello,1000)



    // function add(x,y){
    //     console.log("hi"+' '+x)
    //     y()
    // }
    // function callme(){
    //     console.log("Iam the y")
    // }
    // add("john",callme)



    function doTask(){
        console.log('Task started')
        callback();
        console.log('Task completed')
    }

    function myCallback(){
        console.log('Call back executed')

    }
    doTask(myCallback)