Router.configure({
  layoutTemplate: 'layout'
});



//Router.map(function(){
    // Posts Route
  //  this.route('posts',{
    //  path: '/',
      //template: 'posts'
    //});

    // About Route
    //this.route('about');
//});

Router.route('/', {
  template: 'home'
});

Router.route('/about');

Router.route('/posts');

Router.route('/profile');

//Router.route('signinup');

AccountsTemplates.configureRoute('signIn', {
  template: 'signin',
  layoutTemplate: 'layout',
  redirect: '/posts',
});
AccountsTemplates.configureRoute('signUp', {
  template: 'signup',
  layoutTemplate: 'layout',
  redirect: '/profile',
});
