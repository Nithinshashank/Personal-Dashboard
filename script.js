document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.dashboard-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Load data from data.js and populate the dashboard
    loadProfileData();
    loadEducationData();
    loadSkillsData();
    loadExtrasData();
});

function loadProfileData() {
    // Data is loaded from data.js
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-title').textContent = profileData.title;
    document.getElementById('profile-bio').textContent = profileData.bio;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-phone').textContent = profileData.phone;
    document.getElementById('profile-location').textContent = profileData.location;
}

function loadEducationData() {
    const timeline = document.getElementById('education-timeline');
    
    educationData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <h4>${item.institution}</h4>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function loadSkillsData() {
    const skillsContainer = document.getElementById('skills-container');
    
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-level-bar" style="width: ${skill.level}%"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

function loadExtrasData() {
    const certificationsList = document.getElementById('certifications-list');
    const InterestsList = document.getElementById('Interests-list');
    
    extrasData.certifications.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-certificate"></i> ${item}`;
        certificationsList.appendChild(li);
    });
    
    extrasData.Interests.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-heart"></i> ${item}`;
        InterestsList.appendChild(li);
    });
}