let addButtonDOM = document.querySelector(".button")
let AlertDOM = document.querySelector('#liveToast')

addButtonDOM.addEventListener('click', formHandler)

function formHandler(event)
{
    event.preventDefault()
    const listInputDOM = document.querySelector(".inputList")
    if(listInputDOM.value)
    {
        addItem(listInputDOM.value)
    }
    else
    {
        AlertDOM.getElementsByClassName()
    }
}
let listDOM = document.querySelector("#list")

function addItem(listItem)
{
    let liDOM = document.querySelector('li')
    if(listItem.value != "")
    {
        liDOM.innerHTML = listItem
        listDOM.append(liDOM)
   AlertDOM.innerHTML = alertFunction("success", "Başarı ile ekleme yaptınız!")
    }   
}

// WORK IN PROGRESS