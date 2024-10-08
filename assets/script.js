//elements
const btn_el = document.getElementById('btn');
const light_off_el = document.getElementById('off')
const light_on_el = document.getElementById('on')

//processing
btn_el.addEventListener('click', () => {

    if (btn_el.innerHTML.includes('TURN ON')) {
        
        light_off_el.classList.add('d-none');
        light_on_el.classList.remove('d-none');

    }

});