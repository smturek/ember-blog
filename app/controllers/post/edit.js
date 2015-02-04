import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editPost: function(foo) {
      var post = this.store.find('post', foo.id);
      post.set('title', 'postTitle');
      post.set('body', 'postBody');
      post.save();
      this.transitionToRoute('posts');
    }
  }
});
