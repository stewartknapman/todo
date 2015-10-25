// When the 'show/hide completed' link is clicked we add the 'show' class to each of the completed tasks
$(document).on('click', '[data-completed-tasks]', function (e) {
  e.preventDefault();
  
  var $link = $(this);
  if ($link.data('completed-tasks') === 'hidden') {
    // update the link
    $link
      .data('completed-tasks', 'showing')
      .attr('data-completed-tasks', 'showing')
      .text('Hide completed');
      
    // add the class
    $('.task.complete').addClass('show');
    
  } else {
    // update the link
    $link
      .data('completed-tasks', 'hidden')
      .attr('data-completed-tasks', 'hidden')
      .text('Show completed');
      
    // remove the class
    $('.task.complete').removeClass('show');
  }
});

// Show/hide the tasks edit field
$(document).on('click', '[data-edit-task]', function (e) {
  e.preventDefault();
  
  var $link = $(this);
  if ($link.data('edit-task') === 'hidden') {
    // update the link
    $link
      .data('edit-task', 'showing')
      .attr('data-edit-task', 'showing')
      .text('cancel');
      
    // add the class
    $link.closest('.task').addClass('editing');
    
  } else {
    // update the link
    $link
      .data('edit-task', 'hidden')
      .attr('edit-task', 'hidden')
      .text('edit');
      
    var $task = $link.closest('.task')
      
    // remove the class
    $task.removeClass('editing');
    
    // set the edit field back to it's original value
    var task = $task.data('task');
    $task.find('[name="task[title]"]').val(task);
  }
});

// make the task submit when it is checked
$(document).on('click', 'input[type="checkbox"]', function () {
  $(this).closest('form').submit();
});

// On page load
$(function () {
  // If we have a flash message make it disappear
  var $flash = $('.flash');
  if ($flash.length > 0) {
    setTimeout(function () {
      $flash.fadeOut();
    }, 5000);
  }
});