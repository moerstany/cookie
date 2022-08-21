document.addEventListener('DOMContentLoaded',function(){
    readCoocie();
});

document.querySelector('#one').addEventListener('click',function(){
    //document.querySelector('#myH').style.backgroundColor = "red";
    document.cookie="theme=red;max-age=10";
    readCoocie();// если при каждом нажатии
})
document.querySelector('#two').addEventListener('click',function(){
   // document.querySelector('#myH').style.backgroundColor="blue";
    document.cookie="theme=blue;max-age=10";
    readCoocie();// если при каждом нажатии
})
document.querySelector('#three').addEventListener('click',function(){
    //document.querySelector('#myH').style.backgroundColor="green";
    document.cookie="theme=green;max-age=10";
    readCoocie();// если при каждом нажатии
})

function readCoocie(){
    let theme = document.cookie;
    console.log('cookie=>'+theme);
    let value = theme.split('=')[1];//считываем 0 индекс =theme, а 1 индекс =цвет
    console.log('value =>'+ value);
    document.querySelector('#myH').style.backgroundColor = value;
}