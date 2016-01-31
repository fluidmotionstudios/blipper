Template.posts.rendered = function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
};

Template.posts.helpers({
  posts: function(){
    return Posts.find({}, {sort:{createdAt: -1}});
  }
});
