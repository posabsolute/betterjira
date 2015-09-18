import _ from 'underscore';
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
    this.showDropdownText = 'As a ';
    this.showDropdownSymbol = '::';
    this.transformSymbol = false;
    this.showDropdownKeys = 'ctrl+p';

    this.setDefaults();
  }

  setDefaults() {
    this.set(defaultPersonas, {parse: true});
  }

  search(letters) {
    if (!letters) return this;
    var pattern = new RegExp(letters,'gi');
    var filtered = this.filter(function(data) {
      return pattern.test(data.get('archetype'));
    });

    return new Personas(filtered);
  }

  getPersonas() {

  }
}
