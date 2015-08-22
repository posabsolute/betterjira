import _ from 'underscore';
import Backbone from 'backbone';
import radio from 'backbone.radio';
import nunjucks from 'nunjucks';
import templates from './templates/templates';
import Router from './router';
import User from './models/jira.model';
import NotificationComponent from './components/notification.component';

// currentUser is unique
var currentUser = new User();
// The router is not used tradionnaly, routes are bound to keyboard shortcuts
var appRouter = new Router(currentUser);
// Notification component is unique, it's used with the 'notification' channel
// & appended to the body
var growler = new NotificationComponent();

Backbone.history.start({pushState: true,  hashChange: false});

