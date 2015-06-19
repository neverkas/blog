import DS from 'ember-data';

var post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('author', { async: true }),
  category: DS.belongsTo('category'),
});

post.reopenClass({
	FIXTURES:[
		{
			id: 1,
			title: 'Post 1',
			author: 1,
			category: 1,
		},
		{
			id: 2,
			title: 'Post 2',
			author: 2,
			category: 2,
		},
		{
			id: 3,
			title: 'Post 3',
			author: 1,
			category: 3,
		},
	]
});

export default post;
