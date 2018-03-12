$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $("#jsForm");
    var add_sngl_line = $(".add_sngl_line_field_btn");
    var add_text_area = $(".add_text_area_btn");
    var add_radio_list = $(".add_radio_list_btn");
  
    var x = 0;
    var radioQuery = 0;

//silgle line
    $(add_sngl_line).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append($('<div class="form-group" id="fld"><label for="Field ' + x + ' name">Field ' + x + ':</label><input type = "text" class= "form-control" id = "Field ' + x + ' name"><button class="btn btn-red btn-flat delete" id="delete">Delete</button></div>').hide().fadeIn(300));
        } else {
            alert('You Reached the limits')
        }
    });
//text area
    $(add_text_area).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div class="input-group" id="fld"><div class="input-group-prepend"><span class="input-group-text">Field ' + x + '</span></div><textarea class="form-control" aria-label="With textarea"></textarea><button class="btn btn-red btn-flat delete" id="delete">Delete</button></div>');
        } else {
            alert('You Reached the limits')
        }
    });
// //radio list
    $(add_radio_list).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            radioQuery++;
            $(wrapper).append('
            <div class="input-group" id="radioLst">
            <div class="input-group-prepend">
            <span class="input-group-text">Field ' + x + '</span>
            </div><textarea class="form-control" aria-label="With textarea">
            </textarea><a href="#" class="delete">Delete</a>
            </div>');
        }
        else {
            alert('You Reached the limits')
        }
    });


//delete
    $(wrapper).on("click", "#delete", function (e) {
        e.preventDefault(); 
        $(this).parent('#fld').fadeOut(300, function(){$(this).remove()}); x--;
    })
});

