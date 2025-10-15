import * as params from '@params';

async function cvsearch() {
    const resultDiv = document.getElementById("cvpromptResult");
    const inputText = document.getElementById("cvpromptTextInput");
    const userInput = inputText.value.trim();
    if (!userInput) {
        return;
    }
    
    resultDiv.textContent = "⏳ En attente de réponse...";

    try {

        const res = await fetch(params.apiUrl + "search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'query': userInput})
        });
        const data = await res.json()

        resultDiv.textContent = "";

        if (data.projects.length == 0) {
            const projectDiv = document.createElement("div");
            projectDiv.textContent = "Aucun contenu trouvé.";
            resultDiv.appendChild(projectDiv);
        } else {
            data.projects.forEach(project => {
                // Create project div
                const projectDiv = document.createElement("div");
                projectDiv.className = "project";
                // title
                const title = document.createElement("h3");
                title.textContent = project.name;
                projectDiv.appendChild(title);

                // append chunks
                const relatedChunks = data.chunks.filter(c => c.project_id === project.id);
                const chunksDiv = document.createElement("div");
                chunksDiv.className = "chunks";
                relatedChunks.forEach(chunk => {
                    const chunkDiv = document.createElement("div");
                    chunkDiv.className = "chunk";
                    chunkDiv.textContent = chunk.content;
                    chunkDiv.insertAdjacentHTML('afterbegin', '<i class="fi fi-ss-angle-right"></i> ');
                    chunksDiv.appendChild(chunkDiv);
                });
                projectDiv.appendChild(chunksDiv);

                resultDiv.appendChild(projectDiv);
            });
        }
        
    } catch (error) {
        resultDiv.textContent = "❌ Oups, une erreur s'est produite..."
    }

    inputText.value = "";
}

window.onload = () => {
    const sendBtn = document.getElementById("cvpromptSend");
    const inputText = document.getElementById("cvpromptTextInput")
    sendBtn.addEventListener('click', cvsearch);
    inputText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            cvsearch();
        }
    });
}




