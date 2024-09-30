let arr=[1,3,4,6,7,8,2]
        function push(value){
            arr.push(value)
            return arr
        }
        function pop(){
            arr.pop()
            return arr
        }

        operation=prompt("Enter the operation 'push' or 'pop'")

        if(operation=='push'){
            value=Number(prompt("enter number to be push"))
            document.write(push(value))
        }
        if(operation=='pop'){
            document.write(pop())
        }