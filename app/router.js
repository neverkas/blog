import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.resource("/");
    this.resource("post", {path: '/:post_id'});
    this.resource("category", {path: '/:category_id'});
});
