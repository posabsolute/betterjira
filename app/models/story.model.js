import Backbone from 'backbone';
import defaultPersonas from './user.model';

export default class StoryModel extends Backbone.Model {

  url(id = '') {
    var url = this.user.get('url');
    return `${url}/rest/api/2/issue/${id}`;
  }

  replaceDefaultSummary(persona, goal, reason) {
    return `As a ${persona} I want to ${goal} so that ${reason}`;
  }
}
