import _ from 'underscore';
import Backbone from 'backbone';
import LoginForm from './login.component';
import {tagName, template, components, on, radio} from '../mixins/backbone-props';

const width = {
  sidebarSmall: 220,
  sidebarFormConnection: 400,
};

/**
 * The sidebar sits outside of the browser view & can be shown by using the chrome extention button or using ctrl-q
 * Contains menu & login form
 * @class SidebarComponent
 */
@tagName('sidebar')
@template('components/sidebar.component.html')
@components({'LoginForm': LoginForm}) // Components defined here can be auto-loaded when this view is rendered
export default class SidebarComponent extends Backbone.View {
  /**
   * Basic view setup
   * @param {object} user - user model, used to know if we need to show the menu or the login form
   */
  initialize(user) {
    this.user = user;
  }
  /**
   * Show sidebar from the left, also verify if the user is connected
   */
  @radio('sidebar', 'show')
  show() {
    if (this.user.isConnected()) {
      this.showMenu();
    }else {
      this.showLoginForm();
    }
  }
  /**
   * Show menu, hide login form
   */
  showMenu() {
    this.$('jira-sidebar__menu').removeClass('jira-hidden');
    this.animate('in', width.sidebarSmall);
  }
  /**
   * Initialize login form
   */
  showLoginForm() {
    this.$('jira-sidebar__menu').addClass('jira-hidden');
    this.$('jira-sidebar__container').removeClass('jira-hidden');

    var userData = this.user.toJSON();
    this.LoginForm.renderHtml(userData);
    this.animate('in', width.sidebarFormConnection);
  }
  /**
   * Handle sidebar animations
   * @param {string} type - should we animate the sidebar (in | out)
   * @param {number} width - you can define a spefic width for the sidebar, used by login form.
   */
  animate(type, width) {
    if (type === 'in') {
      this.$el
        .css({
          'margin-left': -width,
          width: width,
        })
        .removeClass('hidden')
        .animate({'margin-left':0}, 200);
    }else {
      this.$el
        .animate({
          'margin-left':  -this.$el.outerWidth(),
        }, 200)
        .addClass('hidden');
    }
  }
  /**
   * hide sidebar
   */
  @on('click jira-close-link')
  @radio('sidebar', 'hide')
  hide() {
    this.animate('out');
  }
}

