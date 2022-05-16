import {addTaskModal} from "./tasks/addTask.js"


export const  openModal = () => {
    const ModalButton = document.createElement('button')
    ModalButton.classList.add('btn', 'btn-primary');
    ModalButton.textContent = 'Модалка';
    
    ModalButton.addEventListener('click', () => {
         document.body.append(addTaskModal());
    });
    
    return {
        ModalButton
    }
}