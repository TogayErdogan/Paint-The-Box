

document.addEventListener('click', e => {
    let pickedColor = document.getElementById('color').value;

    if(e.target.classList == "box-content"){
        e.target.classList.add('picked');
        e.target.style.backgroundColor = pickedColor;
        e.target.style.transition = "all 2s";
    } else if(e.target.classList.contains('picked')){
        e.target.classList.remove('picked');
        e.target.style.backgroundColor = "";
        e.target.style.transition = "all 2s";
    }
})