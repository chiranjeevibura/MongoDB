// Mapping Fields
document.getElementById('map-fields-btn').addEventListener('click', function() {
  document.getElementById('mapping-result').innerHTML = 'Source fields mapped to target fields!';
});

// Data Transformation
document.getElementById('transform-btn').addEventListener('click', function() {
  const encrypt = document.getElementById('encrypt').checked;
  const scale = document.getElementById('scale').checked;
  let result = 'Transformations applied: ';

  if (encrypt) result += 'Encryption ';
  if (scale) result += 'Scaling ';

  document.getElementById('transform-result').innerHTML = result;
});

// Data Validation
document.getElementById('validate-btn').addEventListener('click', function() {
  document.getElementById('validation-result').innerHTML = 'Data validated successfully!';
});

// Data Correction
document.getElementById('correct-btn').addEventListener('click', function() {
  document.getElementById('correction-result').innerHTML = 'Data corrected successfully!';
});

// Job Scheduling
document.getElementById('schedule-btn').addEventListener('click', function() {
  const time = document.getElementById('job-time').value;
  document.getElementById('schedule-result').innerHTML = `Job scheduled at ${time}.`;
});

// Job Monitoring
document.getElementById('monitor-btn').addEventListener('click', function() {
  let progress = 0;
  const interval = setInterval(function() {
    progress += 10;
    if (progress <= 100) {
      document.querySelector('.progress').style.width = progress + '%';
      document.getElementById('status').innerHTML = 'Running';
    } else {
      clearInterval(interval);
      document.getElementById('status').innerHTML = 'Completed';
      document.getElementById('status').style.color = 'blue';
    }
  }, 500);
});

// Chatbot
document.getElementById('send-btn').addEventListener('click', function() {
  const userInput = document.getElementById('chat-input-box').value;
  const chatBody = document.querySelector('.chat-body');

  // Simulating chatbot response
  if (userInput.trim()) {
    const userMessage = document.createElement('p');
    userMessage.textContent = `User: ${userInput}`;
    chatBody.appendChild(userMessage);

    const botResponse = document.createElement('p');
    botResponse.textContent = `Bot: I am a demo chatbot. You asked about '${userInput}'.`;
    chatBody.appendChild(botResponse);

    document.getElementById('chat-input-box').value = '';
    chatBody.scrollTop = chatBody.scrollHeight;  // Scroll to bottom
  }
});
