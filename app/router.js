import _ from 'underscore';
import Backbone from 'backbone';
import hotkeys from 'hotkeys';
import AddUserStoryModal from './views/add-story.view';
import Sidebar from './components/sidebar.component';


export default class Router extends Backbone.Router {
  	initialize (user) {
      this.user = user;
      $(document).on('keydown','shift+q', () => { this.showModal(AddUserStoryModal); })
                 .on('keydown','shift+a', () => { this.showModal(AuthView); })
                 .on('keydown','esc',     () => { this.hideModal(AuthView); });
      this.showSidebar();    
  	}

  	callAuthView (){
  		this.showModal(AuthView);
  	}

  	showSidebar (Modal){
      this.sidebar = new Sidebar(this.user);
      $("body").append(this.sidebar.render().$el);
      this.sidebar.show();
  	}

  	hideModal (){
       	this.currentModal && this.currentModal.hide();		
  	}
}
