import readline from "readline/promises"
import "dotenv/config"
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage} from "langchain"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const model=new ChatMistralAI({
    model:"mistral-small-latest"
})

const messages=[]

while(true)
{
    const userInput=await rl.question("You: ")
    messages.push(new HumanMessage(userInput))

    const response=await  model.invoke(messages)

    messages.push(response)

    // const response=await model.invoke(userInput)
    console.log(response.content)
}

