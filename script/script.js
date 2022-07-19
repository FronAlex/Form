

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

            i.style = 'border-bottom: 2px solid #FF2828 !important';
            i.focus();
            count++;
        } else {
            i.style = 'border-bottom: 1px solid #f2f2f2 !important';
        };

    };


    var email = document.querySelector('.email_name');

    if (email.value.trim() == '') {

        email.style = 'border-bottom: 2px solid #FF2828 !important';
        email.focus();
        count++;

    } else {

        if (email.value.trim().indexOf('.', 0) == -1 || email.value.trim().indexOf('@', 0) == -1) {

            email.focus();
            email.style = 'border-bottom: 2px solid #FF2828 !important';
            count++;

        } else {
            email.style = 'border-bottom: 1px solid #f2f2f2 !important';
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
        Password.style = 'border-bottom: 2px solid #FF2828 !important';
        Confirm_Password.style = 'border-bottom: 2px solid #FF2828 !important';
        count++;

    } else {
        Password.style = 'border-bottom: 1px solid #f2f2f2 !important';
        Confirm_Password.style = 'border-bottom: 1px solid #f2f2f2 !important';

        if (Password.value === Confirm_Password.value) {
            Password.style = 'border-bottom: 1px solid #f2f2f2 !important';
            Confirm_Password.style = 'border-bottom: 1px solid #f2f2f2 !important';

        } else {
            Password.style = 'border-bottom: 2px solid #FF2828 !important';
            Confirm_Password.style = 'border-bottom: 2px solid #FF2828 !important';
            count++;

        };
    };


    if (count !== 0) {

        let button = document.querySelector('.account_button');
        button.classList.toggle('animate__animated');
        button.classList.toggle('animate__wobble');

        function remove() {
            button.classList.remove('animate__animated');
            button.classList.remove('animate__wobble');
        }
        setTimeout(remove, 1000)


        return false;
    };



    function skritie() {

        let p = document.querySelector('.account_p');
        let approved = document.querySelector('.approved');

        form.style = 'visibility: hidden; !important';
        p.style = 'visibility: initial; !important';
        approved.style = 'visibility: initial; !important';

    };

    setTimeout(skritie, 500);




    let clear = document.querySelectorAll('.clear');

    for (let i of clear) {
        i.value = '';
    }
    male.checked = false;
    female.checked = false;

};

