import _ from 'underscore';
import Backbone from 'backbone';
import radio from 'backbone.radio';
import nunjucks from 'nunjucks';
import {backboneViewComponentsPatch} from './utils/declarative-patch.backbone';

import templates from './templates/templates';
import Router from './router';
import User from './models/user.model';
import NotificationComponent from './components/notification.component';

// Add components system to Backbone.View prototype
backboneViewComponentsPatch();

// currentUser is unique
var currentUser = new User();

// The router is not used traditionnaly, routes are bound to keyboard shortcuts
var appRouter = new Router(currentUser);

// Notification component is unique, it's used with the 'notification' channel
// & appended to the body
var growler = new NotificationComponent();

Backbone.history.start({pushState: false,  hashChange: true });

