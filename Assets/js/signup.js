const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log('Submit button pressed.')

    const name = form['name'].value;
    const email = form['email'].value;
    const pass = form['password'].value;

    if(localStorage.getItem(email) === null){
        const obj = {
            'name': name,
            'email': email,
            'pass': pass
        }
    
        localStorage.setItem(email, JSON.stringify(obj));
        console.log("Registered new account", name, email, pass);
        console.log("Redirecting to sign in page");
        window.location.href="Index.html";
    } else {
        document.getElementById('accountWarning').style.display = "block";
    }
});