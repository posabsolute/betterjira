import Backbone from 'backbone';
import AuthView from '../views/auth.view';

export default class SidebarComponent extends Backbone.View {

  tagName() {return 'jira-sidebar'; }

  constructor(...rest) {
    super(...rest);
    this.template = "sidebar.component.html";
  }

  initialize(user) {
  	this.user = user;
  }
  render() {
    this.$el.html(nunjucks.render(this.template))
  	return this;
  }

  show(){
    if(this.user.isConnected()){
      this.showMenu();
    }else{
      this.showConnectionForm();
    }
  }

  showMenu(){
  	this.$("jira-sidebar__menu").removeClass("hidden");
  	this.animateIn(200);
  }

  showConnectionForm(){
  	this.$("jira-sidebar__menu").addClass("hidden");
  	var connexionForm =  new AuthView();
  	this.$("jira-sidebar__menu").removeClass("hidden").append(connexionForm.render().$el);
  	this.animateIn(400);
  }

  animateIn(width){
  	this.$el
  		.css({
  			"margin-left": -width,
  			"width":width
  		})
  		.removeClass("hidden")
  		.animate({"margin-left":0},200);
  }


  hide() {
    this.$el.animate({ opacity:0 }, 200);
  }
}


