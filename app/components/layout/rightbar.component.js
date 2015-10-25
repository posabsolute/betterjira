import _ from 'underscore';
import Backbone from 'backbone';
import {tagName, template, components, on, radio} from '../../mixins/backbone-props';
/* components in leftbar */
import pbiComments from '../pbi/pbi-comments.component';
import pbiFiles from '../pbi/pbi-files.component';
import pbiInfos from '../pbi/pbi-infos.component';
/**
 * The rightbar sits outside of the browser view
 * Contains additional components relevant to the current view
 * @class RightbarComponent
 */
@tagName('rightbar')
@components({'PbIinfos': pbiInfos, 'Pbicomments': pbiComments, 'Pbifiles': pbiFiles}) // Components defined here can be auto-loaded when this view is rendered
export default class RightbarComponent extends Backbone.View {
  /**
   * Basic view setup
   * @param {object} user - user model, used to know if we need to show the menu or the login form
   */
  initialize(user) {
    this.user = user;
  }

  @radio('leftbar', 'show')
  show() {
    this.animate('in');
  }
  /**
   * Handle sidebar animations
   * @param {string} type - should we animate the sidebar (in | out)
   * @param {number} width - you can define a spefic width for the sidebar, used by login form.
   */
  animate(type, width) {
    var width = width || this.$el.width();
    if (type === 'in') {
      this.$el
        .css({
          'margin-right': -width,
          width: width,
        })
        .removeClass('hidden')
        .animate({'margin-right':0}, 200);
    }else {
      this.$el
        .animate({
          'margin-right':  -this.$el.outerWidth(),
        }, 200)
        .addClass('hidden');
    }
  }
  /**
   * hide sidebar
   */
  @radio('leftbar', 'hide')
  hide() {
    this.$el.animate({opacity:0}, 200, ()=> {
      this.$el.css(display, 'none');
    });
  }
}

