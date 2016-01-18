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
