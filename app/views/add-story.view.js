import _ from 'underscore';
import Backbone from 'backbone';
import UserStoryModel from '../models/story.model';
import ContainerAnims from '../mixins/containerAnims.mixin';
import {template, components} from '../mixins/backbone-props';

/** 
 * Add story form
 * Contains multiple components
 * @class AddStory
 */
@ContainerAnims // Animations used by main container views
@template('add-story.template.html')
@className('jira-add-story content-section')
export default class AddStory extends Backbone.View {\
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
  @on('submit .storyForm')
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
