import _ from 'underscore';
import Backbone from 'backbone';
import UserStoryModel from '../models/story.model';
import ContainerAnims from '../mixins/containerAnims.mixin';

@ContainerAnims // Animations used by main container views
/** 
 * Add story form
 * Contains multiple components
 * @class AddStory
 */
export default class AddStory extends Backbone.View {
  className() {return 'jira-add-story content-section'; }

  events() {return {
    'submit .storyForm': 'save',
    'click .btn-submit': 'submitForm'
  }}

  initialize() {
    this.template = 'add-story.template.html';
  }
  /** 
   * Decapreated soon
   */
  getSummary(userStory) {
    var persona = this.$el.find('[name="persona"]').val();
    var goal = this.$el.find('[name="goal"]').val();
    var reason = this.$el.find('[name="reason"]').val();
    var defaultSummary = userStory.defaultSummary;

    return userStory.replaceDefaultSummary(persona, goal, reason);
  }
  /** 
   * Save data in a new story model
   * Show backlog on success
   */
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
