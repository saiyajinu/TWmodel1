window.addEventListener('load',init);

function init(){
    for(let i = 0; i< 10; i++){
        let div = document.createElement('div');
        div.innerHTML = "plm";
        div.classList.add('dreptunghi');
        div.addEventListener('click', (e) => {
            let style = window.getComputedStyle(div,null).getPropertyValue('height');
            let size = parseFloat(style);
            console.log(size);
            div.style.height = (size+10) + 'px';
            e.stopPropagation();
        })
        document.body.append(div);
    }
    document.addEventListener('click',()=>{
        const array = document.querySelectorAll('div');
        array.forEach(elem => {
            elem.style.height = 20 + 'px';
        })
    })
}