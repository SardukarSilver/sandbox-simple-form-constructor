$(document).ready(function () {
    var maxFields = 10;
    var maxRadioFields = 10;
    var wrapper = $(".jsForm");
    var fieldArea = $(".jsFields");
    var addSnglLine = $(".jsAddSnglLine");
    var addTextArea = $(".jsAddTextArea");
    var addRadioList = $(".jsAddRadioList");
    var addRadioField = $(".jsFields").find(".jsAddRadioField");
  
    var x = 0;
    
//silgle line
    wrapper.on("click", ".jsAddSnglLine", function (e) {
        e.preventDefault();
        if (x < maxFields) {
            x++;
            $(fieldArea).append('\
            <div class="input-group mb-3 fld">\
                <input type="text" class="form-control" placeholder="Field ' + x + '" aria-label="Field ' + x + '" aria-describedby="basic - addon2">\
                <div class="input-group-append">\
                    <button class="btn btn-outline-secondary delete" type="button">Delete</button>\
                </div>\
            </div>');
        } else {
            alert('You Reached the limits')
        }
    });

//text area
    wrapper.on("click", ".jsAddTextArea", function (e) {
        e.preventDefault();
        if (x < maxFields) {
            x++;
            $(fieldArea).append('\
            <div class="input-group mb-3 fld">\
                <div class="input-group-prepend">\
                    <span class="input-group-text">Field ' + x + '</span>\
                </div>\
                <textarea class="form-control" aria-label="With textarea"></textarea>\
                <button class="btn btn-outline-secondary delete">Delete</button>\
            </div>');
        } else {
            alert('You Reached the limits')
        }
    });

//radio list
    wrapper.on("click", ".jsAddRadioList", function (e) {
        e.preventDefault();
        if (x < maxFields) {
            x++;
            $(fieldArea).append('\
            <div class="RadioList" data-name="rlst0'+x+'">\
                <div class= "input-group mb-3" >\
                <input type="text" class="form-control" placeholder="Field ' + x + '" aria-label="Field ' + x + '" aria-describedby="basic - addon2">\
            </div>\
                <div class= "input-group mb-3 jsRadioFIeld">\
                    <div class="input-group-prepend">\
                        <div class="input-group-text">\
                            <input type="radio" aria-label="Radio button for following text input" name="rlst0'+ x +'">\
                        </div>\
                    </div>\
                    <input type="text" class="form-control" aria-label="Text input with radio button">\
                        <div class="input-group-append">\
                            <button class="btn btn-outline-secondary jsAddRadioField" type="button">\
                                <i class="fa fa-plus-circle"></i>\
                            </button>\
                            <button class="btn btn-outline-secondary jsDeleteRadio" type="button">\
                                <i class="fa fa-trash-alt"></i>\
                            </button>\
                        </div>\
                </div>\
            </div>');}
    });

// add radio field
    wrapper.on("click", ".jsAddRadioField", function (e){
        e.preventDefault();
        var parent = $(this).closest(".RadioList");
        var inputName  = parent.attr("data-name");
        parent.append('\
                <div class= "input-group mb-3 jsRadioFIeld">\
                <div class="input-group-prepend">\
                    <div class="input-group-text">\
                        <input type="radio" aria-label="Radio button for following text input" name="'+inputName+'">\
                    </div>\
                </div>\
                <input type="text" class="form-control" aria-label="Text input with radio button">\
                    <div class="input-group-append">\
                        <button class="btn btn-outline-secondary jsAddRadioField" type="button">\
                            <i class="fa fa-plus-circle"></i>\
                        </button>\
                        <button class="btn btn-outline-secondary jsDeleteRadio" type="button">\
                            <i class="fa fa-trash-alt"></i>\
                        </button>\
                        </div>\
                    </div>');
    });


//delete radio field
    wrapper.on("click", ".jsDeleteRadio", function (e) {
        e.preventDefault();
        var radioFIeld = $(this).closest('.jsRadioFIeld');
        var radioList = $(this).closest('.RadioList');
        
        radioFIeld.remove();

        var num = radioList.find('.jsRadioFIeld').length;

        if (!num) {
            radioList.remove();
        }
    })



//delete
    wrapper.on("click", ".delete", function (e) {
        e.preventDefault(); 
        $(this).closest('.fld').remove(); 
        x--;
    })
});

