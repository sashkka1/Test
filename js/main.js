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


function how_tma(){
    const Name= '';
    const NewName='';
    console.log(`вывод 0  ${Name}`);
    // Name ="asdf";
    // window.Telegram.WebApp.CloudStorage.setItem("Name", Name);
    // Name ="asdasdasdasd";
    window.Telegram.WebApp.CloudStorage.getItem("Name", (err, NewName) => {
        console.log(`вывод 5  ${NewName}`);
        return NewName;
    });
    
    console.log(`вывод 1  ${NewName}`);
    if(NewName !== ''){
        Name ="asdf";
        console.log(`вывод 2  ${Name}`);
    }else{
        console.log(`вывод 3  ${NewName}`);
        Name = NewName + NewName;
        console.log(`вывод 4  ${Name}`);
    }
    document.getElementById('notification-count').innerHTML = `Имя ${Name}`;
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

    document.getElementById('notificationp').innerHTML = "Test 5";


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
