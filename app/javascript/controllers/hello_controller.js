import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Hello Reflex.
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

  static targets = ["focus"]

  connect () {
    super.connect()
    // add your code here, if applicable
    console.log("Hello, this is rahul gupta");
  }

  beforeReflex(element,reflex,noop){
    // debugger
    console.log(element);
  }

  submit(e){
    e.preventDefault()
    this.stimulate("Hello#count").then(() => {
      this.element.reset()
      // console.log();
      this.focusTarget.focus()
    })
  }
  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="hello" to your markup alongside
   * data-reflex="Hello#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Hello#dance" data-controller="hello">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Hello#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  // beforeCount(element, reflex, noop, reflexId) {
  //  console.log("before count", element, reflex, reflexId)
  // }

  // countSuccess(element, reflex, noop, reflexId) {
  //   console.log("count success", element, reflex, reflexId)
  // }

  // countError(element, reflex, error, reflexId) {
  //   console.error("count error", element, reflex, error, reflexId)
  // }

  // countHalted(element, reflex, noop, reflexId) {
  //   console.warn("count halted", element, reflex, reflexId)
  // }

  // afterCount(element, reflex, noop, reflexId) {
  //   console.log("after count", element, reflex, reflexId)
  // }

  // finalizeCount(element, reflex, noop, reflexId) {
  //   console.log("finalize count", element, reflex, reflexId)
  // }
}
