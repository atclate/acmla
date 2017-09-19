// app/models/slide.js

import DS from 'ember-data';

export default DS.Model.extend({
		img: attr('string'),
		width: attr('string'),
		height: attr('string')
});
