var cnt=0;  /*Keeps count of how much items are inserted  */
class TaskItem{
    
    constructor(){
           /*Construtor */
    }
    
    appendItem(val)
    {
        /*Created a Div */
     var ele=document.createElement("div");
         
     ele.innerHTML=`<span>${val}</span><input type=\"checkbox\"  ><button class=\"cross\">\&times\;</button><br><hr>`;
     var parent=document.getElementById("task-list");

       /*Append the Child */
     parent.appendChild(ele);
       /*Store the item into local Storage */
     localStorage.setItem(cnt,ele);
         /*CheckBox is the firstChild */
     var checkbox=ele.children.item(1);
         /* Add Event Listener*/
     checkbox.addEventListener("click",()=>{
         if(checkbox.checked){
             
             let child = ele.children.item(0);
             console.log(child);
             child.innerHTML=`<strike>${child.innerText}</strike>`
        }
     });
     /* Cross is the first child*/
     var cross=ele.children.item(2);
     var id=cnt;
     cnt++;
     /*Add the click event to cross Button */
     cross.addEventListener("click",()=>{
        
         localStorage.removeItem(id);
         
         var mainParent = ele.parentNode;
       
         
         mainParent.removeChild(ele);
         

     });
    
    }
    
}



document.getElementById("inp").addEventListener("keydown",function(keypress){
     
      if(keypress.key==='Enter'){
         if(document.getElementById("inp").value){
          var obj = new TaskItem();
          /**Create a new Object */
          obj.appendItem(document.getElementById("inp").value);
           document.getElementById("inp").value="";
          
         }
      }

});


