Template.registerHelper('getProfileImg', function(userId){
  var imgUrl = UserImages.findOne({userId: this.userId }, {sort: {createdAt: -1}}).image;
  return imgUrl;
});

Template.registerHelper('getProfileavatar', function(userId){
  var imgUrl = UserImages.findOne({userId: this.userId }, {sort: {createdAt: -1}}).image;
  return imgUrl;
});
