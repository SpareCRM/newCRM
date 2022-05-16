import { addTaskModal } from "./addTask.js";


export const createTaskSection = () => {
    const sectionTodo = document.createElement('section');
    const sectionDone = document.createElement('section');
    const h1Todo = document.createElement('h1');
    const h1Done = document.createElement('h1');
    const containerTodo = document.createElement('div');
    const containerDone = document.createElement('div');
    const main = document.createElement('main');
    
    const sortingDisplayTodo = document.createElement('thead');
    const sortingDisplayDone = document.createElement('thead');
    const theadTrTodo = document.createElement('tr');
    const theadTrDone = document.createElement('tr');
    const sortingDisplayId = document.createElement('th');
    const sortingDisplayNameTodo = document.createElement('th');
    const sortingDisplayNameDone = document.createElement('th');
    const sortingDisplayContentTodo = document.createElement('th');
    const sortingDisplayContentDone = document.createElement('th');
    const sortingDisplayEdit = document.createElement('th');
    const sortingDisplayContacts = document.createElement('th');
    const sortingDisplayActions = document.createElement('th');
    //const sortingDisplaySpan = document.createElement('span');
    const addUserBtn = document.createElement('button');
    const addUserBtnSvg = document.createElement('span');
    const tableWrapper = document.createElement('div');
    const tableWrapperDone = document.createElement('div');
    const clientsTableTodo = document.createElement('table');
    const clientsTableDone = document.createElement('table');
    const tbodyTodo = document.createElement('tbody');
    const tbodyDone = document.createElement('tbody');
  //  const createSpan = document.createElement('span');
    //const editSpan = document.createElement('span');
    const commomContainer = document.createElement('div');

    

    
    h1Todo.classList.add('clients__heading');
    h1Done.classList.add('clients__heading');
    sectionTodo.classList.add('col_left', 'clients' );
    sectionDone.classList.add('col_right', 'clients');
    containerTodo.classList.add(  'container', 'clients__container' );
    containerDone.classList.add(  'container', 'clients__container');
    main.classList.add('main' );
    sortingDisplayTodo.classList.add('clients__display', 'display-info' );
    sortingDisplayDone.classList.add('clients__display', 'display-info' );
    sortingDisplayNameTodo.classList.add('display-info__item', 'display-info__item--name');
    sortingDisplayNameDone.classList.add('display-info__item', 'display-info__item--name');
    clientsTableTodo.classList.add('clients__table_left');
    clientsTableDone.classList.add('clients__table_right');
    tbodyTodo.classList.add('clientsToDo__tbody');
    tbodyDone.classList.add('clients__tbody');
    sortingDisplayContentTodo.classList.add('display-info__item','display-info__item--create1');
    sortingDisplayContentDone.classList.add('display-info__item', 'display-info__item--create1');
    sortingDisplayNameTodo.setAttribute('data-type', 'text');
    sortingDisplayNameDone.setAttribute('data-type', 'text');
    sortingDisplayContentTodo.setAttribute('data-type', 'text');
    sortingDisplayContentDone.setAttribute('data-type', 'text');
    addUserBtn.classList.add('clients__btn', 'btn-reset');
    tableWrapper.classList.add('clients__wrapper');
    tableWrapperDone.classList.add('clients__wrapper');


/* 
     sortingDisplayId.setAttribute('data-type', 'id');
    sortingDisplayName.setAttribute('data-type', 'text');
    sortingDisplayCreate.setAttribute('data-type', 'create');
    sortingDisplayEdit.setAttribute('data-type', 'update');

    sectionTodo.classList.add('clients');
    sectionDone.classList.add('clients');
    tableWrapper.classList.add('clients__wrapper');
    h1Todo.classList.add('clients__heading');
    h1Done.classList.add('clients__heading');
    tbody.classList.add('clients__tbody');
    sortingDisplayTodo.classList.add('clients__display', 'display-info');
    sortingDisplayId.classList.add('display-info__item', 'display-info__item--id', 'sort-up');
    sortingDisplayName.classList.add('display-info__item', 'display-info__item--name', 'sort-down');
    sortingDisplayCreate.classList.add('display-info__item', 'display-info__item--create', 'sort-down');
    sortingDisplayEdit.classList.add('display-info__item', 'display-info__item--change', 'sort-down');
    sortingDisplayContacts.classList.add('display-info__item', 'display-info__item--contacts');
    sortingDisplayActions.classList.add('display-info__item', 'display-info__item--actions');
    sortingDisplaySpan.classList.add('display-info__sorting');
    addUserBtn.classList.add('clients__btn', 'btn-reset');
    addUserBtnSvg.classList.add('clients__svg');
    containerTodo.classList.add('container', 'clients__container');
    containerDone.classList.add('container', 'clients__container');
    clientsTable.classList.add('clients__table');
    main.classList.add('main');
    createSpan.classList.add('create__span');
    editSpan.classList.add('change__span');  */

    h1Todo.textContent = 'Задачи на выполнение';
    h1Done.textContent = 'Выполненные';
    sortingDisplayNameTodo.textContent = 'Название задачи';
    sortingDisplayNameDone.textContent = 'Название задачи';
    sortingDisplayContentTodo.textContent = 'Текст задачи ';
    sortingDisplayContentDone.textContent = 'Текст задачи ';
    addUserBtn.textContent = 'Добавить задачу';

    addUserBtn.addEventListener('click', () => {
        document.body.append(addTaskModal());
    });


    /* sortingDisplayId.textContent = 'id';
    sortingDisplayName.textContent = 'Фамилия Имя Отчество';
    sortingDisplaySpan.textContent = 'а-я';
    sortingDisplayCreate.textContent = 'Дата и время ';
    sortingDisplayEdit.textContent = 'Последние ';
    sortingDisplayContacts.textContent = 'Контакты ';
    sortingDisplayActions.textContent = 'Действия ';
    addUserBtn.textContent = 'Добавить клиента'; */
   

    main.append(sectionTodo, sectionDone, addUserBtn);
    sectionTodo.append(containerTodo);
    sectionDone.append(containerDone);
    //sortingDisplayNameTodo.appendChild(sortingDisplaySpan);
    //sortingDisplayCreate.append(createSpan);
    //sortingDisplayEdit.append(editSpan);
    theadTrTodo.append(
       //sortingDisplayId,
        sortingDisplayNameTodo,
        sortingDisplayContentTodo,
       // sortingDisplayEdit,
        //sortingDisplayContacts,
        //sortingDisplayActions
    );
     theadTrDone.append(
        sortingDisplayNameDone,
        sortingDisplayContentDone
    ); 
    
    sortingDisplayTodo.append(theadTrTodo);
    sortingDisplayDone.append(theadTrDone);
    
    
    clientsTableTodo.append(sortingDisplayTodo, tbodyTodo);
    clientsTableDone.append(sortingDisplayDone, tbodyDone);
    tableWrapper.append(clientsTableTodo );
    tableWrapperDone.append(clientsTableDone)
    //addUserBtn.append(addUserBtnSvg);
    containerTodo.append(h1Todo, tableWrapper);
    //containerTodo.append(h1Todo,  tableWrapper, addUserBtn);
    containerDone.append(h1Done, tableWrapperDone )

    return {
        main,
        clientsTableTodo,
        clientsTableDone,
        tbodyTodo,
        tbodyDone,
        
    }
}