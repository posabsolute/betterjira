import _ from 'underscore';
import Backbone from 'backbone';
import hotkeys from 'hotkeys';
import AddStory from './views/add-story.view';
import Sidebar from './components/sidebar.component';


export default class Router extends Backbone.Router {
	initialize (user) {
    this.user = user;
    $(document).on('keydown','shift+q', () => { this.showModal(AddUserStoryModal); })
               .on('keydown','shift+a', () => { this.showModal(AuthView); })
               .on('keydown','esc',     () => { this.hideModal(AuthView); });
    this.showSidebar();    
	}
  routes(){ return {
    "story":  "showStory",    // #help
  }}

	showSidebar (Modal){
    if(!this.sidebar){
      this.sidebar = new Sidebar(this.user);
      $("body").append(this.sidebar.renderHtml().$el);      
    }
    this.sidebar.show();
	}

  showStory(){
    this.showSidebar();
    this.addStory = new AddStory(this.user);
    $("body").append(this.addStory.renderHtml().$el);   
    this.addStory.show();
  }

	hideModal (){
    this.currentModal && this.currentModal.hide();		
	}
}
