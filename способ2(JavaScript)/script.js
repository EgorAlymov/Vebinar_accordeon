const accordeon = document.getElementsByClassName('item');

// чтобы списки открывались и закрывались
for(i=0; i<accordeon.length; i++) {
    accordeon[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}











