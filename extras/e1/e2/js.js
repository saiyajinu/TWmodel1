window.addEventListener('load',init);

function init(){
    let btn = document.querySelector('button');
    btn.addEventListener('click',()=>{
        let inp = document.createElement('input');
        document.body.append(inp);
    })
    let input = document.querySelectorAll('input');
    input.forEach(element => {
        console.log(element);
        element.addEventListener('keyup',()=>{
            element.style.backgroundColor = input.value;
        });
    })
        //not working
}