import DS from 'ember-data';

var post = DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  description: DS.attr('string'),
  
  author: DS.belongsTo('author', { async: true }),
  category: DS.hasMany('category', { async: true }),
  keyword: DS.hasMany('keyword', { async: true }),
});

post.reopenClass({
	FIXTURES:[
		{
			id: 1,
			title: 'Aliquam eleifend augue',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem in erat finibus, quis tincidunt velit aliquet. Aenean id congue nisi, nec pellentesque ex. Sed malesuada tellus at dictum blandit. Suspendisse nec dapibus eros. Morbi laoreet posuere ornare. Nunc ullamcorper nibh tincidunt augue vulputate, at semper diam tempor. Maecenas lorem justo, iaculis eu euismod eget, maximus a mi. Nulla ultrices massa turpis. Ut posuere quis ipsum eget mollis. Quisque tellus metus, mattis ut nibh non, euismod finibus eros. Sed non vulputate ipsum. Vivamus viverra ornare nisl vitae varius. Sed lobortis aliquam vulputate. Donec imperdiet efficitur finibus. ',
			description: 'Lorem ipsum dolor sit amet.',
 
			author: 1,
			category: [1],
			keyword: [1],
		},
		{
			id: 2,
			title: 'Quisque eget diam',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem in erat finibus, quis tincidunt velit aliquet. Aenean id congue nisi, nec pellentesque ex. Sed malesuada tellus at dictum blandit. Suspendisse nec dapibus eros. Morbi laoreet posuere ornare. Nunc ullamcorper nibh tincidunt augue vulputate, at semper diam tempor. Maecenas lorem justo, iaculis eu euismod eget, maximus a mi. Nulla ultrices massa turpis. Ut posuere quis ipsum eget mollis. Quisque tellus metus, mattis ut nibh non, euismod finibus eros. Sed non vulputate ipsum. Vivamus viverra ornare nisl vitae varius. Sed lobortis aliquam vulputate. Donec imperdiet efficitur finibus. ',
			description: 'Lorem ipsum dolor sit amet.',

			author: 2,
			category: [2],
		},
		{
			id: 3,
			title: 'Fusce in dui at dolor lacinia hendrerit.',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem in erat finibus, quis tincidunt velit aliquet. Aenean id congue nisi, nec pellentesque ex. Sed malesuada tellus at dictum blandit. Suspendisse nec dapibus eros. Morbi laoreet posuere ornare. Nunc ullamcorper nibh tincidunt augue vulputate, at semper diam tempor. Maecenas lorem justo, iaculis eu euismod eget, maximus a mi. Nulla ultrices massa turpis. Ut posuere quis ipsum eget mollis. Quisque tellus metus, mattis ut nibh non, euismod finibus eros. Sed non vulputate ipsum. Vivamus viverra ornare nisl vitae varius. Sed lobortis aliquam vulputate. Donec imperdiet efficitur finibus. ',
			description: 'Lorem ipsum dolor sit amet.',

			author: 1,
			category: [3],
		},
	]
});

export default post;
