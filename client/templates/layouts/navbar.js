Template.navbar.rendered = function() {
  $(".button-collapse").sideNav();
};

Template.navbar.events({
  'click #logout': function(event){
    AccountsTemplates.logout();
  }
});

Template.navbar.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});
