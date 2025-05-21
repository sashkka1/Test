let arrayGraphExamples = [], arrayGraphTime = [], arrayGraphMistake = [];   
let stats = [];
// если пользователь зашел в новом месяце и сразу посмотрит статистику то она должна быть пустой а не прошлого месяца
for(let i=1;i<=30;i++){
    stats[i]= [Math.floor(Math.random() * (20 - 10 + 1)) + 10,Math.floor(Math.random() * (20 - 10 + 1)) + 10,Math.floor(Math.random() * (20 - 10 + 1)) + 10];
};    

console.log('stats1',stats);
// заполняю массив для рисования месячных графиков
for (let i = 1; i <= 30; i++) {
    arrayGraphExamples.push({
        day: String(i),
        examples: stats[i][1],
    });
    arrayGraphTime.push({
        day: String(i),
        time: (stats[i][0]/60).toFixed(2),
    });

    let number=0;
    if(stats[i][2] != 0){
        number = ((stats[i][1] - stats[i][2])/stats[i][1]).toFixed(2);
    }
    arrayGraphMistake.push({
        day: String(i),
        mistake: number,
    });
}
console.log('arrayGraphExamples',arrayGraphExamples);
// рисую графики примеров
new Morris.Line({
    element: 'graph-wrapper-examples',
    data: arrayGraphExamples,
    xkey: 'day',
    parseTime: false,
    ykeys: ['examples'],
    // hideHover: 'always',
    labels: ['examples'],
    lineColors: ['green']
});
// рисую графики времени
new Morris.Line({
    element: 'graph-wrapper-time',
    data: arrayGraphTime,
    xkey: 'day',
    parseTime: false,
    ykeys: ['time'],
    // hideHover: 'always',
    labels: ['time'],
    lineColors: ['blue']
});
// рисую графики ошибок
new Morris.Line({
    element: 'graph-wrapper-mistake',
    data: arrayGraphMistake,
    xkey: 'day',
    parseTime: false,
    ykeys: ['mistake'],
    // hideHover: 'always',
    labels: ['mistake'],
    lineColors: ['red']
});

// graphToToday('graph-conteiner-examples','graph-wrapper-examples'); // передвигаю на текущую дату
// graphToToday('graph-conteiner-time','graph-wrapper-time'); 
// graphToToday('graph-conteiner-mistake','graph-wrapper-mistake');



function graphToToday(one,two){
    let today = new Date().getDate(); // получаем текущий день месяца
    let container = document.getElementById(one);
    let chart = document.getElementById(two);

    // Ждем небольшой интервал, чтобы график точно успел отрисоваться
    setTimeout(() => {
        // Найти все подписи по оси X (Morris генерирует их с классом .x-axis-label или подобным)
        let labels = chart.querySelectorAll('text');

        let targetLabel = null;

        labels.forEach(label => {
            if (parseInt(label.textContent) === today) {
            targetLabel = label;
            }
        });

        if (targetLabel) {
            let labelRect = targetLabel.getBoundingClientRect();
            let containerRect = container.getBoundingClientRect();

            let offsetLeft = labelRect.left + container.scrollLeft - containerRect.left;
            let centerScroll = offsetLeft - container.clientWidth / 2 + labelRect.width / 2;

            container.scrollLeft = centerScroll;
        }
    }, 100);
}