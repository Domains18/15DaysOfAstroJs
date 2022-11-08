function togglesFunction (){
        window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
    });
};

export default togglesFunction;