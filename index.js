// function saveInput(){
//     alert("hello jithin Raj , You are clicked the button");
// }

// ass Event listener to an element using the addEventListeners


let myLeads = [];
//changed the let to const
const inputEl = document.querySelector("#input-el");
const saveElement = document.querySelector("#save-el");
const ulElement = document.getElementById("list-el");
const delElement = document.getElementById('del-el');
// localStorage.clear()

// This is the function for deleting the all items from the local storage 
// and set the array myLeads to empty eg; myLeads = []
delElement.addEventListener("click",function(){

    // added this command for pop up a  window for confirmation

    let confirmation = confirm("Do you want to delete all ?")


    if (confirmation){
        localStorage.clear()
        myLeads=[]
        console.log("deleted fuctions")
        render()

    }
    
})

//let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
    // add const instead of let because we are not reassigning the value
    // it's for code neetness and understanding of code 
    // this means we are not changing the value of this variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    
    render()
}

saveElement.addEventListener("click", function(){
    // alert("This is from addEventListener")
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // console.log(typeof localStorage["myLeads"]) // this is strin because we used the stringify methods for saving array to localStorage
    inputEl.value= "";
    render()
    
    })
function render(){
    let listItem = '';

    // console.log(myLeads)
        
    for (let i = 0; i < myLeads.length ; i++){
                    // listElement.textContent += myLeads[i];
                    // instead of textContent using innerHtml property. 
                    // ulElement.innerHTML += "<li>" + myLeads[i] + "</li>" ;
            
                    // listItem += " <li> <a href='"+ myLeads[i]+"' target= _blank>" + myLeads[i] +"</a></li>" ;
                    // console.log(listItem)
            
                    // instead of inner html use document.createElement() and append() methodes
                    // 1. create one element
                    // 2. set the text content 
                    // 3. append the new created element to the alredy defined element
            
                    // const li = document.createElement("li");
                    // li.textContent = myLeads[i]
                    // ulElement.append(li)
            
                    // but the easiest way is using innerHtml
            
                    // listItem += " <li> <a href='"+ myLeads[i]+"' target= _blank>" + myLeads[i] +"</a></li>" ;
                    // console.log(listItem)
                    // Instead of this methode we are going to use the Template strings
                    // Template string or Template literals are literals delimited with backticks(`)
                    // It's allow the embedded expression is called substitution

                    // add below line to add delete button to the eachgit l
                    listItem += `
                    
                    <li>
                    
                    <a href= '${myLeads[i]}' target="_blank"> ${myLeads[i]}
                    </a>
                    
                    </li>`
        }
        

    ulElement.innerHTML = listItem;
}

// this function only working before deploy it in chrome extensions
// function delindivudal(button_id){
//     let singleValuefrmArray = document.getElementById(button_id).value
//     console.log(button_id)
//     const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//     if (leadsFromLocalStorage){
//     myLeads = leadsFromLocalStorage;
    
//     render()

//     }
//     console.log('jithin',leadsFromLocalStorage)
//     let index= leadsFromLocalStorage.indexOf(singleValuefrmArray)
//     leadsFromLocalStorage.splice(index,1)
//     console.log(leadsFromLocalStorage)
//     myLeads=leadsFromLocalStorage;
//     localStorage.clear()
//     localStorage.setItem("myLeads",JSON.stringify(myLeads))
//     render()
//     console.log('single value',singleValuefrmArray)
// }




