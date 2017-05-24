Meteor.publish('allPosts', function(){
  return Posts.find({}, {fields: {
    date: false
  }});
});