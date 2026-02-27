async function generateEmail() {
    const company = document.getElementById('company').value;
    const industry = document.getElementById('industry').value;
    const role = document.getElementById('role').value;
    
    const btn = document.getElementById('genBtn');
    const loader = document.getElementById('loader');
    const output = document.getElementById('output');
    const body = document.getElementById('emailBody');

    if (!company || !industry) {
        alert("Please provide all business details.");
        return;
    }

    btn.disabled = true;
    loader.classList.remove('hidden');
    output.classList.add('hidden');

    const promptText = `You are a consultant at Chiacon. Write a professional cold outreach email to the ${role} of ${company} in the ${industry} industry. 
    Focus on Chiacon's expertise in RPA and Data Analytics. Keep it under 130 words.`;

    // Accessing key from config.js
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${CONFIG.GEMINI_API_KEY}`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }]
            })
        });

        if (!response.ok) throw new Error("API Connection Failed");

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;

        body.innerText = aiResponse;
        output.classList.remove('hidden');
    } catch (error) {
        alert("Check your API key in config.js");
        console.error(error);
    } finally {
        btn.disabled = false;
        loader.classList.add('hidden');
    }
}