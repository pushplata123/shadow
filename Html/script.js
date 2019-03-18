

window.addEventListener("load", e =()=> {
    
          let el=document.getElementById("click-me")
          let count=1;
          if(el)
           el.addEventListener("click", evt => {
        
           var newbanner = document.createElement("list-item"); 
           let span=document.createElement("span");
           span.textContent=count++;
           let radiobutton=document.createElement("radio-element");
           let remove=document.createElement("remove-element");
           remove.setAttribute("name","remove");
           radiobutton.textContent="created by script";
           radiobutton.appendChild(span);
           radiobutton.appendChild(remove);
           newbanner.appendChild(radiobutton);
           document.getElementById("list1").appendChild(newbanner);
           
           let close=document.getElementsByName("remove");
           
        
           for(i=0;i<close.length;++i)
           {
                close[i].addEventListener("click",evt=>{

                    let domelement=evt.target.parentElement;
                    domelement.style.display="none";

                })
               
                
           }
           console.log(newbanner);

        } );

      /*
        let t=1;
       document.getElementById("toggle-form").addEventListener("click",evt=>{
           let domelement=document.getElementById("toggle-form").parentElement.lastElementChild;
           
           if(t)
           {
           domelement.style.display="none";t=0;
           }
           else
           {
               domelement.style.display="";
               t=1;
           }
       });
         */
     
        document.body.addEventListener("click",evt=>{
             let path=[];
            
         
             if(evt.target.shadowRoot && evt.composed)
                path=evt.composedPath()
                path=evt.composedPath()
             console.log(path);
             
         });
       
         
       


      

   });

  