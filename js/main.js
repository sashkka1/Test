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

    // console.log(`user.username ${user.username}`);
    
    document.getElementById('notificationp').innerText = "Test 8";



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



    // let count = 1; // Начальное значение

    // let currentCount;
    // // Получаем значение count из CloudStorage
    // window.Telegram.WebApp.CloudStorage.getItem("count", (err, value) => {
    //     if (err) {
    //         console.log(`Ошибка получения ${value}`);
    //         return;
    //     }
    
    //     // Преобразуем строку в число
    //     currentCount = parseInt(value, 10);
    //     console.log(`преобразовал значение число ${currentCount}`);
    //     console.log(`преобразовал значение строка ${value}`);
    //     document.getElementById('notification-count').innerText = currentCount;
    // });
    // currentCount ++;
    // // Сохраняем значение count в CloudStorage
    // window.Telegram.WebApp.CloudStorage.setItem("count", currentCount, (err) => {
    //     if (err) {
    //         console.log(`Ошибка сохранения ${currentCount}`);
    //     }
    // });


    const { refreshToken, accessToken } = dataProvider;
    window.Telegram.WebApp.CloudStorage.setItem("accessToken", accessToken);
    window.Telegram.WebApp.CloudStorage.setItem("refreshToken", refreshToken);
    console.log(`accessToken ${accessToken}`);
    console.log(`refreshToken ${refreshToken}`);
    console.log(`dataProvider ${dataProvider}`);
    window.Telegram.WebApp.CloudStorage.getItem("accessToken", (err, accessToken) => {
        if (err || !accessToken) {
            console.log(`ошибка получения`);
            return getAccessToken();
        }
        console.log(`accessToken2 ${accessToken}`);
    });
    
    window.Telegram.WebApp.CloudStorage.getItem("refreshToken", (err, refreshToken) => {
        if (err || !refreshToken) {
            console.log(`ошибка получения2`);
            return getRefreshToken();
        }
        console.log(`refreshToken2 ${refreshToken}`);
    });





}
