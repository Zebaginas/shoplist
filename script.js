const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function listAdd(){
    let li = document.createElement("li");
    let span = document.createElement("span");
    let delbutton = document.createElement("button");

    span.textContent = input.value;
    delbutton.textContent = "Delete";
    delbutton.setAttribute("onclick", "this.parentElement.remove()");

    li.appendChild(span);
    li.appendChild(delbutton);
    ul.appendChild(li);
    input.value = "";
    input.focus();
}

button.addEventListener("click", () => listAdd());
