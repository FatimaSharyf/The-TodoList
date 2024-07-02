#! usr/bin/env node

// import inquirer                   done 
// array                             done
// making todo list with functions   done
// operators                         done

import inquirer from "inquirer";
import chalk from "chalk";

let todoList:string [] = ["complete 45 questions", "wake up for fajr"] ;

async function createTodo(todoList:string[]){
    do{
        let answer = await inquirer.prompt({
            type: "list",
            message:"Hi there! Please select an operation to assist you",
            name: "Select",
            choices: ["add", "update", "view", "delete"]
        })
        
    if(answer.Select === "add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Let's add items to the list",
            name: "todo",
    
        });
        todoList.push(addTodo.todo);
        todoList.forEach(todo => console.log(todo));
    
        
    }
    if(answer.Select === "update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            message:"Update items in the list",
            name:"todo",
            choices: todoList.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items to the list",
            name: "todo",
    });
     
    
    let newTodo = todoList.filter(val =>val !== updateTodo.todo);
    todoList= [...newTodo,addTodo.todo];
    todoList.push(updateTodo.todo)

    todoList.forEach(todo => console.log(todo , '\n')); 

    console.log(todoList);
    
    }
    if(answer.Select === "view"){
        console.log(chalk.yellowBright.bgBlue.bold.underline.overline.italic("**** Todo List ****"));

        console.log(todoList);

        console.log("**Best of Luck**");

    }
    if(answer.Select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message:"Delete from list",
            name: "todo",
            choices: todoList.map(item => item)
        });
        let confirmdelTodo = await inquirer.prompt({
            type: "confirm",
            message: "Are you sure you dont want it in your list?",
            name: "todo",
            default: "true"
        });
        let newTodo = todoList.filter(val =>val !== deleteTodo.todo);
        todoList= [...newTodo];
        todoList.forEach(todo => console.log(todo, `\n`));
        console.log(todoList);
    
    }

    } while(true); 
}
createTodo(todoList);