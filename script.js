
const formTodo = document.querySelector('.form-todo');

const todoInput = document.querySelector('.form-todo input[type="text"]');

const todoUl = document.querySelector('.todo-list')

formTodo.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodoText = todoInput.value;

    if (newTodoText == "") {
        alert('Please enter a task first!')
    }
    else {

        const newLi = document.createElement('li');
        const newLiInnerHTML = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
        <buttom class="todo-btn done">Done</buttom>
        <buttom class="todo-btn remove">Remove</buttom>
        </div>`

        newLi.innerHTML = newLiInnerHTML;

        todoUl.append(newLi);

        todoInput.value = "";

    }


});

todoUl.addEventListener('click', (e) => {

    if (e.target.classList.contains('done')) {
        console.log('great');
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains('remove')) {
        console.log('noooo');
        e.target.parentNode.parentNode.remove();
    }
})
