// Navigation links handling
document.querySelectorAll('.left-pane a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);
    document.querySelectorAll('.right-pane section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';
  });
});

// Migration buttons logic
document.getElementById('start-btn').addEventListener('click', () => {
  alert('Migration Started');
});

document.getElementById('stop-btn').addEventListener('click', () => {
  alert('Migration Stopped');
});

document.getElementById('status-btn').addEventListener('click', () => {
  alert('Checking Migration Status');
});

// Update button for Data Correction
document.getElementById('update-btn').addEventListener('click', () => {
  const environment = document.getElementById('environment').value;
  const database = document.getElementById('database').value;
  const collection = document.getElementById('collection').value;
  const filter = document.getElementById('filter').value;
  const targetValue = document.getElementById('target-value').value;

  alert(`Data Correction Update:
    Environment: ${environment}
    Database: ${database}
    Collection: ${collection}
    Filter: ${filter}
    Target Value: ${targetValue}`);
});

// Validate Source and Recommend Mapping in Data Analysis
document.getElementById('validate-source-btn').addEventListener('click', () => {
  alert('Validating Source Data');
});

document.getElementById('recommend-mapping-btn').addEventListener('click', () => {
  alert('Recommending Mapping');
});

// Chatbot functionality
const chatbot = document.getElementById('chatbot');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotContent = document.getElementById('chatbot-content');

chatbot.addEventListener('click', () => {
  chatbotBox.style.display = chatbotBox.style.display === 'none' ? 'block' : 'none';
});

chatbotInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const userInput = chatbotInput.value;
    if (userInput) {
      chatbotContent.innerHTML += `<p>You: ${userInput}</p>`;
      chatbotInput.value = '';
      chatbotContent.innerHTML += `<p>Bot: This is a placeholder for now, but we will enhance the chatbot responses in the future.</p>`;
      chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }
  }
});

