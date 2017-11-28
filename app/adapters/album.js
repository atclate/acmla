import DS from 'ember-data';
//import Ember from 'ember';
import config from '../config/environment';
/*
export default DS.JSONAPIAdapter.extend({
	findAll(modelName) {
		let a = Ember.$.getJSON(config.rootURL+"/gallery_json.php");
		console.log(a);
		return a;
	}
});
*/

export default DS.JSONAPIAdapter.extend({
  namespace: config.rootURL+'gallery_json.php'
});