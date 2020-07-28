document.querySelectorAll(".alert-destroy").forEach((alert)=>{
    alert.addEventListener('click',function(e){
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.remove();
    })
})