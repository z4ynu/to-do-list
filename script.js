let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

function getTodo() {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerHTML = value;
  todo.appendChild(textEl);
  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);

  let closeEl = document.createElement('span');
  closeEl.innerHTML = "&times";
  closeEl.classList.add('delete');

  closeEl.addEventListener('click', () => {
    output.removeChild(todo);
    message.classList.toggle('error');
    message.textContent = "Item Deleted";

    setTimeout(() => {
        message.classList.toggle("error");
    }, 2000);
  });

    todo.appendChild(closeEl);
    todo.classList.add('todo');
    return todo;
}
