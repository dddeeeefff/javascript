// fetch("./data.json")
// .then(function(str){ return str.json() })
// .then(function(data){
//     console.log(data);
// });

fetch("./data.json")
.then((str) => (str.json() ))  //화살표함수를 사용하면 function을 대체할수 있음.
.then((data) =>{
    // console.log(data.photo);
    // console.log(data.photo[0]);
    // console.log(data.photo[0].title);
    // console.log(data.photo[0]['title']);

    const elInfo = document.querySelector('.info');
    const elThum = document.querySelector('.thum');
    let figTag = ''; 
    data.photo.forEach(function(obj){
        figTag += `<figure><img src="${obj.src}" alt=""></figure>`
    });
    elThum.innerHTML = figTag;

    function dataChange(idx){
    infoTag =  `<figure><img src="${data.photo[idx].src}" alt=""></figure>
                <div>
                    <b>${data.photo[idx].title}</b>
                    <p>${data.photo[idx].price}</p>
                </div>`
    elInfo.innerHTML = infoTag;
    }
    dataChange(0);

    //event
    const elFigure = document.querySelectorAll('.thum figure');
    elInfo.classList.add('active');
    let timeout;

    elFigure.forEach((ele,idx) => {
        ele.addEventListener('click', ()=> {
            elInfo.classList.remove('active');

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                dataChange(idx);
                elInfo.classList.add('active');
            },500);
            
        });
    });
});




// json

// -> 모든 속성과 같은 큰따옴표 사용.
// -> 해당 문서안에 주석처리 안됨.
// -> 해당 문서안에는 데이터정보 이외에 다른 문자는 포함안됨.
// -> 객체 타입으로 데이터 작성.