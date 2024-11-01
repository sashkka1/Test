"use strict";

function Use_work() {
    const tg = window.Telegram.WebApp;
    tg.initDataUnsafe.user.language_code
    tg.initDataUnsafe.user.username
    tg.themeParams.bg_color
    tg.colorScheme
    tg.initDataUnsafe.auth_date


    let count = localStorage.getItem('count');
    document.getElementById('notification-count').innerHTML = `Счет ${count}`;
    count++;
    localStorage.setItem('count', count);

    let NewName;
    let Name;
    document.getElementById('notification-count').innerHTML = `count ${Name}` ;
    window.Telegram.WebApp.CloudStorage.getItem("count", (err, Name) => {
        console.log(`вывод 1  ${Name}`);
        if (!Name) {
            console.log(`вывод 2  ${Name}`);
            Name =0;
        } else{
            console.log(`вывод 3  ${Name}`);
            NewName = Name;
            console.log(`вывод 4  ${NewName}`);
        Name++;
        }
        window.Telegram.WebApp.CloudStorage.setItem("count", Name);
        document.getElementById('notification-count').innerHTML = `count ${Name}` ;
    });

    tg.expand();
}



window.onload = function () {
    const tg = window.Telegram.WebApp;
    document.getElementById('notificationp').innerHTML = "Test 1";



    console.log(` tg.initDataUnsafe.user.is_bot  ${ tg.initDataUnsafe.user.is_bot}`);
    console.log(`tg.initDataUnsafe.user.username  ${tg.initDataUnsafe.user.username}`);
    console.log(`tg.initDataUnsafe.user.is_premium  ${tg.initDataUnsafe.user.is_premium}`);
    console.log(`tg.initDataUnsafe.user.photo_url  ${tg.initDataUnsafe.user.photo_url}`);
    console.log(`tg.initDataUnsafe.chat.id  ${tg.initDataUnsafe.chat.id}`);
    console.log(`tg.initDataUnsafe.user.id  ${tg.initDataUnsafe.user.id}`);
    console.log(`tg.initDataUnsafe.chat.title  ${tg.initDataUnsafe.chat.title}`);
    console.log(`tg.initDataUnsafe.chat.username  ${tg.initDataUnsafe.chat.username}`);
    console.log(`tg.initDataUnsafe.chat.photo_url  ${tg.initDataUnsafe.chat.photo_url}`);
    console.log(`tg.initDataUnsafe  ${tg.initDataUnsafe}`);
    console.log(`tg.initDataUnsafe  ${tg.initDataUnsafe}`);
    tg.enableVerticalSwipes()

}
