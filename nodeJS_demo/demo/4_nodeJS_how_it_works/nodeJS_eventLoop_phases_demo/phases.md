- инициализация

## Фазы

// nextTick, microtaskQueue

- таймеры -> setTimeout setInterval
  // nextTick, microtaskQueue //тики, промисы
- pending callbacks
  // nextTick, microtaskQueue
- idle, prepare
  // nextTick, microtaskQueue
- poll -> I/O
  // nextTick, microtaskQueue
- check -> setImmediate
  // nextTick, microtaskQueue
- close callbacks

- проверка на окончание
