// //Создать страницу, которая выводит нумерованный список песен:
// var playList = [

//     {
    
//      author: "LED ZEPPELIN",
    
//      song:"STAIRWAY TO HEAVEN"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"BOHEMIAN RHAPSODY"
    
//     },
    
//     {
    
//      author: "LYNYRD SKYNYRD",
    
//      song:"FREE BIRD"
    
//     },
    
//     {
    
//      author: "DEEP PURPLE",
    
//      song:"SMOKE ON THE WATER"
    
//     },
    
//     {
    
//      author: "JIMI HENDRIX",
    
//      song:"ALL ALONG THE WATCHTOWER"
    
//     },
    
//     {
    
//      author: "AC/DC",
    
//      song:"BACK IN BLACK"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"WE WILL ROCK YOU"
    
//     },
    
//     {
    
//      author: "METALLICA",
    
//      song:"ENTER SANDMAN"
    
//     }
    
//     ];
   
//     for (let i=0; i < playList.length-1 ;i++)
//     document.write("<br>"+  playList[i].author + "<br>"+ playList[i].song + "<br>");

    // Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". 
    //Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

//   function OpenWindow(){
//     var x = document.getElementById("modalWindow");
//   x.style.display="block";
//   };
//  function CloseWindow(){
//     var y = document.getElementById("modalWindow");
//     y.style.display="none";
//  }

//  Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let node = null;
function NextNode() {
    resetColor();
    if (node == null) {
        let list = document.getElementById("traffic-lights");
        node = list.firstElementChild;
        node.style.opacity = 1
        return;
    }
    node = node.nextElementSibling;
    console.log(node);
    if (node != null) {
        node.style.opacity = 1
    }
}
function resetColor() {
    let liList = document.getElementsByClassName("circle");
    for (let i = 0; i < liList.length; i++) {
        liList[i].setAttribute("style", "opacity:0.5");
    }
}