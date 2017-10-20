import DS from 'ember-data';

export default DS.Model.extend({
		folderName: DS.attr('string'),
		pictures: DS.hasMany('picture')
});
