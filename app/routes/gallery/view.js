import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		//return Ember.$.getJSON('http://acm-la.org/gallery_json.php');
		this.get('store').findRecord('person', 1);
	}
});
