var addBtn = document.querySelector(".add-employee-btn");
addBtn.addEventListener("click", function(){
    var tr = document.createElement("tr");
    var list = document.querySelector(".employee-list");
    var input = document.querySelector(".employee-input");
    tr.innerHTML = '<tr>'+ input.value +' <a href="" class="removeBtn">X</a></tr><br>';
    list.appendChild(tr);
}, false); 
