import DS from 'ember-data';

var category = DS.Model.extend({
	title: DS.attr('string'),
	posts: DS.belongsTo('post'),
});

category.reopenClass({
	FIXTURES: [
		{id: 1, title: "Category 1"},
		{id: 2, title: "Category 2"},
		{id: 3, title: "Category 3"},
	]
});

export default category;