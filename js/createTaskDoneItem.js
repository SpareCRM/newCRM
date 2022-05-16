
import { deleteTaskModal } from "./deleteTaskModal.js";


export const createTaskDoneItem = (data) => {
    const taskDoneTr = document.createElement('tr');
    const taskNameTd = document.createElement('td');
    const taskName = document.createElement('span');
    const taskContentTd = document.createElement('td');
    const taskContent = document.createElement('span');
    const taskDelete = document.createElement('button');
    const taskActions = document.createElement('td');
    const deleteTask = deleteTaskModal();


    taskDoneTr.classList.add('clients__item');
    taskDoneTr.id = data._id;
    taskNameTd.classList.add('tasks__full-name');
    taskName.classList.add('clients__name');
    taskContentTd.classList.add('tasks__full-name2');
    taskContent.classList.add('clients__surname');
    taskDelete.classList.add('clients__delete', 'btn-reset');
    taskActions.classList.add('tasks__actions');


    taskDelete.textContent = 'Удалить';
    
    
    taskName.textContent = data.taskname;
    taskContent.textContent = data.taskContent;

    const deleteById = () => {
        import('./taskApi.js').then(({ deleteTasksDoneItem }) => {
            deleteTask.deleteModal.addEventListener('click', () => {
                
                    
                           
                        deleteTasksDoneItem(data._id);
                        document.getElementById(data._id).remove();
                        deleteTask.deleteModal.remove();
                   
            });
        });
    }

    taskDelete.addEventListener('click', () => {
       // deleteSpinner.style.display = 'block';
        taskDelete.classList.add('action-wait');

        setTimeout(() => {
            deleteById();
            document.body.append(deleteTask.deleteModal);

            //deleteSpinner.style.display = 'none';
            taskDelete.classList.remove('action-wait');
        }, 1500);
    });
    
    
    
    taskActions.append(taskDelete)
    taskNameTd.append(taskName);
    taskContentTd.append( taskContent);
    taskDoneTr.append( taskContentTd, taskNameTd, taskActions );

    return taskDoneTr;
    
}