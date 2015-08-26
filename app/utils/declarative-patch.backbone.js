import Backbone from 'backbone';

export function BackboneViewComponentsPatch() {

  // Initialize declarative view system.
  Backbone.View.prototype.initializeViewComponents = function(){
  	var $components = this.$("[component]");
      $components.each((i, el) => {
        var $el = $(el),
            name = $el.attr("name"),
            initVars = $el.attr("initVars") ? $el.attr("initVars").split(',') : "",
            component = $el.attr("component"),
            options  = {el: $el };

        if(initVars){
        	initVars.forEach((data)=>{
        		options[data] = this[data];
        	})
        }
        console.log($el)
        this[name] =  new this.availableComponents[component](options);
      }); 
  }
  // default view render function including component init
  Backbone.View.prototype.renderHtml = function(data){
    console.log(this.$el);
    console.log(this.template);
    this.$el.html(nunjucks.render(this.template, data));
    this.initializeViewComponents();
  	return this;
  };
}
