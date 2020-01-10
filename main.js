const ulTag=document.querySelector("ul");
var salvato;

function AppendToList(text)
{
    let today = new Date();
    let DataDiOggi = String(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    
    let ElementToAdd = document.createElement("li");
    let bottoneDelete = document.createElement("button");
    bottoneDelete.addEventListener("click", event =>{
        ulTag.removeChild(ElementToAdd);
    })

    let acapo=document.createElement("div");
    let asd=document.createElement("div");
    asd.innerHTML="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    ElementToAdd.innerHTML=text+" ----> "+DataDiOggi;
    ElementToAdd.append(acapo);
    ElementToAdd.append(bottoneDelete);
    ElementToAdd.append(asd);

    bottoneDelete.innerHTML='<img src="trash.png"/>';

    ulTag.appendChild(ElementToAdd);
    //ulTag.appendChild(bottoneDelete);
}

function elimina(){
    let inputValue = (document.getElementById("testo")).value; 
    AppendToList(inputValue);
}

function SvuotaLista(){
    var r = confirm("Vuoi svuotare tutta la lista?");
    if (r == true) {
        let liTags=document.querySelectorAll("ul > li");
        for (let index = 0; index < liTags.length; index++) {
            ulTag.removeChild(liTags[index]);
        }
    } else {

    }
}

function salva(){
    //salvato=localStorage.ListaNote = ulTag.innerHTML;
    window.localStorage.setItem("m", ulTag.innerHTML); //
    console.log(localStorage);
}

function ripristina(){
    console.log(localStorage.getItem("m"));
    //ulTag.innerHTML=salvato;
    ulTag.innerHTML=localStorage.getItem("m"); //
}