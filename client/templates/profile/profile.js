Template.profile.events({
  "submit .edit-profile": function(event){
    var file = $('#profileImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file);

      ProfileImages.insert(fsFile, function(err, result){
        if(err){
          throw new Meteor.Error(err);
        } else {

          var imageLoc = '/cfs/files/ProfileImages/'+result._id;

          UserImages.insert({
            userId: Meteor.userId(),
            username: Meteor.user().profile.name,
            image: imageLoc,
            createdAt: new Date()
          });

          Router.go('/');
        }
      });
    }

    return false;
  }
});

Template.profile.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

//Template.profile.helpers({
  //user: function() {
    //return Meteor.users.findOne(this.userId);
  //}
//});

Template.profile.helpers({
  user: function () {
    return Meteor.users.findOne(this._id);
  }
});
