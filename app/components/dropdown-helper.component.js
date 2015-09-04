import Backbone from 'backbone';
import {tagName} from '../mixins/backbone-props';

/** 
 * The dropdown component is use to help the user go faster in writting context.
 * For example show a list of personas when the user is about to write one
 * 
 * @class DropdownHelperComponent
 */
@tagName('dropdownHelper')
export default class DropdownHelperComponent extends Backbone.View {
  /** 
   * 
   */
  initialize() {
    this.inputID = this.$el.data("input");
    this.$input = $(inputID);
    this.setup && this.setup();
    this.collection = this.$el.data("personas");
    this.inputListener();
  }
  /** 
   * Show the notification header
   */
  show() {
    
  }
  /** 
   * Setup event to listen to input text change
   */
  inputListener(){
    var ChannelName = this.$input.attr("id");
    this.listenTo(Backbone.Radio, ChannelName= ":change", this.autoShow);

  }
  /** 
   * Verfy conditions for showing the dropdown
   * conditions are set by the collection type
   */
  autoShow(){
    var writtenText = this.$input.attr("value");
    if(writtenText === this.collection.showDropdownText ){
      this.show();
    }
    if(this.collection.showDropdownRegEx.test(writtenText)){
      this.show();
    }
  }
  /** 
   * Set dropdown selection in the input at the caret position, or selected text
   */
  setSelection(selection) {
    
  }
  /** 
   * Hide the notification header
   */
  hide() {
    this.$el.slideUp(200, () => {
      this.$el.css('display', 'none');
    });
  }
}
