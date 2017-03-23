import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog() {
      var params = {
        author: this.get('author'),
        date: Date.now(),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog', params);
    }
  }
});
