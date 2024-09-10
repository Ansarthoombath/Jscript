let str="one team solutions calicut"
let a = str.split(" ")
let large=""
document.write(a+"<br>")
for( i=0;i<a.length;i++){
  if(a[i].length>large.length) {
    large=a[i]
  } 
  
}
document.write(large)
