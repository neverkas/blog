import DS from 'ember-data';

var keyword = DS.Model.extend({
	title: DS.attr('string'),
	posts: DS.hasMany('post', { async: true }),
});

keyword.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: 'keyword 1',
			posts: [1, 2 ,3]
		},
	]
});

export default keyword;