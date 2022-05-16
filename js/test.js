//import {openModal} from "./testTask.js"
import { createTaskItem,  } from "./createTaskItem.js";
import { createTaskDoneItem } from "./createTaskDoneItem.js";
import {createTaskSection} from "./createTaskSection.js"
import { getTasks, getDoneTasks } from "./taskApi.js";
import { createClientsHeader } from "./createHeader.js";


const createApp = async () => {
    const header = createClientsHeader();
    const tasks = await getTasks();
    const tasksDone = await getDoneTasks();
    const taskSection = createTaskSection();
    console.log(tasks);
    console.log(tasksDone);
    
    document.body.append( header, taskSection.main );
    
    for (const task of tasks) {
       document.querySelector('.clientsToDo__tbody').append(createTaskItem(task));
    }

    for (const task of tasksDone) {
        document.querySelector('.clients__tbody').append(createTaskDoneItem(task));
     }
    
    
}

if(localStorage.getItem('token'  )!== null)

   { createApp();}
   else {
       alert ('Не авторизован');
   }

