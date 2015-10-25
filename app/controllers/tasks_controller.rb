class TasksController < ApplicationController

  def index
    @new_task = Task.new
    @tasks = Task.all
    @incomplete = @tasks.where complete: false
  end

  def create
    Task.create task_params
    redirect_to :root
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
    redirect_to :root
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to :root
  end
  
  private
  
  def task_params
    params.require(:task).permit(:title, :complete)
  end

end
