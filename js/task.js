//import { createClientsForm } from "./createModalForm";

//import { addTaskModal } from "./tasks/addTask";
//import { createTask } from "./tasks/modalTask";

const createTask = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputTaskName = document.createElement('input');
    const labelTaskName = document.createElement('label');
    const inputTaskContent = document.createElement('input');
    const labelTaskContent = document.createElement('label');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const formFloatingTaskName = document.createElement('div');
    const formFloatingTaskContent = document.createElement('div');

   // modalTitle.classList.add('modal__title');
    //modalClose.classList.add('modal__close', 'btn-reset');
    //form.classList.add('modal__form');
    //formFloatingTaskName.classList.add('form-floating');
    //formFloatingTaskContent.classList.add('form-floating');
    //inputTaskName.classList.add('modal__input');
    //inputTaskContent.classList.add('modal__input');
    //labelTaskName.classList.add('modal__label');
    //labelTaskContent.classList.add('modal__label');
    //saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    //cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    //labelTaskName.for = 'floatingTaskName';
    //labelTaskContent.for = 'floatingTaskContent';
    //inputTaskName.id = 'floatingTaskName';
    //inputTaskContent.id = 'floatingTaskContent';
    inputTaskContent.type = 'text';
    inputTaskName.type = 'text';
    inputTaskContent.placeholder = 'Текст задачи';
    inputTaskName.placeholder = 'Название задачи'
    

    modalTitle.textContent = 'Новая задача';
    labelTaskName.textContent = 'Название задачи';
    labelTaskContent.textContent = 'Текст задачи';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    formFloatingTaskContent.append(inputTaskContent, labelTaskContent);
    formFloatingTaskName.append(inputTaskName, labelTaskName);

    form.append(
        formFloatingTaskName,
        formFloatingTaskContent,
        saveBtn, 
        cancelBtn
    );

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputTaskName,
        inputTaskContent,
        labelTaskName,
        labelTaskContent,
        
    }


}

const addTaskModal = () => {
    const createForm = createTask().form;
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

   // modal.classList.add('modal', 'site-modal', 'modal-active');
   // modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
    //createForm.form.classList.add('add-task');

    modal.append(modalContent);
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);

    return modal;
} 
 
 const  openModal = () => {
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

let todoArray = [];

const createAppTitle = (title) => {
    const appTitle = document.createElement('h1');
    appTitle.innerHTML = title;

    return appTitle;
}

const createTodoForm = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const addButton = document.createElement('button')
    const wrapper = document.createElement('div');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название дела';
    addButton.classList.add('btn', 'btn-primary');
    wrapper.classList.add('input-group-append');
    addButton.textContent= 'Добавить задачу';
    
     /* const ModalButton = document.createElement('button')
    ModalButton.classList.add('btn', 'btn-primary');
    ModalButton.textContent = 'Модалка';
    
    ModalButton.addEventListener('click', () => {
         document.body.append(addTaskModal());
    }); */
 
    wrapper.append(addButton);
    form.append(input);
    form.append(wrapper);
    //form.append(ModalButton);

    return {
        form,
        input,
        addButton,
        //ModalButton

    }

}

const createTodoList = () => {
    const list = document.createElement('ul');
    list.classList.add('list-group');


    return list;

}


const createTodoItem = (name) => {
    const todoItem = document.createElement('li');
    const btnWrapper = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    const randomId = Math.random() * 15.75;
    todoItem.id = randomId.toFixed(2);

    todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    doneBtn.classList.add('btn', 'btn-success');
    deleteBtn.classList.add('btn', 'btn-danger');
    todoItem.textContent = name;
    doneBtn.textContent = 'Готово';
    deleteBtn.textContent = 'Удалить';

    


    btnWrapper.append(doneBtn,deleteBtn);
    todoItem.append(btnWrapper);

    return {
        todoItem,
        doneBtn,
        deleteBtn,
        btnWrapper

    }
}

const changeItemDone = (arr, item) => {
   arr.map(obj => {
       if(obj.id === item.id & obj.done === false) {
           obj.done =true;

       } else if (obj.id === item.id & obj.done === true) {
           obj.done =false;
       }

   })
}

const completeTodoItem = (item, btn) => {
    btn.addEventListener('click',  () => {
        todoArray =  JSON.parse(localStorage.getItem(key));
     item.classList.toggle('list-group-item-success');
     changeItemDone(todoArray, item);

     localStorage.setItem(key, JSON.stringify(todoArray));
    });
}

const deleteTodoItem = (item, btn) => {
   btn.addEventListener('click', () => {
       if (confirm('Вы уверены, что хотите удалить задачу?')) {
        todoArray=  JSON.parse(localStorage.getItem(key));
        
        const newList =todoArray.filter(obj => obj.id !==item.id);
        localStorage.setItem(key,JSON.stringify(newList));

      item.remove();
       }
   });
}



function createTodoApp(container, title, key) {
    const appTitle = createAppTitle(title);
    const appForm = createTodoForm();
    const appList = createTodoList();
    const Modal = openModal();
    //const createModal = createTask();

    container.append(appTitle,  appForm.form, appList, Modal.ModalButton  );

    if (localStorage.getItem(key)) {
        todoArray = JSON.parse(localStorage.getItem(key))

        for (const obj of todoArray) {
            const todoItem = createTodoItem(appForm.input.value);

            todoItem.todoItem.textContent = obj.name;

            todoItem.todoItem.id = obj.id;

            if (obj.done == true) {
                todoItem.todoItem.classList.add('list-group-item-succss');

            } else {
                todoItem.todoItem.classList.remove('list-group-item-succss');
            }
            completeTodoItem(todoItem.todoItem, todoItem.doneBtn);
            deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

            appList.append(todoItem.todoItem);
            todoItem.todoItem.append(todoItem.btnWrapper);

        }
    }

    appForm.form.addEventListener('submit', e=> {
         e.preventDefault();

         const todoItem = createTodoItem(appForm.input.value);

         if (!appForm.input.value) {
             return;
         }
         completeTodoItem(todoItem.todoItem, todoItem.doneBtn);
         deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

         let localStorageData = localStorage.getItem(key);
         if (localStorageData == null) {
             todoArray=[];
         } else {
             todoArray = JSON.parse(localStorageData);
         }

         const createItemObj = (arr) => {
             const itemObj = {};
             itemObj.name = appForm.input.value;
             itemObj.id = todoItem.todoItem.id;
             itemObj.done = false;
             arr.push(itemObj);
             }

             createItemObj(todoArray);
             localStorage.setItem(key, JSON.stringify(todoArray));
         

         appList.append(todoItem.todoItem);
         appForm.input.value= ' ';
    });

}

