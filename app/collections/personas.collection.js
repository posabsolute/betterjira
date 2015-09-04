import Backbone from 'backbone';
import Persona from '../models/persona.model';
import defaultPersonas from './default.personas';
/** 
 * @class Personas
 */
export default class Personas extends Backbone.Collection {
  initialize(){
    // setup configs for the dropdown helper
    this.showDropdownText = "As a";
    this.showDropdownRegEx = /::P/g;
    this.showDropdownKeys = "ctrl+p";

    this.getPersonas();
  }
  model(){ return Persona; }
  defaultPersonas(){ 
    this.set(defaultPersonas);
  }

  getPersonas(){

  }
}
