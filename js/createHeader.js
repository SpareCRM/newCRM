export const createClientsHeader = () => {
    const header = document.createElement('header');
    const logo = document.createElement('a');
    const logoImg = document.createElement('img');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const inner = document.createElement('div');
    const findList = document.createElement('ul');
    const taskBtn = document.createElement ('button');
    const contactBtn = document.createElement ('button');
    const containerBtn = document.createElement('div');

    findList.classList.add('find-list', 'hide');
    header.classList.add('header');
    container.classList.add('container', 'header__container');
    logo.classList.add('logo', 'header__logo');
    logoImg.classList.add('logo__img');
    logoImg.src = 'img/logo.png';
    logoImg.alt = 'Logotype Clients';
    form.classList.add('header__form');
    input.classList.add('header__input');
    wrapper.classList.add('header__wrapper');
    inner.classList.add('header__inner');
    input.placeholder = 'Введите запрос';
    taskBtn.textContent = 'Задачи';
    contactBtn.textContent ='Контакты';
    taskBtn.classList.add('clients__btn', 'btn-reset', 'btn__style2');
    contactBtn.classList.add('clients__btn', 'btn-reset', 'btn__style1');
    containerBtn.classList.add('container__btn');
     
     
     taskBtn.addEventListener('click', () => {
        window.location.href = '/newCRM/tasks.html';
     });

     contactBtn.addEventListener('click', () => {
        window.location.href = '/newCRM/index.html';
     });

    containerBtn.append(contactBtn, taskBtn)
    inner.append(input, findList);
    header.append(container);
    logo.append(logoImg);
    form.append(inner);
    container.append(logo, form, containerBtn);

    return header;
}
