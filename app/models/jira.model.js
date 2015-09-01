
import Backbone from 'backbone';

export default class JiraModel extends Backbone.Model {
  initialize() {
    this.fetch();
    this.ajaxAuthSetup();
  }

  validate(attrs) {

  }

  isConnected(){
    return localStorage.getItem('jiraUser');
  }

  fetch() {
    this.set(JSON.parse(localStorage.getItem('jiraUser')));
  }

  save(user) {
    this.set(user);
    localStorage.setItem('jiraUser', JSON.stringify(user));
  }

  ajaxAuthSetup(data = {}) {
    $.ajaxSetup({
      crossDomain: true,
      beforeSend: (xhr) => {
        xhr.setRequestHeader(
            'Authorization',
            'Basic ' + btoa(data.username + ':' + data.password)
        );
      }
    });
  }

  destroy() {
    localStorage.removeItem('jiraUser');
  }

  testConnection(formData = {}) {
    var content = {
      url : formData.url || this.get('url'),
      projectid : formData.projectid || this.get('projectid'),
      username : formData.username || this.get('username'),
      password : formData.password || this.get('password')
    }

    this.ajaxAuthSetup(content);
    return $.ajax({
      url: content.url + '/rest/api/2/project/' + content.projectid
    }).done((user) => {

    })
    .fail(( jqXHR, textStatus, errorThrown ) => {
      this.verifyError(jqXHR);
    });
  }

  verifyError(jqXHR) {
    var error = '';
    if(jqXHR.status === 404){
      error = "Project was not found, please verify your credentials";
    }
    if(jqXHR.status === 401){
      error = "Wrong username or password";
    }
    Backbone.Radio.channel('notification').trigger('alert', {
      message: error,
      type:  'error'
    });
  }
}
