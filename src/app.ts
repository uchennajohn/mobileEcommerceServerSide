import  express  from "express";
import App from "./services/Express"
import database from "./services/Database";

const port = 4500


const startSterver = async()=>{
    const app = express()
 
    await database()
    await App(app)

    

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })

}

startSterver()