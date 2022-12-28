function save(){
    myLeads.push(inputEl.value)
    ulEl.innerHTML += `<li> <a target='_blank' href='${myLeads[myLeads.length-1]}'>${myLeads[myLeads.length-1]}</a> </li>`
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    inputEl.value = ""
}


// const tabs = [
//     {url: "https://github.com/SarinaMashreghi"}
// ] 

function deleteAll(){
    localStorage.clear()
    ulEl.innerHTML = ""
    myLeads = []
}

function tab(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        ulEl.innerHTML = ""
        for (let i = 0; i<myLeads.length; i++){
            ulEl.innerHTML += `<li> <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a> </li>`
            console.log(myLeads)
        }
    })
}




const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")



let myLeads = []

saveBtn.addEventListener("click", function() {save()})
deleteBtn.addEventListener("dblclick", function(){deleteAll()})
tabBtn.addEventListener("dblclick", function(){tab()})
 
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    console.log(leadsFromLocalStorage)
    myLeads = leadsFromLocalStorage
    for (let i = 0; i<myLeads.length; i++){
        ulEl.innerHTML += `<li> <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a> </li>`
    }  
}
