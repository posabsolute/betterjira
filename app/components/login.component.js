import Backbone from 'backbone';
import serializeObject from 'serializeObject';
import Loader from './loader.component';
import {template, components} from '../mixins/backbone-props';

/**
 * The login form generally sit in the sidebar
 * data is saved in the user model
 * @class LoginForm
 */
@template('login.template.html')
@components({'Loader' : Loader})
export default class LoginForm extends Backbone.View {
  /**
   * Basic view setup
   * @param {object} userData - user model data, used to prefill the form
   */
  initialize(userData) {
    this.user = data.user;
  }
  /**
   * Submig login form
   */
  @on('click .btn-jira-connect')
  submitForm(e) {
    e && e.preventDefault();
    this.save();
  }
  /**
   * Serialize form
   * @param {object} e - submit event data
   */
  @on('submit .authForm')
  save(e) {
    e && e.preventDefault();
    var data = this.$('.authForm').serializeObject();
    this.testConnection(data);
  }
  /**
   * Test data with jira api
   * @param {object} e - submit event data
   */
  testConnection(data) {
    var userConnect = this.user.testConnection(data);

    this.progressBar.show();

    userConnect.done(() => {
      this.progressBar.success();
      this.loadSidebar();
      this.user.save(data);
      this.hide();

      Backbone.Radio.channel('notification').trigger('alert', {
        message: 'Your Jira account has been connected',
        type:  'success',
      });

    }).always(() => {
      this.progressBar.hide();
    });
  }
  /**
   * hide login form & show sidebar
   */
  hide() {
    Backbone.Radio.channel('sidebar').trigger('hide');
    window.setTimeout(()=> {
      this.$el.addClass('jira-hidden');
      Backbone.Radio.channel('sidebar').trigger('show');
    }, 200);
  }
}
