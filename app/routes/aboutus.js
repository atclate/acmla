import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.$.getJSON('http://acm-la.org/slides.php', () => {
			return [];
		});
	},
	actions: {
		didTransition() {
			Ember.run.next(this, 'initSlides');
		}
	},
	initSlides() {
			$("#slides").slidesjs({
				width: 648,
				height: 250,
				//auto: 3000,
				//continuous: true,
				//interval: 4000,
				//autoHeight: true,.
				pagination: false,
				//generatePagination: false,
				//navigation: false
				play: {
					active: false,
					effect: "slide",
					interval: 8000,
					auto: true,
					swap: true,
					pauseOnHover: false,
					restartDelay: 200 
				},
				navigation: false
			});

			Ember.$(".pop").on("click", function() {
				Ember.$('#imagepreview').attr('src', Ember.$(this).attr('expanded')); // here asign the image to the modal when the user click the enlarge link
				Ember.$('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
			});
	}
});
