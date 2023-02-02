var a = window.prompt("Text1","Text2");
            console.log("prompt type: "+typeof(a))
            
            function userfunc(){ 
              var text_value = document.forms[0].text_field.value;
              var number_value = document.forms[0].number_field.value;
              console.log("form text type: "+typeof(text_value))                   
              console.log("form number type: "+typeof(number_value)) 
              alert(text_value+" "+number_value)
            }