let  response: any  = "40"

let numeircLength:number = (response as string).length



type book = {
    name: string;
}


let  bookstring  = '{"name": "sami code book"}'
let bookobj: book  =  JSON.parse(bookstring)  as book

console.log(bookobj.name)

const input  = document.getElementById('user-input') as HTMLInputElement


let value : any;    

value = "sami"
value =[1,2,3,4]
value =  45
value.toupperCase()

let newVakue : unknown;    

newVakue= "sami"
newVakue=[1,2,3,4]
newVakue=  45
// newVakue.toupperCase()
if (typeof newVakue === "string") {
    newVakue.toUpperCase()
}