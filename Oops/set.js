student = new Object
student.name='john'
student.place='Australia'
console.log(student)
console.log(student.hasOwnProperty('name'))
console.log(student.hasOwnProperty('email'))

array1=new Array
array1.push('john')
array1.push('United states')
array1[2]='kabil'
array1.push('United states')
array1.push('sam')
console.log(array1)
set2=new Set(array1)
console.log(set2)


let set1=new Set
set1.add(1)
set1.add('sam')
set1.add('sam')
set1.add('johny')
set1.add(1)
console.log(set1)

set3=new Set(set1.union(set2))
console.log(set3)

set4=new Set(set1.intersection(set2))
console.log(set4)
set4.clear()
console.log(set4)