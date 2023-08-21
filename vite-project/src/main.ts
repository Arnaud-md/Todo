import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');

const inf = document.createElement('section');
inf.setAttribute("id","inform");
/*inf.style.width = "900px";
inf.style.height = "150px";
inf.style.margin = "auto auto 30px auto";
inf.style.display = "flex";
inf.style.flexDirection = "row";
inf.style.border = "1px solid black";*/

const view = document.createElement("section");
view.setAttribute("id","view");
/*view.style.width = "900px";
view.style.height = "550px";
view.style.margin = "auto auto 30px auto";
view.style.display = "flex";
view.style.flexDirection = "column";
view.style.border = "1px solid black";*/

const input = document.createElement("input");
input.setAttribute("id","inp");
input.setAttribute("label", "text");
/*input.style.width = "500px";
input.style.height = "50px";
input.style.margin = "auto auto 30px auto";
input.style.border = "1px solid black";*/
//input.setAttribute(InputEvent,'text');

const butInp = document.createElement("button");
butInp.setAttribute("id","butI");
butInp.setAttribute("type","button");
butInp.innerText = "Valider";
/*butInp.style.width = "50px";
butInp.style.height = "50px";
butInp.style.margin = "auto auto 30px auto";
butInp.style.border = "1px solid black";*/
butInp.addEventListener('click', () => {
    // input.value = ""
    console.log(input.value)
    if(input.value.length != 0){
        const todo = document.createElement("div");
        todo.setAttribute("id","todo");
        /*todo.style.width = "800px";
        todo.style.height = "50px";
        todo.style.margin = "30px auto 30px auto";
        todo.style.display = "flex";
        todo.style.flexDirection = "row";
        todo.style.border = "1px solid black";*/

        const checkbox = document.createElement("input");
        checkbox.setAttribute("id","cb");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("name","ma checkbox");
        //checkbox.setAttribute("value","checked");
        //checkbox.value = "checked";
        /*checkbox.style.width = "25px";
        checkbox.style.height = "25px";
        checkbox.style.margin = "12px auto auto 12px";
        //checkbox.style.display = "flex";
        //checkbox.style.flexDirection = "row";
        checkbox.style.border = "1px solid black";*/

        const label = document.createElement("div");
        label.setAttribute("id","label");
        label.setAttribute("label", "text");
        label.innerText = input.value;
        /*label.style.width = "500px";
        label.style.height = "25px";
        label.style.margin = "12px auto auto 12px";
        label.style.border = "1px solid black";*/

        const butRemove = document.createElement("button");
        butRemove.setAttribute("id","butR");
        butRemove.setAttribute("type","button");
        butRemove.innerText = "Supprimer";
        /*butRemove.style.width = "100px";
        butRemove.style.height = "25px";
        butRemove.style.margin = "12px auto auto 12px";
        butRemove.style.border = "1px solid black";*/

        view.appendChild(todo);
        todo.appendChild(checkbox);
        checkbox.addEventListener("click",() => {
            const did = document.createElement("div");
            did.setAttribute("id","did");
            /*did.style.width = "800px";
            did.style.height = "50px";
            did.style.margin = "30px auto 30px auto";
            did.style.display = "flex";
            did.style.flexDirection = "row";
            did.style.border = "0px solid black";*/

            const strike = document.createElement("output") as HTMLOutputElement;
            strike.setAttribute("id","str");
            strike.setAttribute("label", "text");
            /*strike.style.width = "500px";
            strike.style.height = "25px";
            strike.style.margin = "12px auto auto 12px";
            strike.style.border = "0px solid black";
            strike.style.textDecoration = "line-through";*/
            strike.value = label.innerText;

            view.appendChild(did);
            did.appendChild(checkbox);
            did.appendChild(strike);
            did.appendChild(butRemove);
            todo.remove();
        })

        todo.appendChild(label);
        todo.appendChild(butRemove);
        input.value = "";

        butRemove.addEventListener("click",() => {
            todo.remove();
        })
    }
    // Ajouter une todo dans la liste
});






app?.appendChild(inf);
inf?.appendChild(input);
inf?.appendChild(butInp);
app?.appendChild(view);


//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
