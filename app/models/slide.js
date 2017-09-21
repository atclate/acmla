// app/models/slide.js

import DS from 'ember-data';

export default DS.Model.extend({
		img: DS.attr('string'),
		width: DS.attr('string'),
		height: DS.attr('string')
});
