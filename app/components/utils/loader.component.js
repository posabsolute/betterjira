import Backbone from 'backbone';
import {tagName, on} from '../../mixins/backbone-props';

/**
 * Component used to show a full section line loder
 * @class LoaderComponent
 */
@tagName('progress')
export default class LoaderComponent extends Backbone.View {
  /**
    * When initializing the loader we setup the loader using the component system
    * @param {object} options - when a $el is defined the loader is attached to this element
    */
  initialize(options) {
    if (options.$el) {
      this.$el = options.$el;
    }

    this.$el.html('<div class="progress--indeterminate"></div>');
  }
  /**
    * Show a line animated loader the width of the parent
    * @param {object} $parent - DOM element you want the loader to attach itself
    */
  show($parent) {
    $parent && $parent.append(this.$el);

    this.$el.css({ display:'block' });
    this.$el.find('progress-indeterminate').addClass('animate');
    this.$el.animate({ opacity:1 }, 200);
  }
  /**
    * Call success when you finished loading
    * loader becomes green for a couple of seconds & hide itself.
    */
  success() {
    this.$el.find('progress-indeterminate').removeClass('animate').addClass('progress--success');
    this.$el.animate({ opacity:0 }, 2000);
  }
  /**
    * Hide loader but stay in the DOM
    */
  hide() {
    this.$el.animate({ opacity:0 }, 200, ()=> {
      this.$el.find('jprogress-indeterminate').removeClass('animate');
    });
  }
}
