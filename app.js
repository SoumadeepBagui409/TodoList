// marking li todo as compelted
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})

// creating new todo
$('input[type="text"]').keypress(function (event){
    if(event.which===13){
        var todotext = $(this).val();
         console.log(todotext);
         const todo = `<li><span><i class="fas fa-trash-alt"></i></span>${todotext}</li>`;
         $('ul').append(todo);
         $(this).val("");
    }
})

// removing todo

$('ul').on('click','i',  function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).parent().remove();
    })
    event.stopPropagation(); // to prevent event bubling
})

// adding drop down/ up using fadeToggle

$('#sign').on('click',function(){
    $('input[type="text"]').fadeToggle(500);
})