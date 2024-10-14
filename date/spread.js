let arr1=["abc","efg","hij","klm"]
    let arr2=["John","David",arr1,"Rodri"]

    console.log(arr2)

    let arr3=["abc","efg","hij","klm"]
    let arr4=["John","David",...arr2,"Rodri"]
    console.log(arr4)

    let arr5=[...arr1]
   console.log(arr5)

   let arr6=[...arr2,...arr3,0,7]
   console.log(arr6)



   let obj1={a:1,b:2}
   let obj2={...obj1}
   console.log(obj2)


   let str="john"
   let str2=[...str]
   console.log(str2)