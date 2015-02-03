import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newPost: function() {
      var title = this.get('postTitle');
      var body = this.get('postBody');
      var post = this.store.createRecord('post', {title: title, body: body});
      post.save();
      this.transitionToRoute('posts');
    },

    deletePost: function(post) {
        post.destroyRecord();
        this.transitionToRoute('posts');
    }
  }
});
