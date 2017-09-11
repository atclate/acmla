import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('aboutus', function() {
    this.route('budget');
    this.route('missiondeclaration');
    this.route('faithdeclaration');
    this.route('history');
    this.route('orgchart');
    this.route('budget');
  });
  this.route('products');
  this.route('supportus');
  this.route('gallery');
  this.route('news');
  this.route('contactus');
});

export default Router;
