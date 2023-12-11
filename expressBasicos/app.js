import express from "express"
import path from "path"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
//import taskCotroller from "./controllers/taskController.js"

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express()
const port = 3000;

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", () => {})

app.listen(port, ()=>{
    console.log(`la app se esta ejecutando en http://localhost:${port}`);
})