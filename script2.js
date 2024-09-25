// Navigation Links
const homeLink = document.getElementById('home-link');
const migrationLink = document.getElementById('migration-link');
const correctionLink = document.getElementById('correction-link');
const analysisLink = document.getElementById('analysis-link');
const dashboardLink = document.getElementById('dashboard-link');

// Content Sections
const homeSection = document.getElementById('home');
const migrationSection = document.getElementById('migration');
const correctionSection = document.getElementById('correction');
const analysisSection = document.getElementById('analysis');
const dashboardSection = document.getElementById('dashboard');

// Show/Hide Sections
function hideAllSections() {
  homeSection.classList.add('hidden');
  migrationSection.classList.add('hidden');
  correctionSection.classList.add('hidden');
  analysisSection.classList.add('hidden');
  dashboardSection.classList.add('hidden');
}

homeLink.addEventListener('click', () => {
  hideAllSections();
  homeSection.classList.remove('hidden');
});

migrationLink.addEventListener('click', () => {
  hideAllSections();
  migrationSection.classList.remove('hidden');
});

correctionLink.addEventListener('click', () => {
  hideAllSections();
  correctionSection.classList.remove('hidden');
});

analysisLink.addEventListener('click', () => {
  hideAllSections();
  analysisSection.classList.remove('hidden');
});

dashboardLink.addEventListener('click', () => {
  hideAllSections();
  dashboardSection.classList.remove('hidden');
});

// Start, Stop, and Status Buttons for Migration
document.getElementById('start-btn').addEventListener('click', () => {
  alert('Migration Started');
  // Add logic to handle the migration start process
});

document.getElementById('stop-btn').addEventListener('click', () => {
  alert('Migration Stopped');
  // Add logic to handle the migration stop process
});

document.getElementById('status-btn').addEventListener('click', () => {
  alert('Checking Migration Status');
  // Add logic to check migration status
});

// Update Button for Data Correction
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
  // Add logic to handle data correction update
});

// Validate Source and Recommend Mapping in Data Analysis
document.getElementById('validate-source-btn').addEventListener('click', () => {
  alert('Validating Source Data Source');
  // Add logic for source validation
});

document.getElementById('recommend-mapping-btn').addEventListener('click', () => {
  alert('Recommending Mapping');
  // Add logic to recommend mappings
});
