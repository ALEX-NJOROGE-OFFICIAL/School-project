const signupForm = document.querySelector('#regForm');
signupForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

   auth.createUserWithEmailAndPassword(email,password).then(cred => {

    console.log(cred.user)
    
   })
})

