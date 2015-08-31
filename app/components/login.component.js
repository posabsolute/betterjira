import Backbone from 'backbone';
import serializeObject from 'serializeObject';
import Loader from '../components/loader.component';

const availableComponents = {
  'Loader' : Loader
}

export default class LoginForm extends Backbone.View {

  events(){ return {
    "submit .authForm" : "save",
    "click .btn-jira-connect" : "submitForm"  
  }}

  initialize(data) {
    this.user = data.user;
    this.template = "login.template.html";
    this.availableComponents = availableComponents;
  }

  submitForm(e) {
    e && e.preventDefault();
    this.save();
  }

  save(e) {
    e && e.preventDefault();
    var data = this.$(".authForm").serializeObject();
    this.testConnection(data);
  }

  testConnection(data) {
    var userConnect = this.user.testConnection(data);

    this.progressBar.show();

    userConnect.done(() => { 
      this.progressBar.success();
      this.loadSidebar();
      this.user.save(data);
      Backbone.Radio.channel('notification').trigger('alert', {
        message: "Your Jira account has been connected",
        type:  'success'
      });

      this.hide();
        
    }).always(() => {
      this.progressBar.hide();
    });
  }

  hide(){
    Backbone.Radio.channel('sidebar').trigger('hide');
    window.setTimeout(()=>{
      this.$el.addClass('jira-hidden');
      Backbone.Radio.channel('sidebar').trigger('show');
    },200);
  }
}