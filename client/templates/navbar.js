Template.navbar.rendered = function() {
  $(".button-collapse").sideNav();
};

Template.navbar.events({
  'click #logout': function(event){
    AccountsTemplates.logout();
  }
});
