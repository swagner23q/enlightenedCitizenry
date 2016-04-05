import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=383f6003ce6c401cacb0424c620ad476';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
