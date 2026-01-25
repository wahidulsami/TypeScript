import type { AxiosResponse } from "axios"
import axios   from "axios"


interface Todo {
    UserId: number,
    id:number,
    title:string,
    completed: boolean
}



const FetchData =async () => {
    try {
        const  reponse: AxiosResponse<Todo> = await
         axios.get("https://jsonplaceholder.typicode.com/todos/1")
         console.log('Todo', reponse.data)
    } catch (error: any) {
        // console.log(error.message)
        if(axios.isAxiosError(error)){
            console.log('Axios error' , error.message )
            if (error.response) {
                console.log(error.response.status)
            }
        }
        
    }
}


FetchData()



// ? {
// ?  "userId": 1,
// ? "id": 1,
// ?  "title": "delectus aut autem",
// ? "completed": false
// ?}