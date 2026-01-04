// TEMPORARY - We'll add real API key later
const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';

// Handle video file selection
document.getElementById('videoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Show video preview
        const videoPreview = document.getElementById('videoPreview');
        const videoPlayer = document.getElementById('videoPlayer');
        
        videoPlayer.src = URL.createObjectURL(file);
        videoPreview.style.display = 'block';
        
        console.log('Video loaded:', file.name);
    }
});

// Main analysis function
async function analyzeVideo() {
    const videoInput = document.getElementById('videoInput');
    const file = videoInput.files[0];
    
    if (!file) {
        alert('Please select a video file first!');
        return;
    }
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    // Disable button
    document.getElementById('analyzeBtn').disabled = true;
    document.getElementById('analyzeBtn').textContent = 'Analyzing...';
    
    try {
        // TODO: Add Gemini API call here
        console.log('Starting analysis...');
        
        // Simulated delay (we'll replace this with real API call)
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Mock results for now
        displayResults({
            timeline: "0:00 - Scene begins\n0:05 - Individual A enters frame\n0:10 - Individual B appears",
            individuals: "Individual A: Person in blue shirt\nIndividual B: Person in red jacket",
            actions: "Individual A raises right hand\nIndividual B turns around",
            transcript: "Audio: 'Stop right there'",
            contradictions: "None detected in current analysis",
            questions: "What happened before 0:00?\nWhere did Individual B come from?"
        });
        
    } catch (error) {
        console.error('Error:', error);
        alert('Analysis failed. Please try again.');
    } finally {
        // Hide loading
        document.getElementById('loading').style.display = 'none';
        
        // Re-enable button
        document.getElementById('analyzeBtn').disabled = false;
        document.getElementById('analyzeBtn').textContent = 'Analyze Video';
    }
}

// Display results
function displayResults(data) {
    document.getElementById('timeline').textContent = data.timeline;
    document.getElementById('individuals').textContent = data.individuals;
    document.getElementById('actions').textContent = data.actions;
    document.getElementById('transcript').textContent = data.transcript;
    document.getElementById('contradictions').textContent = data.contradictions;
    document.getElementById('questions').textContent = data.questions;
    
    // Show results
    document.getElementById('results').style.display = 'block';
}

// Export report function
function exportReport() {
    alert('Export feature coming soon!');
    // TODO: Add PDF export functionality
}

console.log('Verity AI Witness System loaded ✓');