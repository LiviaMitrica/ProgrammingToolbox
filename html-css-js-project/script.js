const requestURL = 'about_me.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = processData;

function processData() {
    const jsonData = request.response

    processPersonalProfile(jsonData)
    processWorkExperience(jsonData)
    processEducation(jsonData)
    processVolunteeringExperience(jsonData)
    processHobbies(jsonData)
}

function processPersonalProfile(jsonData) {
    var name = document.getElementById("name")
    name.textContent = jsonData["name"]

    var jobTitle = document.getElementById("job_title")
    jobTitle.textContent = jsonData["job_title"] + "@" + jsonData["work_place"]

    var birthdate = document.getElementById("birthdate")
    birthdate.textContent = jsonData["birthdate"]

    var currentCity = document.getElementById("current_city")
    currentCity.textContent += jsonData["current_city"]

    var homeTown = document.getElementById("hometown")
    homeTown.textContent += jsonData["hometown"]
}

function processWorkExperience(jsonData) {
    const experienceSection = document.getElementById("work_experience_container")
    const workExperienceData = jsonData["work_experience"]

    workExperienceData.map((element) => {
        let newDiv = document.createElement("div")
        newDiv.id = element.id
        newDiv.className = "section__text_work_experience"
        
        const titleElement = document.createElement("div")
        titleElement.className = "experience__title"
        titleElement.textContent = element["position"]

        const placeElement = document.createElement("div")
        placeElement.className = "experience__place"
        placeElement.textContent = element["place"]

        const timeframeElement = document.createElement("div")
        timeframeElement.className = "experience__timeframe"
        timeframeElement.textContent = element["timeframe"]

        const descElement = document.createElement("ul")
        descElement.className = "experience__description"
        const descList = element["responsabilities"] 
        descList.map((descListElement) => {
            const listElement = document.createElement("li")
            listElement.textContent = descListElement
            descElement.appendChild(listElement)
        })

        experienceSection.appendChild(titleElement)
        experienceSection.appendChild(placeElement)
        experienceSection.appendChild(timeframeElement)
        experienceSection.appendChild(descElement)
    })
    
}

function processVolunteeringExperience(jsonData) {
    const experienceSection = document.getElementById("volunteering_experience_container")
    const workExperienceData = jsonData["volunteering"]

    workExperienceData.map((element) => {
        let newDiv = document.createElement("div")
        newDiv.id = element.id
        newDiv.className = "section__text_volunteering_experience"
        
        const titleElement = document.createElement("div")
        titleElement.className = "experience__title"
        titleElement.textContent ="Volunteer"

        const placeElement = document.createElement("div")
        placeElement.className = "experience__subtitle"
        placeElement.textContent = element["organization"]

        const timeframeElement = document.createElement("div")
        timeframeElement.className = "experience__timeframe"
        timeframeElement.textContent = element["timeframe"]

        const descElement = document.createElement("ul")
        descElement.className = "experience__description"
        const descList = element["responsabilities"] 
        descList.map((descListElement) => {
            const listElement = document.createElement("li")
            listElement.textContent = descListElement
            descElement.appendChild(listElement)
        })

        experienceSection.appendChild(titleElement)
        experienceSection.appendChild(placeElement)
        experienceSection.appendChild(timeframeElement)
        experienceSection.appendChild(descElement)
    })
    
}

function processEducation(jsonData) {
    const experienceSection = document.getElementById("education_container")
    const workExperienceData = jsonData["education"]

    workExperienceData.map((element) => {
        let newDiv = document.createElement("div")
        newDiv.id = element.id
        newDiv.className = "section__text_education"
        
        const titleElement = document.createElement("div")
        titleElement.className = "experience__title"
        titleElement.textContent = element["place"]

        const placeElement = document.createElement("div")
        placeElement.className = "experience__place"
        placeElement.textContent = element["specialization"]

        const timeframeElement = document.createElement("div")
        timeframeElement.className = "experience__timeframe"
        timeframeElement.textContent = element["timeframe"]

        experienceSection.appendChild(titleElement)
        experienceSection.appendChild(placeElement)
        experienceSection.appendChild(timeframeElement)
    })
    
}

function processHobbies(jsonData) {
    const hobbiesSection = document.getElementById("hobbies_container")
    const hobbies = jsonData["hobbies_interests"]

    const hobbiesElement = document.createElement("ul")
    hobbiesElement.className = "experience__description"
    hobbies.map((descListElement) => {
        const listElement = document.createElement("li")
        listElement.textContent = descListElement
        hobbiesElement.appendChild(listElement)
    })
    hobbiesSection.appendChild(hobbiesElement)
}

function startAnimation() {
    // Add animation class to the section
    document.getElementById("experience").classList.add("animationExperience");

    // Remove animation class after animation ends to enable re-triggering
    setTimeout(() => {
        document.getElementById("experience").classList.remove("animationExperience");
    }, 4000); // Adjust the timeout value to match your animation duration
}

function startAnimationName() {
    // Add animation class to the section
    document.getElementById("name").classList.add("animationProfile");
    document.getElementById("profile-pic").classList.add("animatePic");

    // Remove animation class after animation ends to enable re-triggering
    setTimeout(() => {
        document.getElementById("name").classList.remove("animationProfile");
        document.getElementById("profile-pic").classList.remove("animatePic");
    }, 5000); // Adjust the timeout value to match your animation duration
}