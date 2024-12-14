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

async function setItemInCloudStorage() {
    const timeSlots = [
        { time: "09:00 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "11:00 AM", available: true }
    ];
    let array = 1;
    console.table(timeSlots);
    console.table(JSON.stringify(timeSlots));
    await window.Telegram.WebApp.CloudStorage.setItem('arrayTest', JSON.stringify(timeSlots));
}


async function getItemFromCloudStorage() {
    await window.Telegram.WebApp.CloudStorage.getItem("arrayTest", (err, storedArray) => {
        console.log(`вывод 1  ${storedArray}`);
        console.table(JSON.parse(storedArray));
        console.log(`вывод 1  ${storedArray[0].time}, вывод 1  ${storedArray[1].available}`);
    });

}

let block = document.getElementById('set');
block.addEventListener('click', () => {
    setItemInCloudStorage();
});
block = document.getElementById('get');
block.addEventListener('click', () => {
    getItemFromCloudStorage();
});

    

window.onload = function () {
    const tg = window.Telegram.WebApp;
    tg.expand(); // максимум высоты принимает по дэфолту
    
    document.getElementById('notificationp').innerHTML = "Test 0";
    // console.log(`tg.version - ${tg.version}`);

   
    let localDate = new Date();
    let utcDate = new Date().toISOString();
    console.log(localDate);
    console.log(utcDate);
    // tg.initDataUnsafe.user.language_code
    // console.log('language_code',tg.initDataUnsafe.user.language_code); 
    // // tg.initDataUnsafe.user.username
    // console.log('username',tg.initDataUnsafe.user.username); 
    // // tg.themeParams.bg_color
    // console.log('bg_color',tg.themeParams.bg_color); 
    // // tg.colorScheme
    // console.log('colorScheme',tg.colorScheme); 
    // // tg.initDataUnsafe.auth_date
    // console.log('auth_date',tg.initDataUnsafe.auth_date); 
    // // tg.initDataUnsafe.user.id
    // console.log('id',tg.initDataUnsafe.user.id); 
    // // tg.platform
    // console.log('platform',tg.platform); 

    // // tg.added_to_attachment_menu
    // console.log('added_to_attachment_menu',tg.added_to_attachment_menu); 

    console.log(`is_bot  ${ tg.initDataUnsafe.user.is_bot}`);//undef
    console.log(`is_premium  ${tg.initDataUnsafe.user.is_premium}`);// undef
    console.log(`photo_url  ${tg.initDataUnsafe.user.photo_url}`);// undef

    // let a
    // window.Telegram.WebApp.checkHomeScreenStatus(a)
    // console.log('callback',a);

    // console.log(tg.isFullscreen); 
    // tg.requestFullscreen();
    // console.log(tg.isFullscreen); 
    // tg.addToHomeScreen();
    // tg.checkHomeScreenStatus([callback])
    // console.log('checkHomeScreenStatus',callback);
    // tg.requestWriteAccess([message]);
    // console.log('requestWriteAccess',message);
    // tg.requestContact([message2]);
    // console.log('requestContact',message2);
    // tg.showAlert('showAlert');
    // tg.showConfirm('showConfirm')
}
