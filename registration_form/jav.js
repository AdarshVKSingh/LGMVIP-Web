

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const male = document.getElementById("male");
const female = document.getElementById("female");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");


const box2 = document.getElementsByClassName("box2")[0];


const button1 = document.getElementById("button1");

const addDetails= ()=> {

    const person = document.createElement('div');

    person.classList.add("person1");

    const html1 =
        `<h1>Name: ${name.value}</h1>
        <h1>email: ${email.value}</h1>
        <h1>phone: ${phone.value}</h1>
        <h1>Gender:${male.value == "" ? "Female" : "Male"}</h1>
        <h1>Skills:${html.checked ? " HTML " : ""}${css.checked ? " CSS " : ""}${js.checked ? " JS " : ""}</h1>`;

  
    person.innerHTML = html1;

    box2.appendChild(person);

    console.log(box2);

}

button1.addEventListener('click',addDetails);

