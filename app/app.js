import _ from 'underscore';
import Backbone from 'backbone';
import cocktail from 'backbone.cocktail';
import radio from 'backbone.radio';
import nunjucks from 'nunjucks';
import templates from './templates/templates';
import Router from './router';
import User from './models/jira.model';
import NotificationComponent from './components/notification.component';

// Initialize declarative view system.
Backbone.View.prototype.initializeViewComponents = function(availableComponents){
	var $components = this.$("[component]");
    $components.each((i, el) => {
      var $el = $(el),
          name = $el.attr("name"),
          initVars = $el.attr("initVars").split(','),
          component = $el.attr("component"),
          options  = {el: $el };

      if(initVars){
      	initVars.forEach((data)=>{
      		options[data] = this[data];
      	})
      }
      this[name] =  new availableComponents[component](options);
    }); 
}

// currentUser is unique
var currentUser = new User();
// The router is not used traditionnaly, routes are bound to keyboard shortcuts
var appRouter = new Router(currentUser);
// Notification component is unique, it's used with the 'notification' channel
// & appended to the body
var growler = new NotificationComponent();

Backbone.history.start({pushState: true,  hashChange: false});

