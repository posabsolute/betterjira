import Backbone from 'backbone';
import caretUtil from 'caret';
import rangeUtil from 'timdown/rangyinputs';
import {tagName, on, template} from '../mixins/backbone-props';
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
@template('components/dropdown-helper.template.html')
export default class DropdownHelperComponent extends Backbone.View {
  /**
   * Setup input events and collections
   */
  initialize(options) {
    this.parent = options.parent;
    var inputID = this.$el.data('input');
    this.$input = this.parent.$(inputID);

    this.collection = new collections[this.$el.data('collection')]();
    this.renderHtml();
    this.inputListener();
  }
  /**
   * Show the notification header
   */
  show(data) {
    this.$el.css('display', 'block');
    this.renderHtml(data);
  }
  /**
   * Setup event to listen to input text change
   */
  inputListener() {
    this.$input.on('change keyup paste', ()=> {
      this.autoShow();
    });

  }
  /**
   * Verfy conditions for showing the dropdown
   * conditions are set by the collection type
   */
  autoShow() {
    var writtenText = this.$input.val();
    var caretPos = this.$input.getCaretPosition();

    // verify if we are writting a new word
    this.verifyNewWord(writtenText, caretPos);

    // conditions that shows dropdown
    this.verifySymbol(writtenText, caretPos);
    this.verifyBeforeText(writtenText, caretPos);

    // show dropdown
    if (this.active) {
      this.showDropdown(writtenText, caretPos);
    }
  }
  /**
   * Verify that the user is moving to a new word, deactive dropdown
   * @param  {string} writtenText full input text
   * @param  {number} caretPos    user current position in input
   */
  verifyNewWord(writtenText, caretPos) {
    if (this.active && !this.getCurrentWrittenWord(writtenText, caretPos)) {
      this.symbolMode && this.removeSymbols(writtenText, caretPos);
      this.hide();
      this.active = false;
      this.symbolMode = false;
    }
  }
  /**
   * Verify text before caret match dropdown before text condition
   * @param  {string} writtenText full input text
   * @param  {number} caretPos    user current position in input
   */
  verifyBeforeText(text, caretPos) {
    var textLength = this.collection.showDropdownText.length;
    var textBeforeCaret = text.slice(caretPos - textLength, caretPos);

    if (textBeforeCaret === this.collection.showDropdownText) {
      this.active = true;
    }
  }
  /**
   * Verify currently being written word first letters match dropdown symbol condition
   * @param  {string} writtenText full input text
   * @param  {number} caretPos    user current position in input
   */
  verifySymbol(writtenText, caretPos) {
    var currentWord = this.getCurrentWrittenWord(writtenText, caretPos, true);
    var firstLetters = currentWord.slice(0, this.collection.showDropdownSymbol.length);

    if (firstLetters === this.collection.showDropdownSymbol) {
      this.active = true;
      this.symbolMode = true;
    }
  }
  /**
   * get last written word
   * @param  {string} text full input text
   * @param  {number} caretPos    user current position in input
   */
  getLastWrittenWord(text, caretPos) {
    var beforeText = text.slice(0, caretPos);
    var lastWord = beforeText.split(' ')[beforeText.length - 2];

    return lastWord;
  }
  /**
   * get currently being written word
   * @param  {string} text full input text
   * @param  {number} caretPos user current position in input
   * @param  {bool} withSymbols should return alphanumeric
   */
  getCurrentWrittenWord(text, caretPos, withSymbols) {
    var beforeText = text.slice(0, caretPos);
    var currentWord = beforeText.split(' ').pop();
    console.log(currentWord.replace(/\W/g, ''))
    return (withSymbols) ? currentWord : currentWord.replace(/\W/g, '');
  }
  /**
   * Remove symbol when user change to new word
   * @param  {string} text full input text
   * @param  {number} caretPos user current position in input
   */
  removeSymbols(writtenText, caretPos) {
    var lastWord = this.getLastWrittenWord(writtenText, caretPos);
  }
  /**
   * Show dropdown with filtered collection
   * @param  {string} text full input text
   * @param  {number} caretPos user current position in input
   */
  showDropdown(text, caretPos) {
    var filterText = this.getCurrentWrittenWord(text, caretPos);
    this.show({
      collection: this.collection.search(filterText).toJSON(),
    });
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
    this.$el.css('display', 'none');
  }
}
