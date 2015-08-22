import serializeObject from 'serializeObject';
import ModalComponent from '../components/modal/modal-component';
import Loader from '../components/loader.component';


export default class AuthView extends ModalComponent {
    constructor(...rest) {
        super(...rest);
        this.template = "auth.template.html";
    }

    initialize(user) {
        this.events = {
            "submit .authForm" : "save",
            "click .btn-jira-connect" : "submitForm"                  
        };
        this.user = user;
        console.log(this);
        super.initialize.apply(this);
    }

    render() {
        var data = this.user.toJSON();
        this.$el.html(nunjucks.render(this.template,data));
        this.progressBar = new Loader({el: this.$el.find('jira-progress') });
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