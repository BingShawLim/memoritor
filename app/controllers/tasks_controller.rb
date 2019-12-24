class TasksController < ApplicationController
  def new
    @task = Task.new
  end 

  def index
    render json: Task.all
  end
end
