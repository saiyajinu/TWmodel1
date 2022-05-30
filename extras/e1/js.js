window.addEventListener("load", init)

function init(){
    let submit = document.querySelector('button');
    console.log('init');
    submit.addEventListener('click',(e)=>{
        console.log('click');
        let array = document.querySelectorAll('input');
        let select = document.querySelector('select');
        let inp1 = parseInt(array[0].value);
        let inp2 = parseInt(array[1].value) ;
        let res = 0;
        if(select.value == "+"){
            res = inp1+inp2;
        }
        else if(select.value == "-"){
            res = inp1-inp2;
        }
        else if(select.value == "*"){
            res = inp1*inp2;
        }
        else if(select.value == "/"){
            res = inp1/inp2;
        }
        else if(select.value == "^"){
            res = inp1**inp2;
        }
        let p = document.createElement('p');
        console.log(res);
        p.textContent = res;
        document.body.append(p);
    })
}

function handle(){}