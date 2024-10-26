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
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    tg.ready();
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    console.log("вывод содержимого в обьекте Userэ");
    console.log(`вывод содержимого в обьекте User.username - ${user.username}`);
    console.log(`вывод содержимого в обьекте User.language_code - ${user.language_code}`);
    console.log(`вывод содержимого в обьекте User - ${user}`);
    console.log(`что получаю в user.is_premium  ${user.is_premium}`);
    console.log(`что получаю в user.colorScheme  ${user.colorScheme}`);
    console.log(`что получаю в  user.themeParams ${user.themeParams}`);
    console.log(`что получаю в user.photo_url  ${user.photo_url}`);
    console.log(`что получаю в user.photo ${user.photo}`);

    




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
