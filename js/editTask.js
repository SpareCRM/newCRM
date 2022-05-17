import { createTask } from "./modalTask.js";
import { createTaskItem } from "./createTaskItem.js";
import { deleteTaskModal } from './deleteTaskModal.js';
import { sendTasksDoneData } from "./taskApi.js";
import { sendTasksData } from "./taskApi.js";



export const editTaskModal = (data) => {
    const editModal = document.createElement('div');
    const editModalContent = document.createElement('div');
    const createForm = createTask();
    const titleId = document.createElement('span');
    const taskDoneBtn = document.createElement('button');
    

    titleId.classList.add('modal__id')
    editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
    editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');
    taskDoneBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');


    titleId.textContent = 'ID: ' + data._id.substr(0, 6);
    createForm.modalTitle.textContent = 'Изменить данные';
    taskDoneBtn.textContent = 'Выполнить задачу';
    createForm.cancelBtn.textContent = 'Удалить задачу';
    
    

    createForm.cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const deleteModal = deleteTaskModal();
        document.body.append(deleteModal.deleteModal);

        import('./taskApi.js').then(({ deleteTasksItem }) => {
            deleteModal.deleteModalDelete.addEventListener('click', () => {
                        
                        
                        deleteTasksItem(data._id);
                        document.getElementById(data._id).remove();                                             
                        deleteModal.deleteModal.remove();
                        editModal.remove();
                        
            });
        });
    });

    taskDoneBtn.addEventListener('click',  async (e) => {
        e.preventDefault();

       const deleteModal = deleteTaskModal();
       deleteModal.deleteModalDelete.textContent = 'Выполнить задачу';
       deleteModal.deleteModalTitle.textContent = 'Выполнить задачу';
       deleteModal.deleteModalText.textContent = 'Вы действительно выполнили задачу?'
       document.body.append(deleteModal.deleteModal);
       

       deleteModal.deleteModalDelete.addEventListener('click', async () => {
        let taskObj = {};
        taskObj.taskname = createForm.inputTaskName.value;
        taskObj.taskContent = createForm.inputTaskContent.value;
        console.log(taskObj);
       await sendTasksDoneData(taskObj, 'POST');

        import('./taskApi.js').then(({ deleteTasksItem }) => {
         
            
                     
                     deleteTasksItem(data._id);
                     document.getElementById(data._id).remove();                                             
                     deleteModal.deleteModal.remove();
                     editModal.remove();
       });        
         
     });
      
       
       //modal.remove();
   
       
    });
    
    createForm.modalClose.addEventListener('click', () => {
          editModal.remove();
    });
  
    createForm.inputTaskName.value = data.taskname;
    createForm.inputTaskContent.value = data.taskContent;
    
    createForm.form.addEventListener('submit',  (e) => {
        e.preventDefault();

        let task = {};

        task.taskname = createForm.inputTaskName.value;
        task.taskContent = createForm.inputTaskContent.value;

          sendTasksData(task, 'PATCH', data._id);
            
    });

    createForm.modalTitle.append(titleId);
    createForm.form.append(taskDoneBtn, createForm.cancelBtn);
    editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
    editModal.append(editModalContent);
   
    document.addEventListener('click', (e) => {
        if (e.target == editModal) {
            editModal.remove();
        }
    });
  

    return {
        editModal,
        editModalContent
    }
} 
