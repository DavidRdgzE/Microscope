Meteor.publish('somePosts', function(){
  return Posts.find({'author':'Tom'});
});