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

  initialize(user) {
  	this.user = user;
    this.template = "sidebar.component.html";
    this.availableComponents = availableComponents;

    this.loadRadioEvents()
  }

  loadRadioEvents(){
    var notifChannel = Backbone.Radio.channel('sidebar');

    notifChannel.on('hide', (data) => {
      this.hide();
    });
    notifChannel.on('show', (data) => {
      this.show();
    });
  }

  events(){ return {
    "click jira-close-link" : "hide"
  }}

  show(){
    if(this.user.isConnected()){
      this.showMenu();
    }else{
      this.showLoginForm();
    }
  }

  showMenu(){
  	this.$("jira-sidebar__menu").removeClass("jira-hidden");
  	this.animate("in", width.sidebarSmall);
  }

  showLoginForm(){
  	this.$("jira-sidebar__menu").addClass("jira-hidden");
    this.$("jira-sidebar__container").removeClass("jira-hidden");

    var data = this.user.toJSON();
  	this.LoginForm.renderHtml(data);
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


