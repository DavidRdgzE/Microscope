Posts = new Mongo.Collection('posts');

Posts.allow({
	inser: function(userId, doc) {
		return !! userId;
	}
});