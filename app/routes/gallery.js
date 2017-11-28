import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		//return Ember.$.getJSON('http://acm-la.org/gallery_json.php');
		return this.get('store').findAll('album');
	}
});
