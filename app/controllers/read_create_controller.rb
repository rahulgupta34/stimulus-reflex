class ReadCreateController < ApplicationController
  def index
    @read_create = ReadCreate.all.order(created_at: :desc)
  end

  def new
    # @read_create = ReadCreate.new
  end

  def create
  end
end
