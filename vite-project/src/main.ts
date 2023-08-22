import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');

const inf = document.createElement('section');
inf.setAttribute("id","inform");

const view = document.createElement("section");
view.setAttribute("id","view");

const input = document.createElement("input");
input.setAttribute("id","inp");
input.setAttribute("label", "text");

const butInp = document.createElement("button");
butInp.setAttribute("id","butI");
butInp.setAttribute("type","button");
butInp.innerText = "Valider";



butInp.addEventListener('click', () => {
    // input.value = ""
    console.log(input.value)
    if(input.value.length != 0){
        const todo = document.createElement("div");
        todo.setAttribute("id","todo");
    
        const checkbox = document.createElement("input");
        checkbox.setAttribute("id","cb");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("name","ma checkbox");

        const label = document.createElement("div");
        label.setAttribute("id","label");
        ///label.setAttribute("label", "text");
        label.innerText = input.value;

        //SAUVEGARDE DE LABEL.INNERTEXT
        ///localStorage.setItem('tabTasks',label.innerText);
 
        const butRemove = document.createElement("button");
        butRemove.setAttribute("id","butR");
        butRemove.setAttribute("type","button");
        butRemove.innerText = "Supprimer";

        const butRemove2 = document.createElement("button");
        butRemove2.setAttribute("id","butR2");
        butRemove2.setAttribute("type","button");
        butRemove2.innerText = "Supprimer";
        butRemove2.style.width = "100px";
        butRemove2.style.height = "25px";
        butRemove2.style.margin = "12px auto auto 12px";
        butRemove2.style.border = "1px solid black";

        view.appendChild(todo);
        todo.appendChild(checkbox);
        //Ajout d'appendchild
        todo.appendChild(label);
        todo.appendChild(butRemove);
        checkbox.addEventListener("click",() => {
            const did = document.createElement("div");
            did.setAttribute("id","did");

            const strike = document.createElement("div") as HTMLDivElement;
            strike.setAttribute("id","str");
            strike.innerText = label.innerText;

            view.appendChild(did);
            did.appendChild(checkbox);
            did.appendChild(strike);
            did.appendChild(butRemove2);
            //local storage de strike et todo
            //on terminera par strike
            ///localStorage.setItem('banana',strike.innerText);
            todo.remove();
            butRemove2.addEventListener("click",() => {
                did.remove();
            })
        })

//        todo.appendChild(label);
        //local storage de todo->label
        //localStorage.setItem('banana2',label.innerText);

        //SAUVEGARDE DE LABEL.INNERTEXT
        let nodeList=document.querySelectorAll("#label");
        localStorage.setItem('tabTasks',label.innerText);

//        todo.appendChild(butRemove);
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

if(localStorage.getItem('tabTasks')!=null) {
    
    const todo = document.createElement("div");
    todo.setAttribute("id","todo");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("id","cb");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("name","ma checkbox");

    const label = document.createElement("div");
    label.setAttribute("id","label");
    ///label.setAttribute("label", "text");
    label.innerText = ""+localStorage.getItem('tabTasks');

    const butRemove = document.createElement("button");
    butRemove.setAttribute("id","butR");
    butRemove.setAttribute("type","button");
    butRemove.innerText = "Supprimer";

    const butRemove2 = document.createElement("button");
    butRemove2.setAttribute("id","butR2");
    butRemove2.setAttribute("type","button");
    butRemove2.innerText = "Supprimer";
    butRemove2.style.width = "100px";
    butRemove2.style.height = "25px";
    butRemove2.style.margin = "12px auto auto 12px";
    butRemove2.style.border = "1px solid black";

    view.appendChild(todo);
    todo.appendChild(checkbox);
    todo.appendChild(label);
    todo?.appendChild(butRemove);
        checkbox.addEventListener("click",() => {
            const did = document.createElement("div");
            did.setAttribute("id","did");

            const strike = document.createElement("div") as HTMLDivElement;
            strike.setAttribute("id","str");
            strike.innerText = label.innerText;

            view.appendChild(did);
            did.appendChild(checkbox);
            did.appendChild(strike);
            did.appendChild(butRemove2);
            //local storage de strike et todo
            //on terminera par strike
            ///localStorage.setItem('banana',strike.innerText);
            todo.remove();
            butRemove2.addEventListener("click",() => {
                did.remove();
            })
        })
        //view?.appendChild(todo);
        
}


//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
