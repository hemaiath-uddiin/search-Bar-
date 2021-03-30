  const add= ()=>{ 
    let filter = document.querySelector("#inptText").value.toUpperCase();
    let table = document.querySelector("#myTable"); 
    let tr  = document.getElementsByTagName("tr"); 
      for( var i = 0; i<tr.length; i++){ 
          let td = tr[i].getElementsByTagName("td")[0];
         if(td){ 
           let textValue = td.textContent || td.innerHTML; 
           if(textValue.toUpperCase().indexOf(filter)>-1){ 
               tr[i].style.display = "";

           }else{ 
             tr[i].style.display= "none";
           };

         }
      }


  } 
  //counter 
