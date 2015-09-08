import Backbone from 'backbone';
import {tagName, on} from '../mixins/backbone-props';
import Personas from '../collections/personas.collection';

const collections = {
  Personas: Personas,
};

/**
 * The dropdown component is use to help the user go faster in writting context.
 * For example show a list of personas when the user is about to write one
 *
 * @class DropdownHelperComponent
 */
export default class DropdownHelperComponent extends Backbone.View {
  /**
   *
   */
  initialize() {
    var inputID = this.$el.data('input');
    this.$input = jQuery(inputID);
    console.log(jQuery(inputID).attr("placeholder"));
    this.collection = new collections[this.$el.data('collection')]();
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
  inputListener() {
    this.$input.val("fucj");
    this.$input.on('change', ()=> {
      console.log("guck");
      this.autoShow();
    });

  }
  /**
   * Verfy conditions for showing the dropdown
   * conditions are set by the collection type
   */
  autoShow() {
    console.log('yup');
    var writtenText = this.$input.attr('value');
    if (writtenText === this.collection.showDropdownText) {
      this.show();
    }

    if (this.collection.showDropdownRegEx.test(writtenText)) {
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
