import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
	var selected;
    Ember.$('ul.nav > li.navbar-button a').each(function () {
        if (Ember.$(this).attr("href").endsWith(location.hash)) {
            var parent = Ember.$(this).closest('ul.nav > li.navbar-button');
            parent.addClass('open');
            selected = parent;
            Ember.$(this).addClass('selected');
        }
    });

    Ember.$('ul.nav li.navbar-button').click(function(){
        Ember.$('li.navbar-button').not(Ember.$(this)).removeClass('open');
        Ember.$(this).addClass('open');
        selected = Ember.$(this);
    });

    Ember.$('ul.nav > li.navbar-button a').click(function(){
        Ember.$('li.navbar-button.dropdown a').not(Ember.$(this)).removeClass('selected');
        Ember.$(this).addClass('selected');
        //Insert event handling logic
    });
    Ember.$('ul.nav > li.navbar-button').hover(function(){
        // save previously clicked
        Ember.$('li.navbar-button').not(Ember.$(this)).removeClass('open');
        Ember.$(this).addClass('open')
    }, function() {
        // unsave previously clicked
        if (selected != null) {
            Ember.$('ul.nav > li.navbar-button').not(selected).removeClass('open');
            selected.addClass('open');
        }
    });
  }
});
