import Backbone from 'backbone';

export default class LoaderComponent extends Backbone.View {

  tagName() {return 'jira-progress'; }

  initialize(options) {
    if (options.$el) {
      this.$el = options.$el;
    }
    this.$el.html('<jira-progress-indeterminate></jira-progress-indeterminate>');
  }

  show($parent) {
    $parent && $parent.append(this.$el);

    this.$el.css({ display:'block' });
    this.$el.animate({ opacity:1 }, 200);
  }

  hide() {
    this.$el.animate({ opacity:0 }, 200);
  }
}
