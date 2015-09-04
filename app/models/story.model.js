import Backbone from 'backbone';
import JiraModel from './jira.model';

export default class StoryModel extends Backbone.Model {

  initialize(user) {
    this.user = user;
  }

  url(id = '') {
    var url = this.user.get('url');
    return `${url}/rest/api/2/issue/${id}`;
  }

  replaceDefaultSummary(persona, goal, reason) {
    return `As a ${persona} I want to ${goal} so that ${reason}`;
  }
}
