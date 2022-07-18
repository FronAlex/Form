

var form = document.querySelector('.form');

form.onsubmit = function valideForm() {

    var count = 0;
    count = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });


    var fields = document.querySelectorAll('.field');

    for (let i of fields) {
        if (i.value.trim() == '') {

            i.style = 'background-color: red !important;';
            i.focus();
            count++;
        } else {
            i.style = 'background-color: white !important;';
        };

    };


    var email = document.querySelector('.email_name');

    if (email.value.trim() == '') {

        email.style = 'background-color: red !important;';
        email.focus();
        count++;

    } else {

        if (email.value.trim().indexOf('.', 0) == -1 || email.value.trim().indexOf('@', 0) == -1) {

            email.focus();
            email.style = 'background-color: red !important;';
            count++;

        } else {
            email.style = 'background-color: white !important;';
        };
    };


    var male = document.querySelector('.male');
    var female = document.querySelector('.female');
    var checkit = document.querySelectorAll('.checkit');
    var check = 0;

    if (!male.checked) {
        check++;
    };
    if (!female.checked) {
        check++;
    };
    if (check !== 1) {
        for (let i of checkit) {
            i.style = 'color: red !important;';
            count++;

        };
    } else {
        for (let i of checkit) {
            i.style = 'color: #111111; !important;';

        };
    };


    var Password = document.querySelector('.password');
    var Confirm_Password = document.querySelector('.Confirm_Password');

    if (Password.value.trim() == '' || Confirm_Password.value.trim() == '') {
        Password.style = 'background-color: red !important;';
        Confirm_Password.style = 'background-color: red !important;';
        count++;

    } else {
        Password.style = 'background-color: white !important;';
        Confirm_Password.style = 'background-color: white !important;';

        if (Password.value === Confirm_Password.value) {
            Password.style = 'background-color: white !important;';
            Confirm_Password.style = 'background-color: white !important;';

        } else {
            Password.style = 'background-color: red !important;';
            Confirm_Password.style = 'background-color: red !important;';
            count++;

        };
    };


    if (count !== 0) {

        return false;
    };


};

