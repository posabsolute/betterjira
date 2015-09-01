import mixin from "universal-mixin";

const ContainerAnims = mixin({
  show : function(callback){
    this.$el
      .addClass("section-container")
      .css("margin-left", -800)
      .animate({
        "margin-left":220
      }, ()=>{
        callback && callback.call(this);
      })

  },
  hide : function(){
    this.$el
      .animate({
        "margin-left":-800
      }, ()=>{
        this.$el.css("display", "none");
        callback && callback.call(this);
      })
  }
});

export default ContainerAnims