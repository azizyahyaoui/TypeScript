//basic types
let id:number = 52155544
let fullName:string = "yahyaoui med aziz"
let isValidated: boolean = true
let nums: number[] = [1,2,3,4,5]
let x:any = 'anything' // or 0 or true ..
let arr:any = [1,true,'someString',]

//Tuple
let person:[number, string, boolean] =[1, "anything", true]
//tuple array
let employee:[Number, string, boolean][]
employee = [
  [124,"aziz",false],
  [4152,"bilel",true],
  [5202,'dhiya', true]
]

//Union
let phoneNumber: string | number
phoneNumber = '+2162292992929'
//phoneNumber = 44

//Enums
//integer
enum directions {
  UP=1, // the default val is 0
  DOWN,
  LEFT,
  RIGHT
}
//string
enum directionsName {
  UP='up', // the default val is 0
  DOWN='down',
  LEFT='left',
  RIGHT='right'
}

//Objects
/* const user:{
  id:number,
  name:string
}={
  id: 123,
  name: "chiheb"
} */

  type User={
    id:number,
    name:string
  }

  const user: User ={
  id: 123,
  name: "chiheb"
  }


































console.log('----------------------------------------------------------------')

console.log('ID:', id)
console.log('fullName:', fullName)
console.log('----------------------------------------------------------------')
console.log('person:', person)
console.log('----------------------------------------------------------------')
console.log('employees:', employee)
console.log('----------------------------------------------------------------')
console.log('phoneNumber:', phoneNumber)
console.log('----------------------------------------------------------------')
console.log('direction 1:', directions.DOWN)
console.log('directionsName 1:', directionsName.DOWN)
console.log('----------------------------------------------------------------')
console.log('user:', user)