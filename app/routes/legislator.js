import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('legislatorsResults', params.zip);
    }
  }
});
