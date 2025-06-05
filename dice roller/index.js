let startBtn = document.querySelector(".rollbtn");

startBtn.addEventListener('click',()=>{
    let noDice = document.getElementById('num').value;
    let randomList = document.getElementById('randomnum')
    let imgList = document.getElementById('randomimg')
    let list = [];
    let images = [];
    if(noDice > 6){
        window.alert("Enter the value between 1 to 6")
        location.reload();
    }
    else if(noDice == 0){
        window.alert(`"0" is INVALID..! enter 1 - 6`)
    }

    for(i=1; i<=noDice; i++){
        let randomno = Math.floor(Math.random()*noDice)+1;  
        list.push(randomno);
        images.push(`<img src="./img/dice${randomno}.png">`);
    }
    
    console.log(list);
    randomList.textContent = list;
    imgList.innerHTML= images;

})