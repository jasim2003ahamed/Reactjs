import React from "react"


function Result({secretNum,term}){

    let result;
    if(term){
        if(secretNum<term){
            result="Higher";
        }else if(secretNum>term){
            result="Lower";
        }else if(secretNum==term){
            result="Correct";
        }else{
            result="Enter Invalid Input";
        }
    }
    return <h3>You Guessed : {result} </h3>
}

export default Result;