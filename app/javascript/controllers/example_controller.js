import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Example Reflex.
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

  connect () {
    super.connect()
    // add your code here, if applicable
    console.log("this is exampke js conect action");
  }

  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="example" to your markup alongside
   * data-reflex="Example#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Example#dance" data-controller="example">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Example#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  beforeReflex(element,reflex){
   console.log(element);
  //  element.classList.add("text-success")
  //  element.innerHTML = "Rahul Gupta"
  }

  reflexSuccess(element){
    if(element.innerHTML=="Eat"){
      element.innerHTML = "masticate"
    }else{
      element.innerHTML = "defecate"
    }
    element.classList.add("text-success")
  }

  // beforeMasticate(element, reflex, noop, reflexId) {
  //  console.log("before masticate", element, reflex, reflexId)
  // }

  // masticateSuccess(element, reflex, noop, reflexId) {
  //   console.log("masticate success", element, reflex, reflexId)
  // }

  // masticateError(element, reflex, error, reflexId) {
  //   console.error("masticate error", element, reflex, error, reflexId)
  // }

  // masticateHalted(element, reflex, noop, reflexId) {
  //   console.warn("masticate halted", element, reflex, reflexId)
  // }

  // afterMasticate(element, reflex, noop, reflexId) {
  //   console.log("after masticate", element, reflex, reflexId)
  // }

  // finalizeMasticate(element, reflex, noop, reflexId) {
  //   console.log("finalize masticate", element, reflex, reflexId)
  // }

  // beforeDefecate(element, reflex, noop, reflexId) {
  //  console.log("before defecate", element, reflex, reflexId)
  // }

  // defecateSuccess(element, reflex, noop, reflexId) {
  //   console.log("defecate success", element, reflex, reflexId)
  // }

  // defecateError(element, reflex, error, reflexId) {
  //   console.error("defecate error", element, reflex, error, reflexId)
  // }

  // defecateHalted(element, reflex, noop, reflexId) {
  //   console.warn("defecate halted", element, reflex, reflexId)
  // }

  // afterDefecate(element, reflex, noop, reflexId) {
  //   console.log("after defecate", element, reflex, reflexId)
  // }

  // finalizeDefecate(element, reflex, noop, reflexId) {
  //   console.log("finalize defecate", element, reflex, reflexId)
  // }
}
