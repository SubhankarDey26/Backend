const app=require("./src/app")
const connectToDb=require("./src/config/database")
require("dotenv").config()



connectToDb()

app.listen(3000,()=>{
    console.log("App is listining on port 3000")
})