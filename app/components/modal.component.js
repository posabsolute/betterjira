import Backbone from 'backbone';

export default class ModalComponent extends Backbone.View {

  constructor(...rest) {
    super(...rest);
    this.options = {
      width: 560,
      content: '',
      topOffset: 0,
      position: 'fixed',
      topAnim: 50
    };
  }

  events() {
    return {
      "click .btn-jira-cancel" : "hide"
    };
  }

  tagName() {return 'modal-jira';}

  initialize() {
    $.extend(this.events, this.__proto__.__proto__.events());
    // Object.getPrototypeOf(obj)
    this.initComponents();
    this.delegateEvents();
  }

  initComponents() {
    var $components = this.$("[component]");
    $components.each((i, el) => {
      var $el = $(el),
          name = $el.attr("name"),
          component = $el.attr("component");
          
      this[name] =  new window[component]({el: $el });
    }); 
  }

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

  hideFast() {
    $('modal-jira:first').remove();
  }

  submitForm(e) {
    e && e.preventDefault();
    this.$el.find('form').submit();
  }

  hide(e) {
    e && e.preventDefault();
    console.log("colid");
    this.$el.animate({ opacity:0 }, 300, () => {
      this.remove();
    });
  }
}
