"use strict";

function Use_work() {
    const tg = window.Telegram.WebApp;
    tg.initDataUnsafe.user.language_code
    tg.initDataUnsafe.user.username
    tg.themeParams.bg_color
    tg.colorScheme
    tg.initDataUnsafe.auth_date
}

function how_tma(){
    let count =1;
    let newcount;
    window.Telegram.WebApp.CloudStorage.setItem("count", count);
    // count =0;
    window.Telegram.WebApp.CloudStorage.getItem("count", (err, newcount) => {
        console.log(`вывод успешн ${newcount}`);
        count = newcount;
    });
    // window.Telegram.WebApp.CloudStorage.removeItem("count")
    // count = count + 1;
    // window.Telegram.WebApp.CloudStorage.setItem("count", count);

    // window.Telegram.WebApp.CloudStorage.setItem('initDat', JSON.stringify(count))

    // window.Telegram.WebApp.CloudStorage.getItem('initDat').then((data, err) => {
    //     if(data && !err) {
    //     console.log(JSON.parse(data))
    //     } else {
    //     console.log(err)
    //     }
    //     })
}


window.onload = function () {
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    const user = window.Telegram.WebApp.initDataUnsafe.user;


    document.getElementById('notificationp').innerHTML = "Test 9";



    console.log(`user.username ${user.username}`);
    how_tma()
    console.log(`user.username ${user.username}`);

    let name= 'aaaaaaaaaa';
    localStorage.setItem('name', name);
    console.log(`name до ${name}`);
    name= 's';
    name = localStorage.getItem('name');
    console.log(`name после ${name}`);


}
