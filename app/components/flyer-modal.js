import Ember from 'ember';

export default Ember.Component.extend({


  didRender() {
       Ember.$(".pop").on("click", function() {
           Ember.$('#imagepreview').attr('src', Ember.$(this).attr('expanded')); // here asign the image to the modal when the user click the enlarge link
           Ember.$('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
       });
  }

});
