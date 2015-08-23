import Backbone from 'backbone';
import serializeObject from 'serializeObject';
import Loader from '../components/loader.component';


export default class LoginForm extends Backbone.View {
    constructor(...rest) {
        super(...rest);
        this.template = "auth.template.html";
    }

    events(){
        return {
            "submit .authForm" : "save",
            "click .btn-jira-connect" : "submitForm"  
        }
    }

    initialize(data) {
        this.user = data.user;
    }

    render() {
        var data = this.user.toJSON();
        this.$el.html(nunjucks.render(this.template,data));
        this.$userForm = this.$el.find(".authForm");
        return this;
    }

    submitForm(e) {
        e && e.preventDefault();
        this.save();
    }

    save(e) {
        e && e.preventDefault();
        var data =  this.$userForm.serializeObject();
        this.user.set(data).save();
        this.testConnection();
    }

    showLoggedOptions() {

    }

    testConnection() {
        var userConnect = this.user.testConnection();

        this.progressBar.show();

        userConnect.done(() => { 
            this.progressBar.success();
            this.showLoggedOptions();
            
        }).always(() => {
            this.progressBar.hide();
        });
    }
}