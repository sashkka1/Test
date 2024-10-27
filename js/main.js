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
    let count =0 ;
    let newcount;
    // window.Telegram.WebApp.CloudStorage.setItem("count", count);

    window.Telegram.WebApp.CloudStorage.getItem("count", (err, newcount) => {
        if (err || !newcount) {
            console.log(`ошибка вывода ${newcount}`);
        } else{
            console.log(`вывод успешн ${newcount}`);
        }
    
    });
    
}


window.onload = function () {
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    const user = window.Telegram.WebApp.initDataUnsafe.user;


    document.getElementById('notificationp').innerHTML = "Test 3";



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
