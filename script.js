const containerDiv = document.createElement('div');
containerDiv.className = 'container text-center justify-content-md-center';
document.body.appendChild(containerDiv);

    const visibleContainerDiv = document.createElement('div');
    visibleContainerDiv.className = 'row border border-dark border-2 p-4 m-1 justify-content-evenly';
    containerDiv.appendChild(visibleContainerDiv);

        const headingElement = document.createElement('h1');
        headingElement.className = 'h6 lead mx-2 fs-4';
        headingElement.style.cssText = "font-family: 'Handlee', cursive;"
        headingElement.id = 'title';
        headingElement.innerText = 'Demographics';
        visibleContainerDiv.appendChild(headingElement);

        const paraElement = document.createElement('p');
        paraElement.className = 'lead mx-2 fw-normal';
        paraElement.id = 'description';
        paraElement.innerText = 'Please enter your data below';
        visibleContainerDiv.appendChild(paraElement);

        const formDiv = document.createElement('div');
        formDiv.className = "row border border-2 border-dark"
        visibleContainerDiv.appendChild(formDiv);

            const formElement = document.createElement('form');
            formElement.id = 'form'
            formDiv.appendChild(formElement)

                const firstNameDiv = document.createElement('div');
                firstNameDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(firstNameDiv)

                    const firstNameLabel = document.createElement('label');
                    firstNameLabel.for = 'firstName';
                    firstNameLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    firstNameLabel.innerText = 'First Name'
                    firstNameDiv.appendChild(firstNameLabel)

                    const firstNameInputDiv = document.createElement('div');
                    firstNameInputDiv.className = 'col-sm'
                    firstNameDiv.appendChild(firstNameInputDiv)

                        const firstNameInput = document.createElement('input')
                        firstNameInput.type = 'name';
                        firstNameInput.className = 'mx-2 form-control';
                        firstNameInput.id = 'first-name';
                        firstNameInput.placeholder = 'Enter First Name'
                        firstNameInput.setAttribute('required', '');
                        firstNameInputDiv.appendChild(firstNameInput);

                const lastNameDiv = document.createElement('div');
                lastNameDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(lastNameDiv)
        
                    const lastNameLabel = document.createElement('label');
                    lastNameLabel.for = 'lastName';
                    lastNameLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    lastNameLabel.innerText = 'Last Name'
                    lastNameDiv.appendChild(lastNameLabel)
        
                    const lastNameInputDiv = document.createElement('div');
                    lastNameInputDiv.className = 'col-sm'
                    lastNameDiv.appendChild(lastNameInputDiv)
        
                        const lastNameInput = document.createElement('input')
                        lastNameInput.type = 'name';
                        lastNameInput.className = 'mx-2 form-control';
                        lastNameInput.id = 'last-name';
                        lastNameInput.placeholder = 'Enter Last Name';
                        lastNameInput.setAttribute('required', '');
                        lastNameInputDiv.appendChild(lastNameInput);

                const emailDiv = document.createElement('div');
                emailDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(emailDiv)
        
                    const emailLabel = document.createElement('label');
                    emailLabel.for = 'email';
                    emailLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    emailLabel.innerText = 'Email'
                    emailDiv.appendChild(emailLabel)
        
                    const emailInputDiv = document.createElement('div');
                    emailInputDiv.className = 'col-sm'
                    emailDiv.appendChild(emailInputDiv)
        
                        const emailInput = document.createElement('input')
                        emailInput.type = 'email';
                        emailInput.className = 'mx-2 form-control';
                        emailInput.id = 'email';
                        emailInput.placeholder = 'abc@example.com';
                        emailInput.setAttribute('required', '');
                        emailInputDiv.appendChild(emailInput);

                const addressDiv = document.createElement('div');
                addressDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(addressDiv)
                
                    const addressLabel = document.createElement('label');
                    addressLabel.for = 'address';
                    addressLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    addressLabel.innerText = 'Address'
                    addressDiv.appendChild(addressLabel)
                
                    const addressInputDiv = document.createElement('div');
                    addressInputDiv.className = 'col-sm'
                    addressDiv.appendChild(addressInputDiv)
                
                        const addressInput = document.createElement('textarea')
                        addressInput.type = 'text';
                        addressInput.className = 'mx-2 form-control';
                        addressInput.id = 'address';
                        addressInput.placeholder = 'Provide complete address';
                        addressInput.setAttribute('required', '');
                        addressInputDiv.appendChild(addressInput);
                        
                const pincodeDiv = document.createElement('div');
                pincodeDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(pincodeDiv)
                        
                    const pincodeLabel = document.createElement('label');
                    pincodeLabel.for = 'pincode';
                    pincodeLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    pincodeLabel.innerText = 'Pincode'
                    pincodeDiv.appendChild(pincodeLabel)
                        
                    const pincodeInputDiv = document.createElement('div');
                    pincodeInputDiv.className = 'col-sm'
                    pincodeDiv.appendChild(pincodeInputDiv)
                        
                        const pincodeInput = document.createElement('input')
                        pincodeInput.type = 'text';
                        pincodeInput.className = 'mx-2 form-control';
                        pincodeInput.id = 'pincode';
                        pincodeInput.placeholder = 'Enter Pincode';
                        pincodeInput.setAttribute('required', '');
                        pincodeInputDiv.appendChild(pincodeInput);

                const foodPreferenceDiv = document.createElement('div');
                foodPreferenceDiv.className = 'row form-group mt-2 mb-3';
                formElement.appendChild(foodPreferenceDiv)   

                    const foodPreferenceLabel = document.createElement('label');
                    foodPreferenceLabel.for = 'foodPreference';
                    foodPreferenceLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    foodPreferenceLabel.innerText = 'Food Preference'
                    foodPreferenceDiv.appendChild(foodPreferenceLabel)

                    const checkBoxesDiv = document.createElement('div');
                    checkBoxesDiv.className = 'col-sm text-md-start mx-2'
                    foodPreferenceDiv.appendChild(checkBoxesDiv)

                        const riceCheckBoxDiv = document.createElement('div');
                        riceCheckBoxDiv.className = 'form-check form-check-inline';
                        checkBoxesDiv.appendChild(riceCheckBoxDiv)

                            const riceCheckBoxInput = document.createElement('input')
                            riceCheckBoxInput.className = 'form-check-input';
                            riceCheckBoxInput.type = 'checkbox';
                            riceCheckBoxInput.id = 'riceCheckBox';
                            riceCheckBoxInput.name = 'foodPreference';
                            riceCheckBoxInput.value = 'Rice';
                            riceCheckBoxDiv.appendChild(riceCheckBoxInput);

                            const riceCheckBoxLabel = document.createElement('label');
                            riceCheckBoxLabel.className = 'form-check-label';
                            riceCheckBoxLabel.for = 'riceCheckBox';
                            riceCheckBoxLabel.innerText = 'Rice';
                            riceCheckBoxDiv.appendChild(riceCheckBoxLabel)

                        const vegCurryCheckBoxDiv = document.createElement('div');
                        vegCurryCheckBoxDiv.className = 'form-check form-check-inline';
                        checkBoxesDiv.appendChild(vegCurryCheckBoxDiv)
    
                            const vegCurryCheckBoxInput = document.createElement('input')
                            vegCurryCheckBoxInput.className = 'form-check-input';
                            vegCurryCheckBoxInput.type = 'checkbox';
                            vegCurryCheckBoxInput.id = 'vegCurryCheckBox';
                            vegCurryCheckBoxInput.name = 'foodPreference';
                            vegCurryCheckBoxInput.value = 'Veg Curry';
                            vegCurryCheckBoxDiv.appendChild(vegCurryCheckBoxInput);
    
                            const vegCurryCheckBoxLabel = document.createElement('label');
                            vegCurryCheckBoxLabel.className = 'form-check-label';
                            vegCurryCheckBoxLabel.for = 'vegCurryCheckBox';
                            vegCurryCheckBoxLabel.innerText = 'Veg Curry';
                            vegCurryCheckBoxDiv.appendChild(vegCurryCheckBoxLabel)

                        const chickenCurryCheckBoxDiv = document.createElement('div');
                        chickenCurryCheckBoxDiv.className = 'form-check form-check-inline';
                        checkBoxesDiv.appendChild(chickenCurryCheckBoxDiv)
        
                            const chickenCurryCheckBoxInput = document.createElement('input')
                            chickenCurryCheckBoxInput.className = 'form-check-input';
                            chickenCurryCheckBoxInput.type = 'checkbox';
                            chickenCurryCheckBoxInput.id = 'chickenCurryCheckBox';
                            chickenCurryCheckBoxInput.name = 'foodPreference';
                            chickenCurryCheckBoxInput.value = 'Chicken Curry';
                            chickenCurryCheckBoxDiv.appendChild(chickenCurryCheckBoxInput);
        
                            const chickenCurryCheckBoxLabel = document.createElement('label');
                            chickenCurryCheckBoxLabel.className = 'form-check-label';
                            chickenCurryCheckBoxLabel.for = 'chickenCurryCheckBox';
                            chickenCurryCheckBoxLabel.innerText = 'Chicken Curry';
                            chickenCurryCheckBoxDiv.appendChild(chickenCurryCheckBoxLabel)

                        const muttonCurryCheckBoxDiv = document.createElement('div');
                        muttonCurryCheckBoxDiv.className = 'form-check form-check-inline';
                        checkBoxesDiv.appendChild(muttonCurryCheckBoxDiv)
            
                            const muttonCurryCheckBoxInput = document.createElement('input')
                            muttonCurryCheckBoxInput.className = 'form-check-input';
                            muttonCurryCheckBoxInput.type = 'checkbox';
                            muttonCurryCheckBoxInput.id = 'muttonCurryCheckBox';
                            muttonCurryCheckBoxInput.name = 'foodPreference';
                            muttonCurryCheckBoxInput.value = 'Mutton Curry';
                            muttonCurryCheckBoxDiv.appendChild(muttonCurryCheckBoxInput);
            
                            const muttonCurryCheckBoxLabel = document.createElement('label');
                            muttonCurryCheckBoxLabel.className = 'form-check-label';
                            muttonCurryCheckBoxLabel.for = 'muttonCurryCheckBox';
                            muttonCurryCheckBoxLabel.innerText = 'Mutton Curry';
                            muttonCurryCheckBoxDiv.appendChild(muttonCurryCheckBoxLabel)

                        const prawnCurryCheckBoxDiv = document.createElement('div');
                        prawnCurryCheckBoxDiv.className = 'form-check form-check-inline';
                        checkBoxesDiv.appendChild(prawnCurryCheckBoxDiv)
                
                            const prawnCurryCheckBoxInput = document.createElement('input')
                            prawnCurryCheckBoxInput.className = 'form-check-input';
                            prawnCurryCheckBoxInput.type = 'checkbox';
                            prawnCurryCheckBoxInput.id = 'prawnCurryCheckBox';
                            prawnCurryCheckBoxInput.name = 'foodPreference';
                            prawnCurryCheckBoxInput.value = 'Prawn Curry';
                            prawnCurryCheckBoxDiv.appendChild(prawnCurryCheckBoxInput);
                
                            const prawnCurryCheckBoxLabel = document.createElement('label');
                            prawnCurryCheckBoxLabel.className = 'form-check-label';
                            prawnCurryCheckBoxLabel.for = 'prawnCurryCheckBox';
                            prawnCurryCheckBoxLabel.innerText = 'Prawn Curry';
                            prawnCurryCheckBoxDiv.appendChild(prawnCurryCheckBoxLabel)

                const genderDiv = document.createElement('div');
                genderDiv.className = 'row form-group mt-2 mb-3';
                formElement.appendChild(genderDiv)

                    const genderLabel = document.createElement('label');
                    genderLabel.for = 'genderSelect';
                    genderLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    genderLabel.innerText = 'Gender'
                    genderDiv.appendChild(genderLabel)

                    const genderRadioButtonDiv = document.createElement('div');
                    genderRadioButtonDiv.className = 'col-sm text-md-start mx-2'
                    genderDiv.appendChild(genderRadioButtonDiv)

                        const maleRadioButtonDiv = document.createElement('div');
                        maleRadioButtonDiv.className = 'form-check form-check-inline';
                        genderRadioButtonDiv.appendChild(maleRadioButtonDiv)

                        const maleRadioButtonInput = document.createElement('input')
                        maleRadioButtonInput.className = 'form-check-input';
                        maleRadioButtonInput.type = 'radio';
                        maleRadioButtonInput.id = 'maleRadioButton';
                        maleRadioButtonInput.name = 'genderRadioButton';
                        maleRadioButtonInput.value = 'Male';
                        maleRadioButtonDiv.appendChild(maleRadioButtonInput);

                        const maleRadioButtonLabel = document.createElement('label');
                        maleRadioButtonLabel.className = 'form-check-label';
                        maleRadioButtonLabel.for = 'maleRadioButton';
                        maleRadioButtonLabel.innerText = 'Male';
                        maleRadioButtonDiv.appendChild(maleRadioButtonLabel)

                        const femaleRadioButtonDiv = document.createElement('div');
                        femaleRadioButtonDiv.className = 'form-check form-check-inline';
                        genderRadioButtonDiv.appendChild(femaleRadioButtonDiv)

                        const femaleRadioButtonInput = document.createElement('input')
                        femaleRadioButtonInput.className = 'form-check-input';
                        femaleRadioButtonInput.type = 'radio';
                        femaleRadioButtonInput.id = 'femaleRadioButton';
                        femaleRadioButtonInput.name = 'genderRadioButton';
                        femaleRadioButtonInput.value = 'Female';
                        femaleRadioButtonDiv.appendChild(femaleRadioButtonInput);

                        const femaleRadioButtonLabel = document.createElement('label');
                        femaleRadioButtonLabel.className = 'form-check-label';
                        femaleRadioButtonLabel.for = 'femaleRadioButton';
                        femaleRadioButtonLabel.innerText = 'Female';
                        femaleRadioButtonDiv.appendChild(femaleRadioButtonLabel)

                const stateDiv = document.createElement('div');
                stateDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(stateDiv)
        
                    const stateLabel = document.createElement('label');
                    stateLabel.for = 'state';
                    stateLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    stateLabel.innerText = 'State'
                    stateDiv.appendChild(stateLabel)

                    const stateInputDiv = document.createElement('div');
                    stateInputDiv.className = 'col-sm'
                    stateDiv.appendChild(stateInputDiv)

                        const stateInput = document.createElement('input')
                        stateInput.type = 'text';
                        stateInput.className = 'mx-2 form-control';
                        stateInput.id = 'state';
                        stateInput.setAttribute('required', '');
                        stateInputDiv.appendChild(stateInput);

                const countryDiv = document.createElement('div');
                countryDiv.className = 'row form-group mt-4 mb-3';
                formElement.appendChild(countryDiv)
                
                    const countryLabel = document.createElement('label');
                    countryLabel.for = 'country';
                    countryLabel.className = 'col-sm-3 col-form-label h2 text-start';
                    countryLabel.innerText = 'Country'
                    countryDiv.appendChild(countryLabel)
        
                    const countryInputDiv = document.createElement('div');
                    countryInputDiv.className = 'col-sm'
                    countryDiv.appendChild(countryInputDiv)
        
                        const countryInput = document.createElement('input')
                        countryInput.type = 'text';
                        countryInput.className = 'mx-2 form-control';
                        countryInput.id = 'country';
                        countryInput.setAttribute('required', '');
                        countryInputDiv.appendChild(countryInput);

                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'row mt-4 mb-3';
                formElement.appendChild(buttonDiv)

                    const submitButtonDiv = document.createElement('div')
                    submitButtonDiv.className = 'text-md-end text-sm-center col-sm-6 p-2'
                    buttonDiv.appendChild(submitButtonDiv)

                        const submitButton = document.createElement('button')
                        submitButton.className = 'btn btn-sm btn-primary'
                        submitButton.type ='button'
                        submitButton.id = 'submitButton'
                        submitButton.onclick = submitForm;
                        submitButton.innerText = 'Submit'
                        submitButtonDiv.appendChild(submitButton)

                    const cancelButtonDiv = document.createElement('div')
                    cancelButtonDiv.className = 'text-md-start text-sm-center col-sm-6 p-2'
                    buttonDiv.appendChild(cancelButtonDiv)
    
                        const cancelButton = document.createElement('button')
                        cancelButton.className = 'btn btn-sm btn-primary'
                        cancelButton.type ='button'
                        cancelButton.id = 'cancelButton'
                        cancelButton.innerText = 'Cancel'
                        cancelButtonDiv.appendChild(cancelButton)

        const tableContainerDiv = document.createElement('div')
        tableContainerDiv.className = 'row border border-2 border-dark mt-2'
        visibleContainerDiv.appendChild(tableContainerDiv);


            const tableDiv = document.createElement('div')
            tableDiv.className = 'div table-responsive'
            tableContainerDiv.appendChild(tableDiv);

                const table = document.createElement('table')
                table.className = 'table table-secondary table-striped my-3'
                tableDiv.appendChild(table);

                    const tableHead = document.createElement('thead')
                    table.appendChild(tableHead)

                        const tableRow = document.createElement('tr')
                        tableHead.appendChild(tableRow)

                            const firstNameHead = document.createElement('th')
                            firstNameHead.scope = 'col'
                            firstNameHead.innerText = 'First Name'
                            tableRow.appendChild(firstNameHead)

                            const lastNameHead = document.createElement('th')
                            lastNameHead.scope = 'col'
                            lastNameHead.innerText = 'Last Name'
                            tableRow.appendChild(lastNameHead)

                            const emailHead = document.createElement('th')
                            emailHead.scope = 'col'
                            emailHead.innerText = 'Email'
                            tableRow.appendChild(emailHead)

                            const addressHead = document.createElement('th')
                            addressHead.scope = 'col'
                            addressHead.innerText = 'Address'
                            tableRow.appendChild(addressHead)

                            const pincodeHead = document.createElement('th')
                            pincodeHead.scope = 'col'
                            pincodeHead.innerText = 'Pincode'
                            tableRow.appendChild(pincodeHead)

                            const foodPreferenceHead = document.createElement('th')
                            foodPreferenceHead.scope = 'col'
                            foodPreferenceHead.innerText = 'Food Preference'
                            tableRow.appendChild(foodPreferenceHead)

                            const genderHead = document.createElement('th')
                            genderHead.scope = 'col'
                            genderHead.innerText = 'Gender'
                            tableRow.appendChild(genderHead)

                            const stateHead = document.createElement('th')
                            stateHead.scope = 'col'
                            stateHead.innerText = 'State'
                            tableRow.appendChild(stateHead)

                            const countryHead = document.createElement('th')
                            countryHead.scope = 'col'
                            countryHead.innerText = 'Country'
                            tableRow.appendChild(countryHead)

                    const tableBody = document.createElement('tbody')
                    tableBody.id = 'table';
                    table.appendChild(tableBody)

function submitForm(event) {

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;


                        
    var radio = document.getElementsByName('genderRadioButton');
    var displayGender = function() { 
        var genderValue = "";
        for(var i = 0; i < radio.length; i++) {
            if(radio[i].checked){
                genderValue += radio[i].value;
            }
        }
        return genderValue;
        // console.log(genderValue)
    }
                    
                                        
    var checkboxes =    document.getElementsByName('foodPreference');
    var foodPreference = function() {
        var result = "";
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
            result += checkboxes[i].value + ", ";
            }
        }
        return result.slice(0, result.length-2); // adding comma with extra space thus using length-2 while slicing
    }
                                        
    if (foodPreference () == "") {
    alert("Please select at least two food preferences");
    }
                                        
    if (firstName == "" || lastName == "" || email == "" || address == ""|| pincode == "" || foodPreference() == "" || displayGender() == "" || state == "" || country == "") {
        alert("Please enter all the fields first!");
    }

    else {
    var html = "";
                                        
    html = "<tr><td>" + firstName 
    + "</td><td>" + lastName 
    + "</td><td>" + email 
    + "</td><td>" + address 
    + "</td><td>" + pincode 
    + "</td><td>" + foodPreference() 
    + "</td><td>" + displayGender() 
    + "</td><td>"+ state 
    + "</td><td>"+ country 
    + "</td></tr>";
                                        
    document.getElementById("table").innerHTML += html;
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
    document.getElementById('pincode').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";

        for (var i = 0; i <checkboxes.length; i++) {
            checkboxes[i].checked = false;      
        }

        for (var i = 0; i <radio.length; i++) {
            radio[i].checked = false;      
        }
    }
}
                    
