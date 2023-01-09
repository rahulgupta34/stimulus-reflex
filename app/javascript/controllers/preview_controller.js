import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Preview Reflex.
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

  static targets = ["loading","textValue","btn"]

  connect () {
    super.connect()
    // add your code here, if applicable
  }

  live_previewJS(event){
    // console.log();
    this.stimulate("Preview#live_preview",event.target.value)
  }

  typing(){
    this.loadingTarget.classList.add("spinner-border")
    this.loadingTarget.classList.add("text-primary")
  }

  typingEnd(){
    this.loadingTarget.classList.remove("spinner-border")
    this.loadingTarget.classList.remove("text-primary")
  }



  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="preview" to your markup alongside
   * data-reflex="Preview#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Preview#dance" data-controller="preview">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Preview#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  // beforeLivePreview(element, reflex, noop, reflexId) {
  //  console.log("before live_preview", element, reflex, reflexId)
  // }

  // livePreviewSuccess(element, reflex, noop, reflexId) {
  //   console.log("live_preview success", element, reflex, reflexId)
  // }

  // livePreviewError(element, reflex, error, reflexId) {
  //   console.error("live_preview error", element, reflex, error, reflexId)
  // }

  // livePreviewHalted(element, reflex, noop, reflexId) {
  //   console.warn("live_preview halted", element, reflex, reflexId)
  // }

  // afterLivePreview(element, reflex, noop, reflexId) {
  //   console.log("after live_preview", element, reflex, reflexId)
  // }

  // finalizeLivePreview(element, reflex, noop, reflexId) {
  //   console.log("finalize live_preview", element, reflex, reflexId)
  // }
}
