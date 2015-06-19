import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		//return this.store.find('post');
		return Ember.RSVP.hash({
			posts: this.get('store').find('post'),
			categories: this.get('store').find('category'),
		});
	}
});
