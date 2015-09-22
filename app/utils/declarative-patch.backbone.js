import _ from 'underscore';
import Backbone from 'backbone';

export function backboneViewComponentsPatch() {

  // Initialize declarative view system.
  Backbone.View.prototype.initializeViewComponents = function() {
    var $components = this.$('[component]');
    $components.each((i, el) => {
      var $el = $(el);
      var name = $el.attr('name');
      var initVars = $el.attr('initVars') ? $el.attr('initVars').split(',') : '';
      var component = $el.attr('component');
      var options  = {el: $el, parent:this };

      if (initVars) {
        initVars.forEach((data)=> {
          options[data] = this[data];
        });
      }

      if (!_.isFunction(this.availableComponents[component])) {
        console.warn(component + ' component does not exist');
        return;
      }

      this[name] =  new this.availableComponents[component](options);
    });
  };

  // default view render function including component init
  Backbone.View.prototype.renderHtml = function(data, data2) {
    this.$el.html(nunjucks.render(this.template, data));
    this.initializeViewComponents();
    this.afterRender && this.afterRender();
    return this;
  };
}
