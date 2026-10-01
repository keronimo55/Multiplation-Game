
        document.addEventListener("DOMContentLoaded",function(){
            
            console.log("ASDASD")
            let process_load=false
            let ans = document.querySelector(".answer")
            let processcode = ["x","+","-"]
            let prs=document.querySelector(".question .process")
            let process;

            let minutelabel = document.querySelector(".time-label .minute")
            let secondlabel = document.querySelector(".time-label .second")

            let timer = document.querySelector(".timer .time")

            let qs1 = document.querySelector(".question .number-one")
            let qs2 = document.querySelector(".question .number-two")

            let dark = document.getElementById("dark")
            let finished =document.getElementById("finished")
            
           
            let trueans;
            
            ans.focus()
            

            
            bringit()
            function bringit(){
                qs1.textContent=Math.floor(Math.random() * 100)
                qs2.textContent=Math.floor(Math.random() * 100)
                

                no=Math.floor(Math.random() * 3)
                process = processcode[no]
                prs.textContent = process

                    if (process == "x"){
                trueans =  parseInt(qs1.textContent) * parseInt(qs2.textContent)
                process_load=true
                }
                
                else if(process == "+"){
                    trueans=  parseInt(qs1.textContent) +parseInt(qs2.textContent)
                    process_load=true
                }    
                else if(process == "-"){
                    trueans=  Math.abs(parseInt(qs1.textContent)-parseInt(qs2.textContent))
                    process_load=true
                }    
                else{
                    process_load=true
                    console.error("...")
                }

            }
            

        


            if (process_load){
                    document.addEventListener("keydown",enter)
                    
            }
            
            let time =document.getElementById("dontlookthatt").textContent
            time= parseInt(time)

            let minute=Math.floor(time/60)
            let second = time%60

            minutelabel.textContent=minute.toString()
            secondlabel.textContent= second.toString()

            time*=1000

            
            

          

           
                 
            
          

            const start_time = Date.now();
            const initial_width = timer.getBoundingClientRect().width;

            const interval = setInterval(function () {

                const current_time = Date.now();
                const dif = current_time - start_time;

   
                const remaining = Math.max(0, 1 - dif / time);

                timer.style.width = (initial_width * remaining) + "px";

  
                if (dif >= time) {
                clearInterval(interval);

                timer.style.width = "0px";
                secondlabel.textContent = "00";
                minutelabel.textContent = "00";

                finishfunc();
                return;
                }

  
                const totalSeconds = Math.ceil((time - dif) / 1000);

                const second_remain = totalSeconds % 60;
                const minute_remain = Math.floor(totalSeconds / 60);

                secondlabel.textContent =
                second_remain < 10
                ? "0" + second_remain
                : second_remain;

                minutelabel.textContent =
                minute_remain < 10
                    ? "0" + minute_remain
                    : minute_remain;

                if (minute_remain === 0 && second_remain <= 10) {
                    timer.style.backgroundColor = "red";
                    }           

            }, 10);

                



            

          

                    function finishfunc(){
                        dark.style.display="block";
                        finished.style.display="flex";
                        document.removeEventListener('keydown', enter);

                        document.addEventListener('keydown', (e) => {e.preventDefault(); });
                    }


                    function enter(event){
                         if (event.key==="Enter"){
                            if(!/^\d+$/.test(ans.value)){
                            console.log("NOT VALİD")
                            return;
                            }

                            if (trueans == parseInt(ans.value)){
                                ans.value=""
                                
                                bringit()
                                
                            }else{
                                qs1.style.border = "6px solid red"
                                qs1.style.color = "red"

                                qs2.style.border = "6px solid red"
                                qs2.style.color = "red"

                                ans.style.background = "#eda0a0";
                                setTimeout(function(){
                                    qs1.style.border = "6px solid #acff2f8f"
                                    qs1.style.color = "#8ecf2d"
                                    
                                    qs2.style.border = "6px solid #acff2f8f"
                                    qs2.style.color = "#8ecf2d"

                                    ans.style.background = "white";
                                },2000)
                                

                            }
                        }
                    }
                

            })
            

    
