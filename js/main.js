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
}

function how_tma(){
    let Name;
    let NewName;
    console.log(`вывод 0  ${Name}`);
    // Name ="asdf";
    // window.Telegram.WebApp.CloudStorage.setItem("Name", Name);
    // Name ="asdasdasdasd";
    window.Telegram.WebApp.CloudStorage.getItem("Name", (err, NewName) => {
        if(NewName !== undefined){
            console.log(`вывод 1  ${NewName}`);
            Name = NewName + NewName;
            console.log(`вывод 2  ${Name}`);
        }else{
            Name ="asdf";
            console.log(`вывод 3  ${Name}`);
        }
        console.log(`вывод успешн ${Name}`);
    });
    document.getElementById('notification-count').innerHTML = `Имя ${Name}`;
    console.log(`вывод 4  ${Name}`);
    window.Telegram.WebApp.CloudStorage.setItem("Name", Name);
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


    document.getElementById('notificationp').innerHTML = "Test 8";

    how_tma()



    // let name= 'aaaaaaaaaa';
    // localStorage.setItem('name', name);
    // console.log(`name до ${name}`);
    // // let count= 's';
    // count = localStorage.getItem('count');
    // console.log(`count после ${count}`);
    // document.getElementById('notification-count').innerHTML = `Счет ${}`;

}
