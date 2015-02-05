import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    search: function() {
      var param = this.get('searchParam');
      this.store.find('post', {q: param}).then(function(posts) {
        this.set('model', posts);
      }.bind(this));
    }
  }
});
