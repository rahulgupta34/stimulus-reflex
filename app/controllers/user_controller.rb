class UserController < ApplicationController
  
  def index
    @students = Student.order(created_at: :desc)
  end

end
