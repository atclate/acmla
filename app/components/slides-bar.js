import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },
  didRender() {
    this._super(...arguments);
    let component = this;
    let default_slides = this.get('default_slides');
    let width = this.get('width');
    let height = this.get('height');
    let promise = Ember.$.getJSON('http://acm-la.org/slides.php', (data) => {
      return data;
    });
    promise.then(function(data){
        for (let e of default_slides) {
            Ember.$('#slides').append(Ember.$('<img>', {src: e, width: width, height: height}));
        }
        for (let e of data) {
            Ember.$('#slides').append(Ember.$('<img>', {src: e["src"], width: width, height: height}));
        }
        Ember.run.next(component, 'initSlides');
      }, function(error) {
      	Ember.console.log(error);
      });
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
