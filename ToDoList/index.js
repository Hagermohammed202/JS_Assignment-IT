let tasks=new Array(); //to store task
const inputField=document.querySelector('input');
const addBtn=document.querySelector('.AddTask');
const list=document.querySelector('div.list');

function addNewTask()
{
    if(inputField.value!='')
    {
        tasks.push(inputField.value);
        inputField.value='';
        renderTodoList();
    }
    else
        alert("no task added");
}
function EditTask()
{
    let EditTask=confirm("Enter your task?");
    return EditTask;
}
function renderTodoList()
{
    list.innerHTML='';
    for(let task in tasks)
    {
        const sp=document.createElement('span');
        sp.innerHTML=tasks[task];
        const RemoBtn=document.createElement('button');
        RemoBtn.innerText='Remove';
        RemoBtn.setAttribute('class','remove');
        const EditBtn=document.createElement('button');
        EditBtn.innerText='Edit';
        const Buttons=document.createElement('div');
        Buttons.append(EditBtn,RemoBtn);
        const item=document.createElement('div');
        item.setAttribute('class','Buttons');
        item.append(sp,Buttons);
        list.appendChild(item);
        RemoBtn.addEventListener('click',()=>{
            tasks.splice(task,1);
            renderTodoList(); // to show to-do lost after updating
        })
        EditBtn.addEventListener('click',()=>{
                let EditTask=prompt("Enter your task?");
                if(EditTask=='')
                    alert("no Task Edited");
                else
{                tasks[task]=EditTask;
                renderTodoList()
}        })

    }
}
//event on button
addBtn.addEventListener('click',addNewTask);
