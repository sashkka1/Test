"use strict";

var Git ='https://sashkka1.github.io/MathScore/';
var Home ='http://127.0.0.1:5501/MathScore/';
var stringUse = Git;
var answer = 0;
var score = 0;
var mistake = -1;
var countExample = 10;
var seconds = 0;
var timeArray = [0, 0, 0, 0,0,0,0,0,0,0,];
var forScore = [1,1,1,1,];
var forMemery = [0,100,0,20,];
var forMistake = [];
var forCheck = -1;



function UserUsername() {
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        const username = user.username || "Имя пользователя недоступно";
        document.getElementById('notificationp').innerText = `Привет: ${username}`;
    } else {
        document.getElementById('notificationp').innerText = "Не удалось получить информацию о пользователе";
    }
}
function UserLanguage() {
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    const language = user.language_code;
    if (language) {
        document.getElementById('notification-language').innerText = `Язык системы - ${language}`;
    } else {
        document.getElementById('notification-language').innerText = "Ошибка язык системы";
    }
}



window.onload = function () {
    UserUsername();
    UserLanguage();
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    const language = user.language_code;
    const premium = user.is_premium;
    const theme = user.colorScheme;
    const color = user.themeParams;
    // const language = window.Telegram.WebApp.initDataUnsafe.language_code;
    // const theme = window.Telegram.WebApp.initDataUnsafe.colorScheme;
    // const color = window.Telegram.WebApp.initDataUnsafe.themeParams;


    // if (premium) {
        document.getElementById('notification-premium').innerText = `Премиум - ${premium}`;
    // } else {
    //     document.getElementById('notification-premium').innerText = "Ошибка премиум";
    // }

    // if (theme) {
        document.getElementById('notification-theme').innerText = `Тема пользователя - ${theme}`;
    // } else {
    //     document.getElementById('notification-theme').innerText = "Ошибка темы";
    // }
    
    // if (color) {
        document.getElementById('notification-theme-edit').innerText = `Тема пользователя - ${color}`;
    // } else {
    //     document.getElementById('notification-theme-edit').innerText = "Ошибка цвет системы";
    // }


    if (user && user.photo_url) {
        // Создаем элемент изображения
        const img = document.createElement('img');
        img.src = user.photo_url;
        img.alt = 'User Photo';
        img.style.width = '100px'; // Устанавливаем ширину изображения
        img.style.height = '100px'; // Устанавливаем высоту изображения

        // Добавляем изображение в контейнер
        document.getElementById('user-photo-container').appendChild(img);
    } else {
        document.getElementById('notification-language').innerText = `Ошибка img ${img}`;
        document.getElementById('notification-language').innerText = `Ошибка user.photo_url ${user.photo_url}`;
        document.getElementById('notification-language').innerText = `Ошибка img.src ${img.src}`;
    }
    




    // let count = -1;

    // window.Telegram.WebApp.CloudStorage.setItem("count", count);
    // count++;

    // window.Telegram.WebApp.CloudStorage.getItem("count", (err, count) => {
    //     if (err || !count) {
    //         document.getElementById('notification-count').innerText = "Нету ";
    //     }
    
    //     document.getElementById('notification-count').innerText = `Счет равен - ${count}`;
    // });



    // let count = 0; // Начальное значение

    // // Сохраняем значение count в CloudStorage
    // window.Telegram.WebApp.CloudStorage.setItem("count", count, (err) => {
    //     if (err) {
    //         document.getElementById('notification-theme').innerText = "Ошибка сохранения";
    //     }
    // });
    
    // // Получаем значение count из CloudStorage
    // window.Telegram.WebApp.CloudStorage.getItem("count", (err, value) => {
    //     if (err) {
    //         document.getElementById('notification-language').innerText = "Ошибка получения";
    //         return;
    //     }
    
    //     // Преобразуем строку в число
    //     let currentCount = parseInt(value, 10);
    //     document.getElementById('notification-count').innerText = `Счет равен - ${currentCount}`;
    // });


    // const { refreshToken, accessToken } = dataProvider;
    // window.Telegram.WebApp.CloudStorage.setItem("accessToken", accessToken);
    // window.Telegram.WebApp.CloudStorage.setItem("refreshToken", refreshToken);
    // window.Telegram.WebApp.CloudStorage.getItem("accessToken", (err, accessToken) => {
    //     if (err || !accessToken) {
    //         // in edge cases you can fetch tokens from your backend
    //         return getAccessToken();
    //     }
    //     document.getElementById('notification-language').innerText = `Счет равен - ${accessToken}`;
    // });
    
    // window.Telegram.WebApp.CloudStorage.getItem("refreshToken", (err, refreshToken) => {
    //     if (err || !refreshToken) {
    //         // in edge cases you can fetch tokens from your backend
    //         return getRefreshToken();
    //     }
    //     document.getElementById('notification-count').innerText = `Счет равен - ${refreshToken}`;
    // });

}

document.getElementById('notification-button').addEventListener('click', function() {
    const block = document.getElementById('notification');
    block.classList.add('notification-close');
});