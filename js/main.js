const elInp = document.querySelector('.header__inpit')
let list = document.querySelector('.list')
let tabs = document.querySelector('.beh')

elInp.addEventListener('keydown', ()=>{
    let val = elInp.value
    if(val.includes('tasbeh')==true){
        window.scroll({top:900, behavior:'smooth'})
        tabs.classList.add('behavor')
    }
})
// .....................................................
