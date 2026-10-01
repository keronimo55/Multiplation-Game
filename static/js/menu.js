 document.addEventListener("DOMContentLoaded",function(){
    let time_button = document.querySelector(".btn-time")
    let time_input = document.querySelector("input.time-menu")
    
    time_button.addEventListener("click", checkstart);


    document.addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            checkstart()
        }
    })

    
    function checkstart(){
         try{
            int_time=parseInt(time_input.value);
            if ((10<=int_time) && (int_time<=300)){
                window.location.href="/game/"+int_time.toString();
            }
            else{
                console.log("Please give a number in [10,300] range and don't space");
            }


        }catch{
            console.log("Invalid")
        }
       
    }
  });

