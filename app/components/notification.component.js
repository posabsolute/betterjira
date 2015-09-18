import Backbone from 'backbone';
import {tagName, on} from '../mixins/backbone-props';
/**
 * Notifications are used to send back messages to the user
 * Visually they take the whole browser width, appear from the top of the page, like a fix header
 * the notifications system is unique & use a notification channel to receive messages.
 *
 * @class NotificationComponent
 */
@tagName('jira-notification')
export default class NotificationComponent extends Backbone.View {
  /**
   * When initializing we add the component to the body, stays hidden until used
   */
  initialize() {
    this.$el.html('<div class="jira-notification-content"></div>');
    $('body').append(this.$el);

    var notifChannel = Backbone.Radio.channel('notification');
    notifChannel.on('alert', (data) => {
      this.show(data);
    });
  }
  /**
   * Show the notification header
   * @param {string} message - message to show the user
   * @param {string} [type=success] - Type of message, change the notification colors (success | error)
   */
  show({message, type = 'success'}) {
    this.$el.css('display', 'none');
    this.$('jira-notification-content').html(message);
    this.$el
      .addClass('jira-notification--' + type)
      .slideDown(200);

    setTimeout(() => {
      this.hide();
    }, 5000);
  }
  /**
   * Hide the notification header
   */
  hide() {
    this.$el.slideUp(200, () => {
      this.$el.css('display', 'none');
    });
  }
}
