import Backbone from 'backbone';
import {tagName} from '../mixins/backbone-props';
/**
 * Base view for modals
 * Setup the basic needs for lauching & hiding a modal
 * @class ModalComponent
 */
@tagName('modal-jira')
export default class ModalComponent extends Backbone.View {
  /**
   * Base options
   */
  constructor(...rest) {
    super(...rest);
    var one = 'sdfsdf';
    var two = 'sdfsdf';

    this.options = {
      width: 560,
      content: '',
      topOffset: 0,
      position: 'fixed',
      topAnim: 50
    };
  }
  /**
   * Extend view events with modal components events
   */
  initialize() {
    $.extend(this.events, this.__proto__.__proto__.events());

    // Object.getPrototypeOf(obj)
    this.delegateEvents();
  }
  /**
   * Show new modal, hides older modals
   * positioned center center
   */
  show(settings) {
    var marginleft;
    var marginTop;
    var options = $.extend({}, this.options, settings);
    var $firstField = this.$el.find('form input[type=text]:first');

    if ($('modal-jira').length > 1) {
      this.hideFast();
    }

    this.$el
        .css('width', options.width)
        .css('position', options.position);

    if (options.position === 'fixed') {
      marginTop = -parseInt(this.$el.height() / 2 + options.topOffset + options.topAnim + 1, 10);
      marginleft = -parseInt(this.$el.width() / 2, 10);

      this.$el.css({
        marginTop: marginTop,
        marginLeft: marginleft
      });

    }else {

      marginleft = -parseInt($dialog.width() / 2, 10);
      this.$el.css({
        top: $(window).scrollTop() + 50,
        marginLeft: marginleft
      });
    }

    this.$el.animate({
      opacity: 1,
      marginTop: (marginTop + options.topAnim)
    }, 300, function() {
      if (!$firstField.hasClass('no-focus') || !$firstField.val()) {
        $firstField.focus();
      }
    });
  }
  /**
   * Remove instantly the modal
   */
  hideFast() {
    $('modal-jira:first').remove();
  }
  /**
   * Remove modal with an animation
   */
  @on('click .btn-jira-cancel')
  hide(e) {
    e && e.preventDefault();
    this.$el.animate({ opacity:0 }, 300, () => {
      this.remove();
    });
  }
}
