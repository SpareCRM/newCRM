
export const createTask = () => {
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

    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    formFloatingTaskName.classList.add('form-floating');
    formFloatingTaskContent.classList.add('form-floating');
    inputTaskName.classList.add('modal__input');
    inputTaskContent.classList.add('modal__input');
    labelTaskName.classList.add('modal__label');
    labelTaskContent.classList.add('modal__label');
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    
    cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    labelTaskName.for = 'floatingTaskName';
    labelTaskContent.for = 'floatingTaskContent';
    inputTaskName.id = 'floatingTaskName';
    inputTaskContent.id = 'floatingTaskContent';
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