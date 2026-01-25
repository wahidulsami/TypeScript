import postcss = require("postcss");

type chaiOrder  =  {
    type: string;
    suger: number;
    strong?: boolean 
}



// just  example  function  using  the  chaiOrder  type

// function makechai(order: {
//     type: string;
//     suger: number;
//     strong?: boolean 
// }) {
//     console.log(order)
// }

// function prepaerchaiorder(order: {
//   type: string;
//   suger: number;
//   strong?: boolean;
// }) {

//     console.log(
//     order
//     )
// }


function makechai(order: chaiOrder) {
    console.log(order)
}

function prepaerchaiorder(order:  chaiOrder) {
    console.log(order)
}



type TeaReacpe =  {
    water: number;
    milk: number;
}

class maslachai  implements TeaReacpe  {
    water  = 100;
    milk = 50;
} 

interface CupSize {
  size: 'small' | 'medium'
}

class ChaiCup implements CupSize {
  size: 'small' | 'medium' = 'small'
}


// interface  reponse    { ok: true} | { ok : false;}
// interface  reponse  {
//     ok: boolean;
// }
// class  myresponse implements reponse {
//     ok: boolean =  true;
// }


type TeaType = 'black' | 'green' | 'herbal';

function orderTea(type:  TeaType) {
    console.log(type)
}

type basechai  = {teaLeaves :  number }
type  milkChai  =  { milk: number }
type  masalaChai  =  basechai  & milkChai

const  cup  : masalaChai ={
    teaLeaves: 10,
    milk: 50
}

type  user =  {
    username :string;
    bio?: string;
}

const u1: user = { username: 'john' }
const u2: user = { username: 'sami' , bio: 'love chai' }

type  config = {
    readonly appname : string;
    version : string;
}

const cfg : config ={
    appname : 'chaishop',
    version : '1.0'
}


// cfg.appname = 'newname'  
cfg.version = '1.1'

