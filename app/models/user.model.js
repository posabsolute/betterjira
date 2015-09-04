
import Backbone from 'backbone';
/**
 * Fetch user data from jira
 * also used to test project connection with jira
 * @class UserModel
 */
export default class UserModel extends Backbone.Model {
  initialize() {
    this.fetch();
    this.ajaxAuthSetup();
  }

  validate(attrs) {

  }
  /**
   * Check if we have a user saved in localstorage
   */
  isConnected() {
    return localStorage.getItem('jiraUser');
  }
  /**
   * Fetch user from localstorage
   */
  fetch() {
    this.set(JSON.parse(localStorage.getItem('jiraUser')));
  }
  /**
   * set user in the model
   * save in jira model
   * @param {object} user - user json object
   */
  save(user) {
    this.set(user);
    localStorage.setItem('jiraUser', JSON.stringify(user));
  }
  /**
   * Set Jira basic auth for future request
   */
  ajaxAuthSetup(data = {}) {
    $.ajaxSetup({
      crossDomain: true,
      beforeSend: (xhr) => {
        xhr.setRequestHeader(
            'Authorization',
            'Basic ' + btoa(data.username + ':' + data.password)
        );
      },
    });
  }
  /**
   * remove user
   */
  destroy() {
    localStorage.removeItem('jiraUser');
  }
  /**
   * Test project connection with jira
   * @param {object} formData - user json object
   */
  testConnection(formData = {}) {
    var content = {
      url: formData.url || this.get('url'),
      projectid: formData.projectid || this.get('projectid'),
      username: formData.username || this.get('username'),
      password: formData.password || this.get('password'),
    };

    this.ajaxAuthSetup(content);
    return $.ajax({
      url: content.url + '/rest/api/2/project/' + content.projectid,
    }).done((user) => {

    })
    .fail((jqXHR, textStatus, errorThrown) => {
      this.verifyError(jqXHR);
    });
  }
  /**
   * Verify errors returned by Jira while testing user & project connection
   * @param {object} jqXHR - XHR object returned by jQuery
   */
  verifyError(jqXHR) {
    var error = '';
    if (jqXHR.status === 404) {
      error = 'Project was not found, please verify your credentials';
    }

    if (jqXHR.status === 401) {
      error = 'Wrong username or password';
    }

    Backbone.Radio.channel('notification').trigger('alert', {
      message: error,
      type:  'error',
    });
  }
}
