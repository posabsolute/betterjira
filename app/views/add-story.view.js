import _ from 'underscore';
import Backbone from 'backbone';
import UserStoryModel from '../models/story.model';
import ContainerAnims from '../traits/containerAnims.trait';

@ContainerAnims
export default class AddStory extends Backbone.View {
  className() {return 'jira-add-story'; }

  events() {return {
    'submit .storyForm': 'save',
    'click .btn-submit': 'submitForm'
  }}

  initialize() {
    console.log(this);
    this.template = '/templates/add-story.html';
  }

  render() {
    this.$el.html(nunjucks.render(this.template, data));
    return this;
  }

  getSummary(userStory) {
    var persona = this.$el.find('[name="persona"]').val();
    var goal = this.$el.find('[name="goal"]').val();
    var reason = this.$el.find('[name="reason"]').val();
    var defaultSummary = userStory.defaultSummary;

    return userStory.replaceDefaultSummary(persona, goal, reason);
  }

  save(e) {
    e.preventDefault();

    var self = this,
        userStory = new UserStoryModel(),
        summary = this.getSummary(userStory);

    userStory.set({
      fields: {
        project:
          {
            id: JiraModel.get('projectid')
          },
        summary: summary,
        description: this.$el.find('[name=description]').val(),
        issuetype: {
          id: '3'
        }
      }
    });

    userStory.save().done(function() {
      self.hide();
    });
  }
}
