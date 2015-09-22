import _ from 'underscore';
import Backbone from 'backbone';
/**
 * Define backbone class props
 * prettier class definition using decorators
 */
export function tagName(value) {
  return function decorator(target) {
    target.prototype.tagName = value;
  };
}

export function className(value) {
  return function decorator(target) {
    target.prototype.className = value;
  };
}

export function components(value) {
  return function decorator(target) {
    target.prototype.availableComponents = value;
  };
}

export function template(value) {
  return function decorator(target) {
    target.prototype.template = value;
  };
}

export function model(value) {
  return function decorator(target) {
    target.prototype.model = value;
  };
}

export function on(eventName) {
  return function(target, name, descriptor) {
    if (!target.events) {
      target.events = {};
    }

    if (_.isFunction(target.events)) {
      throw new Error('The on decorator is not compatible with an events method');
      return;
    }

    if (!eventName) {
      throw new Error('The on decorator requires an eventName argument');
    }

    target.events[eventName] = name;
    return descriptor;
  };
}

export function radio(channel, eventName) {
  return function(target, name, descriptor) {
    if (!target.radioEvents) {
      target.radioEvents = {};
    }

    if (_.isFunction(target.radioEvents)) {
      throw new Error('The on decorator is not compatible with an events method');
      return;
    }

    if (!eventName || !channel) {
      throw new Error('The on decorator requires an eventName argument');
    }

    target.radioEvents[eventName + ' ' + name] = channel;
    return descriptor;
  };
}

export function keyboardEvent(eventName) {
  return function(target, name, descriptor) {
    if (!target.keyboardEvents) {
      target.keyboardEvents = {};
    }

    if (_.isFunction(target.keyboardEvents)) {
      throw new Error('The on decorator is not compatible with an events method');
      return;
    }

    if (!eventName) {
      throw new Error('The on decorator requires an eventName argument');
    }
    console.log(eventName);
    target.keyboardEvents[eventName] = name;
    return descriptor;
  };
}

export function route(routeName) {
  return function(target, name, descriptor) {
    if (!target.routes) {
      target.routes = {};
    }

    if (_.isFunction(target.events)) {
      throw new Error('The route decorator is not compatible with an events method');
      return;
    }

    if (!routeName) {
      throw new Error('The on decorator requires an routeName argument');
    }

    target.routes[routeName] = name;
    return descriptor;
  };
}
