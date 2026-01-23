interface chai {
    flavor: string
    price:number
}

const masala: chai = {
    flavor: "maslal",
    price: 220
}


interface shop {
    readonly id : number
    name: string
}


const s:  shop = {id: 1 , name: "chai aur sami"}
// s.id= 1


interface ChaiRating  {
    [ flavour: string ] : number
}

const  ratings: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
}

interface User {
    name:string
}
interface User {
    age : number
}

const  u: User = {
    name:"sami" , 
    age:42
}

interface A {a: string}
interface b {b:string}

