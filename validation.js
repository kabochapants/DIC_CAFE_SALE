function emailValidation() {
    const form = document.getElementById('form');
    const emailComfirmField = document.getElementById('email_confirm');
    
    const element = document.createElement('p')
    element.setAttribute('id', 'alert');
    const message = document.createTextNode("Eメールが一致しません")
    const contact_content = document.getElementById('contact_content');
        
    element.appendChild(message);
    element.classList.add("alert_color");


    emailComfirmField.addEventListener('input', e => {
    if(form.email.value !== form.email_confirm.value) {
        
        if (!document.getElementById('alert')) {
            contact_content.parentNode.insertBefore(element , contact_content);
            emailComfirmField.classList.add("alert_bg");
        } 

    } else {
        emailComfirmField.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
    } 
    });
};


window.onload = emailValidation;