import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Student Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  /*
   * Regular Stimulus lifecycle methods
   * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
   *
   * If you intend to use this controller as a regular stimulus controller as well,
   * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
   *
   * Important:
   * By default, StimulusReflex overrides the -connect- method so make sure you
   * call super if you intend to do anything else when this controller connects.
  */

  static targets = [ "name","email", "edit_name", "edit_email" ]

  connect () {
    super.connect()
    // add your code here, if applicable
  }

  create(event){
    let textValues = { name: this.nameTarget.value, email: this.emailTarget.value }
    console.log(textValues);
    this.stimulate("Student#create",textValues)
  }

  update(event){
    let updateTextValues = {reflex_id: event.target.dataset.reflex_id, name: this.edit_nameTarget.value, email: this.edit_emailTarget.value }
    console.log(event.target.dataset.reflex_id);
    this.stimulate("Student#update",updateTextValues)
  }

  createSuccess(){
    this.nameTarget.value = ""
    this.emailTarget.value = ""
  }

  updateSuccess(){
    this.edit_nameTarget.value = ""
    this.edit_emailTarget.value = ""
  }

  
  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="student" to your markup alongside
   * data-reflex="Student#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Student#dance" data-controller="student">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Student#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  // Assuming you create a "Student#dance" action in your Reflex class
  // you'll be able to use the following lifecycle methods:

  // beforeDance(element, reflex, noop, reflexId) {
  //  element.innerText = 'Putting dance shoes on...'
  // }

  // danceSuccess(element, reflex, noop, reflexId) {
  //   element.innerText = '\nDanced like no one was watching! Was someone watching?'
  // }

  // danceError(element, reflex, error, reflexId) {
  //   console.error('danceError', error);
  //   element.innerText = "\nCouldn\'t dance!"
  // }

  // afterDance(element, reflex, noop, reflexId) {
  //   element.innerText = '\nWhatever that was, it\'s over now.'
  // }

  // finalizeDance(element, reflex, noop, reflexId) {
  //   element.innerText = '\nNow, the cleanup can begin!'
  // }
}
