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
}



window.onload = function () {

    document.getElementById('notificationp').innerHTML = "Test 7";

    const tg = window.Telegram.WebApp;
    // console.log(`viewportHeight ${tg.viewportHeight}`);
    console.log(`viewportStableHeight ${tg.viewportStableHeight}`);
    console.log(`viewportHeight ${tg.viewportHeight}`);
    console.log(`isVerticalSwipesEnabled  ${tg.isVerticalSwipesEnabled }`);
    // console.log(`viewportHeight ${tg.viewportHeight}`);
    // console.log(`viewportHeight ${tg.viewportHeight}`);
}
