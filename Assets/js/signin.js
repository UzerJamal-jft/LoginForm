const form = document.getElementById('signinForm');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log('Submit button pressed.')

    const email = form['email'].value;
    const password = form['password'].value;

    const warning = document.getElementById("accountWarning");
    if(localStorage.getItem(email) === null){
        warning.innerHTML = 'Account not found!';
        warning.style.display = "block";
    } else {
        let userObj = JSON.parse(localStorage.getItem(email));
        if(password === userObj.pass){
            window.location.href = "home.html";
        } else {
            warning.innerHTML = 'Invalid password!';
            warning.style.display = "block";
        }
    }
});