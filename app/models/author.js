import DS from 'ember-data';

var author = DS.Model.extend({
	name: DS.attr('string'),
	posts: DS.hasMany('post'),
});
/*
author.reopenClass({
	FIXTURES:[
		{id: 1, name: 'Author 1', posts: [1]},
		{id: 2, name: 'Author 2', posts: [2]},
		{id: 3, name: 'Author 3', posts: [3]},
	]
});
*/
export default author;
