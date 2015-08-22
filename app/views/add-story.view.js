import UserStoryModel from '../models/story.model';
import JiraModel from '../models/jira.model';
import ModalTemplate from '../components/modal/modal-component';

export default class AddStoryModal extends ModalTemplate {
  className() {return 'jira-add-story'; }

  events() {
    return {
      'submit .storyForm': 'save',
      'click .btn-submit': 'submitForm'
    };
  }

  constructor(...rest) {
    super(...rest);
    this.template = '/templates/AddUserStoryModal.html';
  }

  initialize() {
    this.constructor.__super__.initialize.apply(this);
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
