window.addEventListener("load", init);

function init(){
    let input = document.getElementById("numar");
    let nr = localStorage.getItem("nr")
    input.value = nr || 0;
    console.log(localStorage.getItem("nr"));
    let it = 0;
    let delpar = 0;
    document.addEventListener('keypress',(e)=>{
        if(e.key == 's'){
            let nr = input.value;
            
            const array = document.querySelectorAll('p');
            setInterval(()=>{
                for(let i = it; i < array.length; i++){
                    it++;
                    let word = array[i].textContent.split(' ') || 0;
                    console.log(word);
                    if(word.length > nr){
                        delpar++;
                        array[i].parentNode.removeChild(array[i]); 
                        break;
                    }
                }
                localStorage.setItem("nr",delpar);
            }, 1000);
        }
    })
}