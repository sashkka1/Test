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
    
    document.getElementById('notificationp').innerHTML = "Test 9";
    console.log(`tg.version - ${tg.version}`);

    console.log(`tg.initDataUnsafe.user.is_premium  ${tg.initDataUnsafe.user.is_premium}`);// undef
    console.log(`tg.initDataUnsafe.user.photo_url  ${tg.initDataUnsafe.user.photo_url}`);// undef
    console.log(`tg.initDataUnsafe.user.language_code  ${tg.initDataUnsafe.user.language_code}`);
    console.log(`tg.initDataUnsafe.user.id  ${tg.initDataUnsafe.user.id}`);

    console.log(tg.isFullscreen); 
    tg.requestFullscreen();
    tg.addToHomeScreen();



}
