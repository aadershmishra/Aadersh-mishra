var output1=document.getElementById("out1");

function thisbtn(obj)

{
    var mybtn=obj.innerHTML;
    
    if(mybtn == "C")
        {
        output1.innerHTML = "0";    
        }
    if(mybtn == "=")
        {
            
     output1.innerHTML = eval(output1.innerHTML);      
        }
    else{
        if(output1.innerHTML == "0"){
           output1.innerHTML = mybtn; 
            if(mybtn == "C")
        {
        output1.innerHTML = "0";    
        }
             
         }
        else{
            output1.innerHTML+= mybtn;
        }
        
        
    }
}