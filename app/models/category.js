import DS from 'ember-data';

var category = DS.Model.extend({
	name: DS.attr('string'),
	posts: DS.hasMany('post', { async: true }),
});

category.reopenClass({
	FIXTURES: [
		{
			id: 1, 
			name: "Category 1", 
			posts: [1]
		},
		{
			id: 2, 
			name: "Category 2", 
			posts: [3]
		},
		{
			id: 3, 
			name: "Category 3", 
			posts: [2,1]
		},
	]
});

export default category;