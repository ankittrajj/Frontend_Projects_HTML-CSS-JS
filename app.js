// turn on the light
let on_bulb = ()=>{
    // on the bulb
    let img = document.getElementById('bulb')
    img.setAttribute('src','onbulb.jpg')
}


// turn off the light
let off_bulb = ()=>{
    // off the bulb
    let off_img = document.getElementById('bulb')
    off_img.setAttribute('src','off1.jpg') 
}


// extra button with toggle text & toggle button
let toggle_btn=()=>{
    // toggle the button
    let imgob = document.getElementById('bulb')
    let srcValue = imgob.getAttribute('src')

    let btnob = document.getElementById('toggle_text');
    // let btn_text = btnob.innerHTML
    // condition for toggling text & btn

    if(srcValue== 'off1.jpg'){
        on_bulb();
        btnob.innerHTML='Off'
    }
    else{
        off_bulb();
        btnob.innerHTML='On'
    }

}
