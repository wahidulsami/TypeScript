const obj = {
    name: "chai",
    price: 20,
    isHot : true
}

// {
//     name : string;
//     price: number;
//     isHot : boolean
// }


let tea : {
    name : string;
    price: number;
    isHot : boolean
}

tea = {
    name : "masla chai",
    price: 25,
    isHot : true
}

type Tea = {
    name : string;
    price: number;
    intgredients?: string[]
}

const  samichai: Tea = {
    name : "sami chai",
    price: 30,
    intgredients: ['milk' , 'water' , 'tea leaves' , 'suger' , 'spices']
}


type  Cup  =  {size: string}
let  smallcup : Cup  =  {  size : "222ml"}
let  bigcup  = {size :"500ml"}

type  User =  {
    username:  string,
    password: string,
}

const t: User = {
    username: "sami",
    password: "1234"
} 

type Item  =  {
    name: string;
    price: number;
    quantity: number;
}
type address =  {
    street: string;
    city: string;
    postalcode: string;
}

// type order  = {
//     id :  string;
//     items: Item[];

// }  


type  Teaorder  =  {
    name?:  string;
    price?: number;
    quantity?: number;
}

const  placeOrder = (order: Required<Teaorder> ) => {
    console.log(order)
}

placeOrder({name : "masla chai" , price: 24, quantity: 2})



