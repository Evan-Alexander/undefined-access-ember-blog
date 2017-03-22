import DS from 'ember-data';

export default DS.Model.extend({
  author : DS.attr(),
  date: DS.attr(),
  title: DS.attt(),
  content: DS.attr(),
  image: DS.attr()
});
