function toggle() {
    let content = document.getElementById('extra');
    let btn = document.querySelector('.button');
    
    if(btn.textContent === 'More') {
    //Toggle on
    content.style.display = 'block';
    btn.textContent = 'Less';
    } else {
    //Toggle off
    content.style.display = 'none';
    btn.textContent = 'More';
    }
}