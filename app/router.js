import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislator');
  this.route('legislatorsResults', {path: '/legislatorsResults/:zip'});
  this.route('house');
});

export default Router;
