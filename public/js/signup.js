$(document).ready(() => {
  // Getting references to our form and input
  //const signUpForm = $("form.signup");
  const emailInput = $("#userSignUpEmail");
  const passwordInput = $("#userPassword");
  const firstNameInput = $("#userFirstName")
  const lastNameInput = $("#userLastName")
  const signupBtn = $('#signUpPageBtn')

  signupBtn.on("click", function() {
    console.log("button clicked")
    //event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
    firstNameInput.val("");
    lastNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  })

  // When the signup button is clicked, we validate the email and password are not blank
  // signUpForm.on("submit", event => {
  //   event.preventDefault();
  //   const userData = {
  //     firstName: firstNameInput.val().trim(),
  //     lastName: lastNameInput.val().trim(),
  //     email: emailInput.val().trim(),
  //     password: passwordInput.val().trim()
  //   };

  //   if (!userData.email || !userData.password) {
  //     return;
  //   }
  //   // If we have an email and password, run the signUpUser function
  //   signUpUser(userData.email, userData.password);
  //   firstNameInput.val("");
  //   lastNameInput.val("");
  //   emailInput.val("");
  //   passwordInput.val("");
  // });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, email, password) {
    $.post("/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
