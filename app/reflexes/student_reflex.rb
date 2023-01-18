# frozen_string_literal: true

class StudentReflex < ApplicationReflex
  # Add Reflex methods in this file.
  #
  # All Reflex instances include CableReady::Broadcaster and expose the following properties:
  #
  #   - connection  - the ActionCable connection
  #   - channel     - the ActionCable channel
  #   - request     - an ActionDispatch::Request proxy for the socket connection
  #   - session     - the ActionDispatch::Session store for the current visitor
  #   - flash       - the ActionDispatch::Flash::FlashHash for the current request
  #   - url         - the URL of the page that triggered the reflex
  #   - params      - parameters from the element's closest form (if any)
  #   - element     - a Hash like object that represents the HTML element that triggered the reflex
  #     - signed    - use a signed Global ID to map dataset attribute to a model eg. element.signed[:foo]
  #     - unsigned  - use an unsigned Global ID to map dataset attribute to a model  eg. element.unsigned[:foo]
  #   - cable_ready - a special cable_ready that can broadcast to the current visitor (no brackets needed)
  #   - reflex_id   - a UUIDv4 that uniquely identies each Reflex
  #   - tab_id      - a UUIDv4 that uniquely identifies the browser tab
  #
  # Example:
  #
  #   before_reflex do
  #     # throw :abort # this will prevent the Reflex from continuing
  #     # learn more about callbacks at https://docs.stimulusreflex.com/rtfm/lifecycle
  #   end
  #
  #   def example(argument=true)
  #     # Your logic here...
  #     # Any declared instance variables will be made available to the Rails controller and view.
  #   end
  #
  # Learn more at: https://docs.stimulusreflex.com/rtfm/reflex-classes

  def create(params)
    # binding.pry
    @student = Student.new(name: params[:name], email: params[:email])
    @student.save
  end

  def destroy
    @student = Student.find(element.dataset["reflex_id"].to_i)
    @student.destroy
  end

  def edit
    @student = Student.find(element.dataset["reflex_id"].to_i)
    morph "#reflex_form_id", render(partial: "reflex_form", locals: { student: @student })
  end

  def update(params)
    @student = Student.find(params["reflex_id"].to_i)
    @student.update(name: params[:name],email: params[:email])
  end
  
end