
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
const users = JSON.parse(localStorage.getItem('users') || '{}');

signUpForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if(!name || !email || !password){
        alert("Please fill all fields!");
        return;
    }

    if(users[email]){
        alert("Email already registered!");
        return;
    }

    users[email] = { name, password };
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! You can now sign in.");
    this.reset();
});

signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if(users[email] && users[email].password === password){

        document.querySelector('.container').innerHTML = `
        <div class="secured-page">
            <h1>Hello, ${users[email].name}!</h1>
            <p>You have accessed the secured page.</p>
            <button class="logout-btn" onclick="logout()">Logout</button>
        </div>`;
    } else {
        alert("Invalid email or password");
    }
});

function logout(){
    location.reload();
}
