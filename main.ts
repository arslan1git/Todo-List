#! /usr/bin/env node 

import inquirer from "inquirer";

let todo = [];

let loop = true

while(loop){
    let task = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: "add your task",
      },
    
      {
        name: "addMore",
        type: "confirm",
        message: "do you want to add more",
        default: "false",
      }
    ])
    
    todo.push(task.todo)
    loop = task.addMore
    console.log(todo)}
