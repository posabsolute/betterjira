"use strict";

import _ from 'underscore';
import Backbone from 'backbone';
import LoginForm from './login.component';

const width = {
  sidebarSmall : 220,
  sidebarFormConnection : 400
}
const availableComponents = {
  'LoginForm' : LoginForm
}

export default class SidebarComponent extends Backbone.View {

  tagName() {return 'jira-sidebar'; }

  constructor(...rest) {
    super(...rest);
    this.template = "sidebar.component.html";
  }

  initialize(user) {
  	this.user = user;
  }

  events(){
    return {
      "click jira-close-link" : "hide"
    }
  }

  render() {
    this.$el.html(nunjucks.render(this.template));
    this.initializeViewComponents(availableComponents);
  	return this;
  }

  show(){
    if(this.user.isConnected()){
      this.showMenu();
    }else{
      this.showLoginForm();
    }
  }

  showMenu(){
  	this.$("jira-sidebar__menu").removeClass("hidden");
  	this.animate("in", width.sidebarSmall);
  }

  showLoginForm(){
  	this.$("jira-sidebar__menu").addClass("hidden");
  	this.LoginForm.render();
  	this.animate("in", width.sidebarFormConnection);
  }

  animate(type, width){
    if(type === "in"){
      this.$el
        .css({
          "margin-left": -width,
          "width":width
        })
        .removeClass("hidden")
        .animate({"margin-left":0},200);     
    }else{
      this.$el
        .animate({
          "margin-left":  -this.$el.outerWidth(),
        },200)
        .addClass("hidden")
    }
  }


  hide() {
    this.animate("out");
  }
}


