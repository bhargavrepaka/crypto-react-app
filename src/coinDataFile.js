// import React from "react";
import data from "./response_1686220475903.json"

export default function getCoinData(){
    return  new Promise(function(resolve, reject) {
        resolve({'data':data})
    });

}


