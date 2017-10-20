import Ember from 'ember';

export default Ember.Component.extend({
	willRender() {
		$.getJSON('http://acm-la.org/gallery_json.php').then(data => {
			this.set('albums', data);
		});
	}
});
