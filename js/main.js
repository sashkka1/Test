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


    // console.log(`user.bg_color ${user.bg_color}`);
    // console.log(`user.ThemeParams.bg_color ${user.ThemeParams.bg_color}`);
    // console.log(`tg.ThemeParams.bg_color ${tg.ThemeParams.bg_color}`);
    // console.log(`tg.WebAppInitData.user.username ${tg.WebAppInitData.user.username}`);
    // console.log(`tg.WebAppUser.username ${tg.WebAppUser.username}`);
    // console.log(`tg.WebAppUser.language_code ${tg.WebAppUser.language_code}`);
    // console.log(`tg.WebAppUser.is_premium ${tg.WebAppUser.is_premium}`);
    // console.log(`tg.WebAppUser.photo_url ${tg.WebAppUser.photo_url}`);
    // console.log(`tg. ${}`);
    // console.log(`tg. ${}`);
    // console.log(`tg. ${}`);
    // console.log(`tg. ${}`);
    // console.log(`tg. ${}`);
    
    
    




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
