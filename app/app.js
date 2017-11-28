import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  rootElement: '#container',
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
});

Ember.LinkComponent.reopen({
  attributeBindings: ['data-toggle']
});

loadInitializers(App, config.modulePrefix);

export default App;
