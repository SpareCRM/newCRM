import { createTask } from "./modalTask.js";
import { sendTasksData } from "./taskApi.js";

export const addTaskModal = () => {
    const createForm = createTask();
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

    modal.classList.add('modal', 'site-modal', 'modal-active');
    modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
    createForm.form.classList.add('add-task');

    modal.append(modalContent);
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
     
    createForm.form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let taskObj = {};
        taskObj.taskname = createForm.inputTaskName.value;
        taskObj.taskContent = createForm.inputTaskContent.value;
        console.log(taskObj);
    

       await sendTasksData(taskObj, 'POST');
       modal.remove();
       
       createForm.modalClose.addEventListener('click', () => {
        modal.remove();
    });

    document.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.remove();
        }
    });
       


    });
    return modal;
}