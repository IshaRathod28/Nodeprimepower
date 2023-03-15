//axios backend sathe communicate karva mate vapray , ee ek library hai ee data mate api ne request kare, api tarafthi data return kare
import axios from "axios";
function allownumberinputfirstnum(){
    var firstnuminput = document.getElementById("firstnum").value;
    if(/^[0-9]*$/.test(firstnuminput)){
        document.getElementById("firstnumvalidation").style.color="green";
        document.getElementById("firstnumvalidation").innerHTML="Correct input"
    }
    else{
        document.getElementById("firstnumvalidation").style.color="red";
        document.getElementById("firstnumvalidation").innerHTML="Error:Only numeric values are allowed  ";
    }

    }

    function allownumberinputsecondnum(){
        var secondnuminput = document.getElementById("secondnum").value;
        if(/^[0-9]*$/.test(secondnuminput))
        {
            document.getElementById("secondnumvalidation").style.color="green";
            document.getElementById("secondnumvalidation").innerHTML="Correct input"
        }
        else{
            document.getElementById("secondnumvalidation").style.color="red";
            document.getElementById("secondnumvalidation").innerHTML="Error:Only numeric values are allowed  ";
        }
    
        }

function Powerinput(){

   
 
    //async means badha function sathe execute na thay , synchronous ma badha function sathe run thay
    const powernum = async (e)=>{

       //let - used or availabele only inside block
       //var - used or availabe throughout function
        let firstnum = document.getElementById("firstnum").value;
        let secondnum=document.getElementById("secondnum").value;
        let displaypower=document.getElementById("displaypower");
      
        let localHostnumber="http://localhost:8001/powernum";
      
        
        try{
            const response = await axios.post(localHostnumber,{
                //backend ma data int tarike jase etle + sign
                firstnum:+firstnum,
                secondnum:+secondnum,
            });
            console.log(firstnum)
            console.log(secondnum)
            
            displaypower.innerHTML= response.data;
        }catch(error){
            console.log("error");
        }
        return false;
    };
    return(
        <>
        <div className="div">
        <form  method="get" name="form" >
            <h1>Display power of any number</h1>
        <label>Please enter first number</label>
        <br></br>
        <input type="text"
            name="text"
             placeholder="Please enter first number" className="form-control" id="firstnum" aria-describedby="emailHelp"  onChange ={allownumberinputfirstnum}></input>
             <p id="firstnumvalidation"></p>
             <label>Please enter second number</label>
              <input type="text"
            name="text"
             placeholder="Please enter second number" className="form-control" id="secondnum" aria-describedby="emailHelp" onChange ={allownumberinputsecondnum}></input>
             <p id="secondnumvalidation"></p>
        <input type="button"  className="btn btn-primary" value="Submit" onClick={powernum}></input>
        <p id="displaypower"></p>
        </form>
        </div>
        </>


    )
}

export default Powerinput;
