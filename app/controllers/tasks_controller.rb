class TasksController < ApplicationController

  def index
    @new_task = Task.new
    @tasks = Task.all
    @incomplete = @tasks.where complete: false
  end

  def create
    @task = Task.create task_params
    flash[:notice] = "Your task &ldquo;#{@task.title}&rdquo; was created."
    redirect_to :root
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
    flash[:notice] = "Your task &ldquo;#{@task.title}&rdquo; was updated."
    redirect_to :root
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    flash[:notice] = "Your task &ldquo;#{@task.title}&rdquo; was removed."
    redirect_to :root
  end
  
  private
  
  def task_params
    params.require(:task).permit(:title, :complete)
  end

end
