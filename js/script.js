$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $("#jsForm");
    var fieldaArea = $("#jsFields");
    var addSnglLine = $("#jsAddSnglLine");
    var addTextArea = $("#jsAddTextArea");
    var addRadioList = $("#jsAddRadioList");
  
    var x = 0;
    
//silgle line
    $(addSnglLine).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(fieldaArea).append($('<div class="input-group mb-3" id="fld"><input type="text" class="form-control" placeholder="Field ' + x + '" aria-label="Field ' + x + '" aria-describedby="basic - addon2"><div class="input-group-append"><button class="btn btn-outline-secondary" id="delete" type="button">Delete</button></div></div >').hide().fadeIn(300));
        } else {
            alert('You Reached the limits')
        }
    });
//text area
    $(addTextArea).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(fieldaArea).append('<div class="input-group" id="fld"><div class="input-group-prepend"><span class="input-group-text">Field ' + x + '</span></div><textarea class="form-control" aria-label="With textarea"></textarea><button class="btn btn-red btn-flat delete" id="delete">Delete</button></div>');
        } else {
            alert('You Reached the limits')
        }
    });
// //radio list


//delete
    $(wrapper).on("click", "#delete", function (e) {
        e.preventDefault(); 
        $(this).closest('#fld').fadeOut(300, function(){$(this).remove()}); 
        x--;
    })
});

