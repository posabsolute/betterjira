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
    this.$el.find("jira-progress-indeterminate").addClass("animate");
    this.$el.animate({ opacity:1 }, 200);
  }

  success() {
    this.$el.find("jira-progress-indeterminate").removeClass("animate").addClass("jira-progress-success");
    this.$el.animate({ opacity:0 }, 2000);
  }

  hide() {
    this.$el.animate({ opacity:0 }, 200, ()=>{
      this.$el.find("jira-progress-indeterminate").removeClass("animate");
    });
  }
}
