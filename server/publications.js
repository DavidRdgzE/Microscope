Meteor.publish('allPosts', function(){
  return Posts.find({'author':'Tom'}, {fields: {
    date: false
  }});
});

Meteor.publish('comments', function() {
  return Comments.find();
});