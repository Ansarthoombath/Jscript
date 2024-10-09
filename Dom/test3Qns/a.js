function addNewItem(){
    newli=document.createElement('li')
newli.innerHTML="pappaya"
myList=document.getElementById('my-list')
myList.insertBefore(newli,myList.firstChild)
}

