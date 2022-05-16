//import { createContactItem } from "../createContact.js";
import { svgContactDefault, svgContactHover, svgSpinner } from "../svg.js";
//import { validateClientForm } from "./validateForm.js";
import { loginData } from "./authApi.js";

export const createLoginForm = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastName = document.createElement('input');
    const labelLastName = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContactBtn = document.createElement('button');
    const contactBtnSvgDefault = document.createElement('span');
    const contactBtnSvgHover = document.createElement('span');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const contactsBlock = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingSurname = document.createElement('div');
    const formFloatingLastName = document.createElement('div');
    const saveSpinner = document.createElement('span');
    const main = document.createElement('main');
    const loginForm = document.createElement('div');


    const errorBlock = document.createElement('p');
    const unacceptableLetter = document.createElement('span');
    const writeName = document.createElement('span');
    const writeSurname = document.createElement('span');
    const writeLastName = document.createElement('span');
    const requiredValue = document.createElement('span');
    const requiredContacts = document.createElement('span');

     saveSpinner.classList.add('modal__spinner');
    modalTitle.classList.add('login__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    formFloatingName.classList.add('form-floating');
    formFloatingSurname.classList.add('form-floating');
    formFloatingLastName.classList.add('form-floating');
    inputName.classList.add('modal__input');
    inputSurname.classList.add('modal__input');
    inputLastName.classList.add('modal__input');
    labelName.classList.add('modal__label');
    labelSurname.classList.add('modal__label');
    labelLastName.classList.add('modal__label');
    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');
    contactsBlock.classList.add('modal__contact');
    labelName.for = 'floatingName';
    labelSurname.for = 'floatingSurname';
    labelLastName.for = 'floatingLastName';
    inputName.id = 'floatingName';
    inputSurname.id = 'floatingSurname';
    inputLastName.id = 'floatingLastName';
    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastName.type = 'text';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastName.placeholder = 'Отчество'; 
    main.classList.add('main');
    loginForm.classList.add('login__form');



    errorBlock.classList.add('modal__error');
    unacceptableLetter.id = 'unacceptableLetter';
    writeName.id = 'writeName';
    writeSurname.id = 'writeSurname';
    writeLastName.id = 'writeLastName';
    requiredValue.id = 'requiredValue';
    requiredContacts.id = 'requiredContacts';

    saveSpinner.innerHTML = svgSpinner;
    modalTitle.textContent = 'Войдите в аккаунт';
    labelName.textContent = 'Введите почту';
    labelSurname.textContent = 'Введите пароль';
    labelLastName.textContent = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Войти';
    cancelBtn.textContent = 'Регистрация';
    requiredName.textContent = '*';
    requiredSurname.textContent = '*';
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;

    saveBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        let  credData = {};
        credData.username = inputName.value;
        credData.password = inputSurname.value;
        credData.roles = 'USER';
        console.log(credData);
    

       await loginData(credData, 'POST');

       window.location.href = '/index.html';
       
       //console.log(localStorage.getItem('token'));
       
      
    });
    

    labelName.append(requiredName);
    saveBtn.append(saveSpinner);
    labelSurname.append(requiredSurname);
    formFloatingName.append(inputName, labelName);
    formFloatingSurname.append(inputSurname, labelSurname);
    formFloatingLastName.append(inputLastName, labelLastName);
    contactsBlock.append(addContactBtn);
    errorBlock.append(writeName, writeSurname, writeLastName, requiredValue, unacceptableLetter, requiredContacts)
    form.append(
        formFloatingName,
        formFloatingSurname,
        //formFloatingLastName,
        //contactsBlock,
        errorBlock,
        saveBtn,
        cancelBtn
    );

    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);
    
    loginForm.append(modalTitle, form)
    main.append(loginForm)

   

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn,
        main
    };
}
