const btnClick = async () => {
    document.getElementById('submit__button').disabled = true;
    let url = 'https://autoexclusive-api.onrender.com/';

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let service = document.getElementById('service').value;

    if (validate(name, phone, email)) {
        let user = {
            name: name,
            phone: phone,
            email: email,
            service: service,
        };

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                document.getElementById('success__notification').style.display =
                    'flex';
                setTimeout(() => {
                    window.open('orders.html', '_self');
                }, 3000);
            } else {
                document.getElementById('fetch__error').style.display = 'flex';
            }
        } catch (error) {
            document.getElementById('fetch__error').style.display = 'flex';
            document.getElementById('submit__button').disabled = false;
        }
    } else {
        document.getElementById('submit__button').disabled = false;
        return;
    }
};

const validate = (name, phone, email) => {
    // let isCorrect = true;
    // if (name.length <= 1) {
    //     document.getElementById('name__warn').innerHTML =
    //         'Длина имени должна быть минимум 5 символов';
    //     document.getElementById('name__error').style.display = 'flex';
    //     isCorrect = false;
    // }
    // let isPhoneNumber = new RegExp(
    //     /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g
    // );
    // if (!isPhoneNumber.test(phone)) {
    //     document.getElementById('phone__warn').innerHTML =
    //         'Некорректный формат номера телефона';
    //     document.getElementById('phone__error').style.display = 'flex';
    //     isCorrect = false;
    // }
    // if (email.length <= 5) {
    //     document.getElementById('email__warn').innerHTML =
    //         'Длина адреса должна быть минимум 6 символов';
    //     document.getElementById('email__error').style.display = 'flex';
    //     isCorrect = false;
    // }
    // if (isCorrect) return true;
    // return false;

    let isPhoneNumber = new RegExp(/(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g);
    let isEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
    if(name !== name.toUpperCase()) {
        alert('Имя должно быть указано большими буквами');
        return false;
    }else if (!isEmail.test(email)){
        alert('Неверно указана электронная почта');
        return false;
    }else if (!isPhoneNumber.test(phone)){
        alert('Неверно указан номер телефона');
        return false;
    }
    alert('Форма заполнена верно!');
    return true;
};
const closeWarning = (field) => {
    document.getElementById(field).style.display = 'none';
};
