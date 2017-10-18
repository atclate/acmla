import Ember from 'ember';

export default Ember.Component.extend({
		didRender() {
				Ember.$('.gallery-frame-div').css('width', this.get('width'));
				Ember.$('.gallery-frame-div').css('height', this.get('height'));
				Ember.$('.gallery-frame-div .gallery-frame-img').css('top', this.get('height')*-0.856);
		}
});
