window.addEventListener("load", generate);


const classList = ['c1', 'c2', 'c3', 'c4', 'c5'];

function generate(){
    const N = Math.max(10, new Date().getMinutes());
    for(let i = 0; i < N; i++){
        const p = document.createElement('p');
        p.innerHTML = "Sefcic Adrian-Ionut";
        p.classList.add(classList[Math.floor(Math.random()*classList.length)])
        p.addEventListener("click", (e)=>{
            e.stopPropagation();
            const pclass = e.target.className;
            console.log(pclass);
            Array.from(document.getElementsByClassName(pclass)).forEach(el => el.remove());
        })
        document.body.append(p);
    }
    document.addEventListener("click", e=>{
        alert(e.clientX);
    })
}
