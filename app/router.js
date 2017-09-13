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
});

export default Router;
