import axios from "axios";
import { useState } from "react";

function Primeinput(){


    function allownum(){
        var num=document.getElementById("input").value;
        if(/^[0-9]*$/.test(num)){
            document.getElementById("validation").style.color="green";
            document.getElementById("validation").innerHTML="correct input";

        }else{
            document.getElementById("validation").style.color="red";
            document.getElementById("validation").innerHTML= "wrong input , please enter only numeric value";
        }
    }
    const primenum = async (e)=>{
       
       
        let inputvalue = document.getElementById("input").value;
      
        let localHostnumber="http://localhost:8001/primenum";
      
        let Showanswer=document.getElementById("Showanswer");
      
        try{
            const response = await axios.post(localHostnumber,{ input:+inputvalue});
//servermathi je response aave ee response as a json data tarike aave , ema data nam ni field hoy and ee data nam ni field ma real aapanne joitu output hoy etle response.data lakhay
            Showanswer.innerHTML= response.data + ",";
            
            console.log(response);
            console.log(response.data);
        }catch(error){
            console.log("error");
        }
        return false;
    };
    return(
        <>
        <div className="div">
        <form  method="get" name="form" >
            <h1>Display prime number</h1>
        <label>Please enter any number:</label>
        <br></br>
        <input type="text"
            name="text"
             placeholder="Please enter any number" className="form-control" id="input" aria-describedby="emailHelp" onChange={allownum}></input>
             <p id="validation"></p>
             
        <input type="button"  className="btn btn-primary" value="Submit" onClick={primenum}></input>
        <p id="Showanswer"></p>
        </form>
        </div>
        </>


    )
}

export default Primeinput;
