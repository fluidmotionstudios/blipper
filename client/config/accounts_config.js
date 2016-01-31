AccountsTemplates.configure({
  defaultLayout: 'layout',
  showForgotPasswordLink: true,
  texts: {
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Sign In For Some Blippin Fun!",
        signUp: "Sign Up For Blipper",
        verifyEmail: "Verify Email Title",
      }
    }
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
    required: true,
    minLength: 6,
    errStr: 'Enter a blippin name yo!',
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    errStr: 'Must be at least 6 characters',
});
