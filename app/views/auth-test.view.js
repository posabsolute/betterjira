import ModalComponent from '../components/modal/modal-component';
import Router from '../router';

export default class AuthtestconnectionView extends ModalComponent {
    className() { return 'jira-test-connection'; }

    constructor(...rest) {
        super(...rest);
        this.template = "test-connection.template.html";
    }

    initialize(user){
        this.user = user;
        super.initialize.apply(this);
    }
    
    render() {
        this.$el.html(nunjucks.render(this.template));
        return this;
    }

    test(callback) {
        var resp = this.user.testConnection(),
            self = this;
        resp.done( function(){
            self.$(".waitConnection, #loader-wrapper").css("display","none");
            self.$(".showConnected").css("display","block").animate({opacity:1});
            callback && $(document).trigger(callback);
        }).fail(function(){
            self.$(".waitConnection, #loader-wrapper").css("display","none");
            self.$(".showError").css("display","block").animate({opacity:1});
            setTimeout(function(){Router.callAuthView();},3000);
        });
    }

}

