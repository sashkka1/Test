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

function how_tma(){
    let count;
    let newcount;
    // window.Telegram.WebApp.CloudStorage.setItem("count", count);

    window.Telegram.WebApp.CloudStorage.getItem("count", (err, newcount) => {
        if (err || !newcount) {
            console.log(`ошибка вывода ${newcount}`);
        } else{
            console.log(`вывод успешн ${newcount}`);
        }
        count = newcount;
    });
    count = count + 1;
    window.Telegram.WebApp.CloudStorage.setItem("count", count);
}

function get(){
    const tg = window.Telegram.WebApp;
    console.log(`tg.UserLanguage ${tg.UserLanguage}`);
    console.log(`tg.themeParams.bg_color ${tg.themeParams.bg_color}`);
    console.log(`tg.colorScheme ${tg.colorScheme}`);
    console.log(`tg.initDataUnsafe.auth_date ${tg.initDataUnsafe.auth_date}`);
    console.log(`tg.initDataUnsafe.chat.photo_url ${tg.initDataUnsafe.chat.photo_url}`);
    console.log(`tg.initDataUnsafe.receiver.is_premium ${tg.initDataUnsafe.receiver.is_premium}`);
    console.log(`tg.initDataUnsafe.receiver.photo_url ${tg.initDataUnsafe.receiver.photo_url}`);
    console.log(`tg.initDataUnsafe.receiver.is_premium ${tg.initDataUnsafe.user.is_premium}`);
    console.log(`tg.initDataUnsafe.receiver.photo_url ${tg.initDataUnsafe.user.photo_url}`);

}


window.onload = function () {
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    const user = window.Telegram.WebApp.initDataUnsafe.user;


    document.getElementById('notificationp').innerHTML = "Test 4";



    console.log(`user.username ${user.username}`);
    how_tma();
    console.log(`user.username ${user.username}`);

    
    let count = {
        key: "count",
        anotherKey: "anotherCount"
    };

    // Функция для отправки данных
        // tg.sendData(JSON.stringify(count));




}
