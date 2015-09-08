import Backbone from 'backbone';
import Persona from '../models/persona.model';
import defaultPersonas from './studs/default.personas';
import {model} from '../mixins/backbone-props';
/**
 * @class Personas
 */
@model(Persona)
export default class Personas extends Backbone.Collection {
  initialize() {
    // setup configs for the dropdown helper
    this.showDropdownText = 'As a';
    this.showDropdownRegEx = /::P/g;
    this.showDropdownKeys = 'ctrl+p';

    this.setDefaults();
  }

  setDefaults() {
    this.set(defaultPersonas, {parse: true});
  }

  getPersonas() {

  }
}
