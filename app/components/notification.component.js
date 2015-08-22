import Backbone from 'backbone';

export default class NotificationComponent extends Backbone.View {

  tagName() {return 'jira-notification'; }

  initialize() {
    this.$el.html('<jira-notification-content></jira-notification-content>');
    $('body').append(this.$el);

    var notifChannel = Backbone.Radio.channel('notification');
    notifChannel.on('alert', (data) => {
      this.show(data);
    });
  }

  show({message, type}) {
    this.$el.css('display', 'none');
    this.$("jira-notification-content").html(message);
    this.$el
      .attr("class", 'jira-notification-'+type)
      .slideDown(200);

    setTimeout(() =>{
      this.hide();
    },5000);
  }

  hide() {
    this.$el.slideUp(200, () => {
      this.$el.css('display', 'none');
    });
  }
}
