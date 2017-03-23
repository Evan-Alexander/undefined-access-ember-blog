import DS from 'ember-data';

export default DS.Model.extend({
  author : DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  teaser: Ember.computed("content", function(){
    return this.get("content").substring(0, 140) + "...";
  }),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
