const buttons = document.querySelector('#buttons').children;
const items = document.querySelector(".right-container-recipes").children;
console.log(items);
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        for(let j=0; j<buttons.length;j++){
            buttons[j].classList.remove("active")
        }
        this.classList.add("active")
        
        const target =this.getAttribute("data-target");
        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(items[k].getAttribute("data-id")==target){
                items[k].style.display="block";
            }
           
            if(target=="all"){
                items[k].style.display="block";
            }
        }
    })
}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }