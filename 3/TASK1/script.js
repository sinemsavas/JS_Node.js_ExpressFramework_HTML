
document.getElementById("setButton").addEventListener("click", ()=>{
    document.getElementById("style").removeAttribute("disabled");
})
document.getElementById("deleteButton").addEventListener("click", ()=>{
    document.getElementById("style").disabled="true";
})