import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('aboutus', { path: '/aboutus' }, function() {
    this.route('missiondeclaration', { path: '/missiondeclaration' });
    this.route('faithdeclaration', { path: '/faithdeclaration' });
    this.route('history', { path: '/history' });
    this.route('orgchart', { path: '/orgchart' });
    this.route('budget', { path: '/budget' });
  });
  this.route('products');
  this.route('supportus');
  this.route('gallery');
  this.route('news');
  this.route('contactus');
  this.route('north_america_2017');
  this.route('kids_dvd');
  this.route('2017-choir-retreat');
  this.route('album1');
  this.route('album2');
  this.route('album3');
  this.route('album4');
  this.route('album5');
  this.route('album6');
  this.route('album7');
  this.route('album8');
  this.route('album9');
  this.route('album10');
  this.route('album11');
});

export default Router;
