import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editPost: function(post) {
      var post = this.store.find('post', post.id);
      post.set('title', 'postTitle');
      post.set('body', 'postBody');
      post.save();
      this.transitionToRoute('posts');
    }
  }
});
