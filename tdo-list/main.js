
const inp = document.querySelector('.entered-list');
const add_btn =document.querySelector('.add-to-list');

const task_div = document.querySelector('.tasks');
const rem_btn = document.querySelector('.remove');


inp.addEventListener('keyup', ()=>{
    if(inp.value.trim() != 0){
        add_btn.classList.add('active');
    }
    else{
        add_btn.classList.remove('active');
    }
})

//add new item to list

add_btn.addEventListener('click', () => {
    if(inp.value.trim() != 0){
        let new_itm = document.createElement('div');
        new_itm.classList.add('item');
        new_itm.innerHTML = `
        <p>${inp.value}</p> 
        <div class="items-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-xmark"></i>
        </div>`
        document.querySelector('.tasks').appendChild(new_itm);
        inp.value = '';
    }
    else{
        window.alert("Please enter a task to continue");
    }
});

//deleted items that are done

document.querySelector('.tasks').addEventListener('click', (e) => {

    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
});

document.querySelector('.tasks').addEventListener('click' , (e) => {
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
