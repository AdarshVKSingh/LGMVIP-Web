
const text = document.getElementById("inputtext");
const addButton = document.getElementsByClassName("addButton")[0];
const notes = document.getElementsByClassName("notes")[0];

let notes_list  = []

addButton.addEventListener('click',()=>{
    let msg = text.value;
    notes_list.push(msg);


   let ele = document.createElement('div');
    ele.classList.add('indi_note');
    const html = `<h1 class="content">${msg}</h1> <button class="remove">-</button>`;
    console.log(html);
    ele.insertAdjacentHTML('afterbegin',html);
    notes.appendChild(ele);

    
    const remove = ele.getElementsByClassName("remove")[0];

    remove.addEventListener('click',()=>{
    let a = Event.target;
        ele.remove();
    
    })

});

