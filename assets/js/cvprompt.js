import * as params from '@params';

async function fetchData(userInput) {
    const res = await fetch(params.apiUrl + "search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({'query': userInput})
    });
    const data = await res.json();
    return data
}

function addNewProject(project, showTime, data, resultDiv) {
    // Create project div
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    // title
    const title = document.createElement("h3");
    title.textContent = project.name;
    projectDiv.appendChild(title);
    // company
    const company = document.createElement("p");
    company.textContent = project.company;
    projectDiv.appendChild(company);

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
    // Similarity
    const similarity = document.createElement("div");
    if (project.score > 0.6) {
        similarity.className = "similarity strong-similarity";
        similarity.textContent = "Très forte correspondance";
    } else if (project.score > 0.5) {
        similarity.className = "similarity good-similarity";
        similarity.textContent = "Bonne correspondance";
    } else {
        similarity.className = "similarity medium-similarity";
        similarity.textContent = "Pertinence modérée";
    }
    projectDiv.appendChild(similarity);
    resultDiv.appendChild(projectDiv);
    setTimeout(() => projectDiv.classList.add("show"), showTime);
}

async function addProjectsFromData(data, resultDiv) {
    const introP = document.createElement("p");
    introP.textContent = "Voici mes expériences qui correspondent le mieux à votre projet :";
    resultDiv.appendChild(introP);

    for (const [i, project] of data.projects.entries()) {
        addNewProject(project, 50*(i+1), data, resultDiv);
    }
}

function addCTA(resultDiv) {
    const ctaDiv = document.createElement("div");
    ctaDiv.className = "cta";
    ctaDiv.innerHTML = '<div><a href="mailto:olivier.petit@opetit.fr">Vous avez un projet ? Discutons-en ! 👋</a></div>\
    <div><a href="https://drive.google.com/file/d/1-lpViICYxFEH-VZEnSlDbO3YdWeueHsn/view?usp=sharing" target="_blank">Voir mon CV en PDF</a></div>';
    resultDiv.appendChild(ctaDiv);
}

async function cvsearch() {
    const resultDiv = document.getElementById("cvpromptResult");
    const inputText = document.getElementById("cvpromptTextInput");
    const userInput = inputText.value.trim();
    if (!userInput) {
        return;
    }
    
    resultDiv.textContent = "⏳ En attente de réponse...";

    try {
        const data = await fetchData(userInput);
        if (data.projects.length == 0) {
            resultDiv.textContent = "🤔 Aucun contenu pertinent trouvé...";
        } else {
            resultDiv.textContent = "";
            const queryP = document.createElement("p");
            const queryStrong = document.createElement("strong")
            queryP.appendChild(queryStrong);
            queryStrong.textContent = "Votre projet : « " + userInput + " »";
            resultDiv.appendChild(queryP);
            addProjectsFromData(data, resultDiv);
            addCTA(resultDiv);
            document.getElementsByClassName("intro")[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } catch (error) {
        resultDiv.textContent = "❌ Oups, une erreur s'est produite...";
    }
    
    inputText.value = "";
}

window.onload = () => {
    const sendBtn = document.getElementById("cvpromptSend");
    const inputText = document.getElementById("cvpromptTextInput");
    sendBtn.addEventListener('click', cvsearch);
    inputText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            cvsearch();
        }
    });
}




