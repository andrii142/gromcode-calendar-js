import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

function clearEventForm() {
    // ф-ция должна очистить поля формы от значений
}

function onCloseEventForm() {
    // при закрытии модального окна нужно очистить форму
}

function onCreateEvent(event) {
    // при подтверждении формы нужно считать данные с формы
    // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
    // поможет ф-ция getDateTime из утилит
    // полученное событие добавляем в массив событий, что хранится в storage
    // и запускаем перерисовку событий
}


export function initEventForm() {
    // подпишитесь на сабмит формы и на закрытие формы
}
