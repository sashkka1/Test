"use strict";


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
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    console.log(`user.username ${user.username}`);
    document.getElementById('notificationp').innerText = "Test 5";



    // let count = -1;

    // window.Telegram.WebApp.CloudStorage.setItem("count", count);
    // console.log("Запись прошла");

    // window.Telegram.WebApp.CloudStorage.getItem("count", (err, count) => {
    //     if (err || !count) {
    //         console.log("Ошибка возврата");
    //     }
    //     console.log(`возврат успешный ${count}`);
    // });

    // count++;



    let count = 1; // Начальное значение

    // Сохраняем значение count в CloudStorage
    window.Telegram.WebApp.CloudStorage.setItem("count", count, (err) => {
        if (err) {
            console.log(`Ошибка сохранения ${count}`);
        }
    });
    
    // Получаем значение count из CloudStorage
    window.Telegram.WebApp.CloudStorage.getItem("count", (err, value) => {
        if (err) {
            console.log(`Ошибка получения ${value}`);
            return;
        }
    
        // Преобразуем строку в число
        let currentCount = parseInt(value, 10);
        console.log(`преобразовал значение число ${currentCount}`);
        console.log(`преобразовал значение строка ${value}`);
    });


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
