"use strict";






function DontWork(){
    console.log(`tg.initDataUnsafe.user.is_bot  ${ tg.initDataUnsafe.user.is_bot}`);//undef
    console.log(`tg.initDataUnsafe.user.is_premium  ${tg.initDataUnsafe.user.is_premium}`);// undef
    console.log(`tg.initDataUnsafe.user.photo_url  ${tg.initDataUnsafe.user.photo_url}`);// undef
    console.log(`tg.initDataUnsafe.chat.id  ${tg.initDataUnsafe.chat.id}`);// TypeError: Cannot read properties of undefined
    console.log(`tg.initDataUnsafe.chat.title  ${tg.initDataUnsafe.chat.title}`);// TypeError: Cannot read properties of undefined
}

function UseWork() {
    const tg = window.Telegram.WebApp;
    tg.initDataUnsafe.user.language_code
    tg.initDataUnsafe.user.username
    tg.themeParams.bg_color
    tg.colorScheme
    tg.initDataUnsafe.auth_date
    tg.initDataUnsafe.user.id
    tg.platform

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
    tg.disableVerticalSwipes();
}



window.onload = function () {
    const tg = window.Telegram.WebApp;
    tg.expand();
    document.getElementById('notificationp').innerHTML = tg.version;
    console.log(tg.version);
    telegram.WebApp.getState().then((state) => {
        const isFullscreen = state.isFullscreen;
        console.log("Is fullscreen:", isFullscreen);
    });
    // tg.addToHomeScreen();
    // console.log(`isFullscreen - ${tg.isFullscreen}`);
    // tg.requestFullscreen();

}
