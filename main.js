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
    // let array = [1,2,3,4];
    let array = 1;
    console.table(array);
    let callback;
    await window.Telegram.WebApp.CloudStorage.setItem('arrayTest', array, callback);
    console.log(`callback - ${callback}`);
}


async function getItemFromCloudStorage() {
    // const storedArray = await window.Telegram.WebApp.CloudStorage.getItem('arrayTest');
    // console.log(`get storedArray  ${storedArray}`);
    // console.table(storedArray);
    await window.Telegram.WebApp.CloudStorage.getItem("arrayTest", (err, storedArray) => {
        console.log(`вывод 1  ${Name}`);
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

    
    document.getElementById('notificationp').innerHTML = "Test 5";
    console.log(`tg.version - ${tg.version}`);


    const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        preferences: {
            notifications: true,
            theme: "dark"
        }
    };
    console.table(userData);
    const jsonString = JSON.stringify(userData);
    console.table(jsonString);
    console.table();
    console.table();
    // document.getElementById('new-game-button').innerHTML = "Test 9";
    // let arrayCardSafe = Array.from(this._allCards);

    // let array = [1,2,4,3,6,5,8,7,9,0];
    // let a =1,b,c;

    // tg.setItem("havearray", array);
    // setItemInCloudStorage("getArray",array);
    // console.log('set true');
    // array = getItemFromCloudStorage("getArray");
    // console.table(array);
    

}
