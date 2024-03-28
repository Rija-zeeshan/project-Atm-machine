#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; //dollar
let myPin = 2727;

let pinAnswer =  await inquirer.prompt(
    [
        {
           name: "pin",
           message:"enter your pin",
           type: "number",
        }
    ]
);
if (pinAnswer.pin === myPin){
    console.log("correct pin code!!!");

    

    let operationAns = await inquirer.prompt(
        [
            {
              name:"operation" ,
              message:"please select option",
              type:"list",
              choices:["withdraw", "checkbalance","fastCash"],
            }
        ]);
            console.log(operationAns);

            if (operationAns.operation === "withdraw") {

             let amountAns = await inquirer.prompt(
                [
                    {

                     name:"amount",
                     message: "enter your amount",
                    type: "number"

                    }
                ]);
                if(amountAns.amount> myBalance){
                    console.log("insufficient Balance")
                }else if(myBalance -= amountAns.amount) {
                    console.log("your remaining balance is:" + myBalance) ;  

                }
               };
              if(operationAns.operation === "checkbalance"){
                console.log("your balance is: " + myBalance);
            }
            if(operationAns.operation === "fastCash"){
                let cash =await inquirer.prompt(
                    [
                        {
                          name:"options",
                          message:"select any amount",
                          type: "list",
                          choices:["1000" , "3000" , "6000" , "8000"],
                        }
                    ]
                );
                if(myBalance -= cash.options){
                    console.log("your remaining amount is: " + myBalance);
                }
            }
}
else{
    console.log("incorrect pin number");
}