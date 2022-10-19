let result = document.getElementById("display");

let calculate=(number)=>{
    result.value+=number;
}

let equal=()=>{
    try{

        result.value=eval(result.value)
    }
    catch(err){
        alert("Invalid Input");
    }
}

function reset(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}