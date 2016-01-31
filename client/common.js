Template.registerHelper('getProfileImg', function(userId){
  var imgUrl = UserImages.findOne({userId: userId}, {sort: {createdAt: -1}}).image;
  return imgUrl;
});
