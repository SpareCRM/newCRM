//import {openModal} from "./testTask.js"
import { createTaskItem,  } from "./tasks/createTaskItem.js";
import { createTaskDoneItem } from "./tasks/createTaskDoneItem.js";
import {createTaskSection} from "./tasks/createTaskSection.js"
import { getTasks, getDoneTasks } from "./tasks/taskApi.js";
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

