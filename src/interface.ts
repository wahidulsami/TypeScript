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

