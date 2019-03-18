window.addEventListener("load",evt=>{
    let el=document.getElementById("tabs").shadowRoot;
     let el2=el.querySelectorAll(".tablinks");
    
     for(i=0;i<el2.length;++i)
     {
        tabcontent = document.getElementsByClassName("tabcontent");
        
        el2[i].addEventListener("click",ev=>{
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            
             let val=ev.target.innerHTML;
             console.log(val);
             document.getElementById(val).style.display="block"; 
         })
     }


     document.body.addEventListener("click",evt=>{
        let path=[];
        if(evt.target.shadowRoot && evt.composed)
           path=evt.composedPath()
           path=evt.composedPath()
        console.log(path);     
    });
  

    })
    
    let dragged;

    const allowDrop=(ev)=> {
        ev.preventDefault();
        }

    const drag=(ev)=> {
        dragged=ev.target;
       
        ev.dataTransfer.setData("text", ev.target.id);
        ev.target.style.background="red";
        }

    const drop=(ev)=> {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let elm=document.getElementById(data);
        /*let span=document.createElement("span");
        span.setAttribute("id","remove");
        span.textContent="\u00D7";
        
       
        ev.target.style.opacity=0.5;
        span.addEventListener("click",evt=>{
            evt.target.parentElement.style.display="none";
        })*/

        ev.target.appendChild(elm);
    }

