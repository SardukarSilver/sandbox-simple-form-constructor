function render (config) {
    const wrapper = $("#jsForm");
    const role = user;
    
    for (config.questions) {
        switch (config.questions[i].type) {
            case textField: 
                createInputFld(config.questions[i], wrapper);
                break;
            case radioGroup: 
                createRadioGrp(config.questions[i], wrapper);
                break;
        }
    }
}

function createRadioGrp () {
    
}


function createInputFld (config, wrapper) {
    $(wrapper).append($('<div class="form-group" id="fld"><label for="' + config.id + '">' + config.question + '</label><input type = "text" class= "form-control" id = "' + config.id + '"></div>').hide().fadeIn(300));
}

render(
    {
        "questions": [
            {
                "type": "textField",
                "question": "what is your name?",
                "placeholder": "insert decription",
                "default": ""
            },
            {
                "type": "radioGroup",
                "question": "what is your gender?",
                "placeholder": "insert decription",
                "default": "",
                "answers": [
                    {
                        "value": "male",
                        "disabled": false
                    },
                    {
                        "value": "female",
                        "disabled": false
                    },
                    {
                        "value": "robot",
                        "disabled": true
                    }
                ]
            }
        ]
    }
);

