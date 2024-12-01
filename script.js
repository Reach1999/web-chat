const messages = document.querySelector('.messages');
const chatForm = document.querySelector('.chat-form');
const messageInput = document.querySelector('.message-input');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігти перезавантаженню при надсиланні форми

  // Отримати текст повідомлення
  const messageText = messageInput.value.trim();

  if (messageText !== '') {
      // Створити новий елемент для повідомлення
      const messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.textContent = messageText;

        // Додати повідомлення в контейнер повідомлень
      messages.appendChild(messageElement);

      // Очистити поле вводу
      messageInput.value = '';

      // Прокрутити до кінця контейнера повідомлень
      messages.scrollTop = messages.scrollHeight;
  };
});

