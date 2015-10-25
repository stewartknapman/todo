class TasksController < ApplicationController

  def index
    @new_task = Task.new
    @tasks = Task.all
  end

  def create
  end

  def update
  end

  def destroy
  end

end
