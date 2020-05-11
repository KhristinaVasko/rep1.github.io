//1 оздать HTML-страницу для отображения/редактирования текста.
//  При открытии страницы текст отображается с помощью тега div. 
//  При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, 
//  который теперь можно редактировать. 
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
let div1 = document.getElementById("div1"),
    tarea = document.getElementById("tarea");
document.body.onkeydown = keyHandler;

function keyHandler(e) {
    if (e.ctrlKey && (e.code === "KeyS" || e.code === "KeyE")) {
        e.preventDefault();
        if (e.code === "KeyS") {
            if (tarea.style.display) {
               tarea.style.display = "";
               div1.style.display = "block";
               div1.textContent = tarea.value;
            }
        }
        else {
            if (!tarea.style.display) {
                tarea.style.display = "block";
                div1.style.display = "none";
                tarea.value = view.textContent;
            }
        }
    }
    if (e.code === "Escape" && tarea.style.display) {
        tarea.style.display = "";
        div1.style.display = "block";
    }
}

//2 Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, 
// необходимо отсортировать данные по этой колонке.
//  Учтите, что числовые значения должны сортироваться как числа, а не как строки.

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
//3 оздать HTML-страницу с блоком текста в рамочке. Реализовать возможность 
// изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.
const resizeTable = document.querySelector('.res_table');
const resizeBtn = document.querySelector('.res_btn');
function resize(event) {
    resizeTable.style.width = event.clientX - resizeTable.getBoundingClientRect().left + 'px'
    resizeTable.style.height = event.clientY - resizeTable.getBoundingClientRect().top + 'px'
}
function stopResize() {
    document.removeEventListener('mousemove', resize)
}

resizeBtn.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', resize);
    
});
document.addEventListener('mouseup', stopResize);