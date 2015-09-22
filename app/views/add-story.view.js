import _ from 'underscore';
import Backbone from 'backbone';
import mardownEditor from 'simplemde';
import {template, components, className, on} from '../mixins/backbone-props';

import UserStoryModel from '../models/story.model';
import ContainerAnims from '../mixins/containerAnims.mixin';
import DropdownHelperComponent from '../components/utils/dropdown-helper.component';

/**
 * Add story form
 * Contains multiple components
 * @class AddStory
 */
@ContainerAnims // Animations used by main container views
@template('views/add-story.template.html')
@className('view-add-story')
@components({'DropdownHelperComponent': DropdownHelperComponent})

export default class AddStory extends Backbone.View {
  afterRender() {
    var tesdcription = new SimpleMDE({ element: this.$('.text-writter')[0] });
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
  @on('submit .storyForm')
  save(e) {
    e.preventDefault();
    var userStory = new UserStoryModel();
    var summary = this.getSummary(userStory);

    userStory.set({
      fields: {
        project: { id: JiraModel.get('projectid') },
        summary: summary,
        description: this.$el.find('[name=description]').val(),
        issuetype: {
          id: '3',
        },
      },
    });

    userStory.save().done(function() {
      self.hide();
    });
  }
}
