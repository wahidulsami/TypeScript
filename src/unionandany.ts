let subs: number | string = '1m'

let  apirequeststatus : 'pending' | 'success' | 'failed' =  'pending'

let airlineseat : 'aisle' | 'middle' | 'window' =  'aisle'

airlineseat = 'window'


const  orders  = ['12',  '24' ,  '35']

let  cuurentoder:string |undefined;


for(let order of  orders){
    if (order ===  '24'){
        cuurentoder =  order
        break;
    } else {

    }
}


console.log(cuurentoder)

  

