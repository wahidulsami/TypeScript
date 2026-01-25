const chiaFlavours : string[] =["masala , tea" , "adark"]
const  chaiPrice: number[] = [10, 20]

const rating  : Array<number> = [4.5 , 5.0 ]

type chai = {
    name: string;
    price : number
}

 const menu: chai[] = [
    {name: "masala", price: 15},
    {name: "tea", price: 5}
 ] 
//  menu.push({name: "tea", price: 5})

 const citees : readonly string[] =[  "chattogram" , "dhaka" ]
//  citees.push("pune")

const table: number[][]  =  [
    [1 ,2 , 3],
    [4 , 5, 6]
]

let  chaituple: [string  , boolean ];
chaituple = ["masala" ,  true]
// chaituple = [20 , "geiger "]


let  userInfo :  [string ,  number , boolean?]

userInfo = ["amir" , 100]
userInfo =  ["sami" , 100 , true]


// readn  only tuple  
 const  location : readonly [number , number] =  [28.45 , 58.22 ]

const chaiIteams : [name: string ,  price: number]  =  [
    "masala",
    24
]


// enum 
enum CupSize {
    large ,  medium ,  small
}

const size  =  CupSize.small


enum status {
    pending =100,
    seved  ,//101
    cancled //102
}

enum chaitype {
    MASALA = 'MASALA',
    GINGER = 'GINGER'
}



function makechai (type : chaitype) {
    console.log(`making ${chaitype}`)
}

makechai(chaitype.GINGER)
// makechai("masala")



