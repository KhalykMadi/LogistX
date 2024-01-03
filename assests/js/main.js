

const TOKEN = '6486437049:AAE27AFD0PuXRKZyMu-LCjjXiwKzIb33BKQ';
const CHAT_ID = '-1002002716519';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');
const danger = document.getElementById('danger')

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = ''; // Определяем переменную message заранее

    if (this.name.value !== '' && this.number.value !== '') {
        message = `<b>Заявка с сайта\n</b>`;
        message += `<b>Отправитель:</b> ${this.name.value} \n`;
        message += `<b>Номер</b> ${this.number.value}`;

        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.name.value = '';
            this.number.value = '';
            success.innerHTML = 'Сообщение отправлено !';
            success.style.display = 'block';
            danger.style.display = 'none';
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Конец');
        });
    } else {
        console.log('Поля пустые. Сообщение не отправлено.');
        danger.innerHTML = "Поля пустые. Сообщение не отправлено."
        danger.style.display = 'block';
    }
});

// imask

IMask(
    document.getElementById('phone'),
    {
      mask: '+{7}(000)000-00-00'
    }
)



