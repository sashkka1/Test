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
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    const user = window.Telegram.WebApp.initDataUnsafe.user;


    document.getElementById('notificationp').innerHTML = "Test 5";


    let NewName='';
    // let Name = window.Telegram.WebApp.CloudStorage.getItem("Name", (err, Name) => {
    //     NewName = JSON.stringify(Name);
    //     return NewName; 
    //     });
    // console.log(`вывод 0  ${NewName}`);
    // Name ="asdf";
    // window.Telegram.WebApp.CloudStorage.setItem("Name", Name);
    // Name ="asdasdasdasd";
    // window.Telegram.WebApp.CloudStorage.getItem("Name", (err, NewName) => {
    //     console.log(`вывод 5  ${NewName}`);
    //     return NewName;
    // });

    // if(Name !== ''){
    //     Name ="asdf";
    //     console.log(`вывод 2  ${Name}`);
    // }else{
    //     console.log(`вывод 3  ${Name}`);
    //     Name = Name + Name;
    //     console.log(`вывод 4  ${Name}`);
    // }
    // document.getElementById('notification-count').innerHTML = `Имя ${Name}`;

    let Name='aaaaaaaaaaaaaaaaaaaa';
    window.Telegram.WebApp.CloudStorage.setItem("Name", Name);



    // let name= 'aaaaaaaaaa';
    // localStorage.setItem('name', name);
    // console.log(`name до ${name}`);
    // // let count= 's';
    // count = localStorage.getItem('count');
    // console.log(`count после ${count}`);
    // document.getElementById('notification-count').innerHTML = `Счет ${}`;

}
