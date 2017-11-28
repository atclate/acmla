import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
	willRender() {
		Ember.$.getJSON(config.rootURL+'/gallery_json.php').then(data => {
			this.set('albums', data);
		});
	}
});
