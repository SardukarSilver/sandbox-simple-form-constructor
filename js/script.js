$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $("#jsForm");
    var fieldArea = $("#jsFields");
    var addSnglLine = $("#jsAddSnglLine");
    var addTextArea = $("#jsAddTextArea");
    var addRadioList = $("#jsAddRadioList");
  
    var x = 0;
    
//silgle line
    $(addSnglLine).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(fieldArea).append($('\
            <div class="input-group mb-3" id="fld">\
                <input type="text" class="form-control" placeholder="Field ' + x + '" aria-label="Field ' + x + '" aria-describedby="basic - addon2">\
                <div class="input-group-append">\
                    <button class="btn btn-outline-secondary" id="delete" type="button">Delete</button>\
                </div>\
            </div>').hide().fadeIn(300));
        } else {
            alert('You Reached the limits')
        }
    });

//text area
    $(addTextArea).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(fieldArea).append('\
            <div class="input-group mb-3" id="fld">\
                <div class="input-group-prepend">\
                    <span class="input-group-text">Field ' + x + '</span>\
                </div>\
                <textarea class="form-control" aria-label="With textarea"></textarea>\
                <button class="btn btn-outline-secondary" id="delete">Delete</button>\
            </div>');
        } else {
            alert('You Reached the limits')
        }
    });

//radio list
    $(addRadioList).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(fieldArea).append('\
            <div id="jsRadioGroup">\
                <div class= "input-group mb-3" id="jsRadioFIeld">\
                    <div class="input-group-prepend">\
                        <div class="input-group-text">\
                            <input type="radio" aria-label="Radio button for following text input" name="rform">\
                        </div>\
                    </div>\
                    <input type="text" class="form-control" aria-label="Text input with radio button">\
                        <div class="input-group-append">\
                            <button class="btn btn-outline-secondary" type="button" id="jsAddRadioField">\
                                <i class="fa fa-plus-circle"></i>\
                            </button>\
                            <button class="btn btn-outline-secondary" type="button" id="deleteRadio">\
                                <i class="fa fa-trash-alt"></i>\
                            </button>\
                        </div>\
                </div>\
            </div>');
        } else {
            alert('You Reached the limits')
        }
    });

//delete radio field
    $(wrapper).on("click", "#deleteRadio", function (e) {
        e.preventDefault();
        $(this).closest('#jsRadioFIeld').fadeOut(300, () => { $(this).remove() });
        x--;
    })



//delete
    $(wrapper).on("click", "#delete", function (e) {
        e.preventDefault(); 
        $(this).closest('#fld').fadeOut(300, () => {$(this).remove()}); 
        x--;
    })
});

