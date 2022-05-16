import { deleteTaskModal } from "./deleteTaskModal.js";
import { editTaskModal } from "./editTask.js";




export const createTaskItem = (data) => {
    const taskTr = document.createElement('tr');
    const taskNameTd = document.createElement('td');
    const taskName = document.createElement('span');
    const taskContentTd = document.createElement('td');
    const taskContent = document.createElement('span');
    const taskEdit = document.createElement('button');
   
    const taskDelete = document.createElement('button');
    const taskActions = document.createElement('td');
    const deleteTask = deleteTaskModal();
    const editTask = editTaskModal(data);


    taskTr.classList.add('clients__item');
    taskTr.id = data._id;
    taskNameTd.classList.add('tasks__full-name');
    taskName.classList.add('clients__name');
    taskContentTd.classList.add('tasks__full-name2');
    taskContent.classList.add('clients__surname');
    taskDelete.classList.add('clients__delete', 'btn-reset');
    taskEdit.classList.add('clients__edit', 'btn-reset');
    
    taskActions.classList.add('tasks__actions');

    const deleteById = () => {
        import('./taskApi.js').then(({ deleteTasksItem }) => {
            deleteTask.deleteModal.addEventListener('click', () => {
                
                    
                    
                        deleteTasksItem(data._id);
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

    taskEdit.addEventListener('click', () => {
       // editSpinner.style.display = 'block';
        taskEdit.classList.add('action-wait');

        setTimeout(() => {
            document.body.append(editTask.editModal);

            //editSpinner.style.display = 'none';
            taskEdit.classList.remove('action-wait');
        }, 1500);
    });
    
    taskName.textContent = data.taskname;
    taskContent.textContent = data.taskContent;
    taskEdit.textContent = 'Изменить/Выполнить';  
    taskDelete.textContent = 'Удалить';
    
    taskActions.append(taskEdit, taskDelete)
    taskNameTd.append(taskName);
    taskContentTd.append( taskContent);
    taskTr.append( taskContentTd, taskNameTd, taskActions );

    return taskTr;
    
}