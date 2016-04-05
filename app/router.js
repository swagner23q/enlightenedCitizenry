import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislator');
  this.route('legislatorsResults', {path: '/legislatorsResults/:zip'});
  this.route('house');
  this.route('senate');
  this.route('houseSub', {path: '/houseSub/:committee.committee_id'});
  this.route('bills');
  this.route('billinfo', {path: '/billinfo/:bill_id'});
});

export default Router;
