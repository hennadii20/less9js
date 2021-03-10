// Alert. Реалізувати скрипт для компонент Alert з фреймворку BootstrapПри наявності `.close-btn` повинен закривати лише даний компонент. На сторінці повинно бути безліч компонентів і усі вони повинні працювати незалежно один від одного 

const closeButton = document.querySelectorAll('.btn-close'); 
const blockAlert = document.querySelector('.alert');

closeButton.forEach((button) =>{

    button.addEventListener('click', function(event) {
       
        if(event.target.parentElement.classList.contains('show')){
            event.target.parentElement.classList.remove('show');
        }else{
        event.target.parentElement.classList.add('show');
        }
    });
});


//    Modal
//   Реалізувати скрипт для компонент Modal з фреймворку Bootstrap
//   закривати комонент при кліку на будь яку кнопку в середині модального вікна
//   закривати компонент при кліку на за межами вікна
//   Вікно повинно бути відкритим при кліках в середині вікна за вийнятком кнопок. 

const close_Btn = document.querySelectorAll('.btn'); 
const modalBlock = document.querySelector('.mod');

close_Btn.forEach((button) =>{

    button.addEventListener('click', function(event) {
        if(modalBlock.classList.contains('show')){
            modalBlock.classList.remove('show');
        }else{
            modalBlock.classList.add('show');
        }
    });

    modalBlock.addEventListener("blur", function(event) {
    event.target.classList.add('show');
  });   
});

//   Navigation
//   Реалізувати навігаційну панель Навігаційну панель з фреймворку Bootstrap
//   По кліку на навігаційний елемент заборонити перехід на зовнішні сторінки.
//   По кліку на навігаційний елемент роботи його активним (шрифт повинен бути зеленого кольору) решта елементів повинні мати колір за замовчуванням

const linkDissabled = document.querySelectorAll('.navLink');

linkDissabled.forEach((button) =>{

    button.addEventListener('click', function(event){
    
    event.preventDefault(); 
    if(event.target.classList.contains('text-success')){
    }else{
        event.target.classList.add('text-success');
    }

    if(event.target.nextElementSibling.classList.contains('text-success')){
        event.target.nextElementSibling.classList.remove('text-success');
    }

    if(event.target.previousElementSibling.classList.contains('text-success')){
        event.target.previousElementSibling.classList.remove('text-success');
    }
});
});

                // Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

const movingBorders = document.querySelector('.dragBorders');
let track = 0;
movingBorders.addEventListener('mousemove', function() {
    track++;

    console.log('hhh');
    this.style.width = 300 + track + 'px';
    this.style.height = 300 + track + 'px';
});