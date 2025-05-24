// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Tech Stack Data
    const techStack = [
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js', name: 'JavaScript' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fab fa-node-js', name: 'Node.js' },
        { icon: 'fab fa-git-alt', name: 'Git' },
        { icon: 'fab fa-figma', name: 'Figma' },
        { icon: 'fas fa-database', name: 'MongoDB' },
        { icon: 'fab fa-sass', name: 'Sass' },
        { icon: 'fab fa-npm', name: 'npm' },
        { icon: 'fab fa-github', name: 'GitHub' },
        { icon: 'fas fa-terminal', name: 'CLI' }
    ];

    // Projects Data
    const projects = [
        {
            id: 'studiosnap',
            title: 'StudioSnap',
            description: 'Photography studio booking platform with interactive gallery and scheduling system',
            image: 'assets/images/projects/studiosnap.jpg',
            tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
            features: [
                'Interactive gallery with lightbox',
                'Real-time booking calendar',
                'Client dashboard',
                'Admin portal for studio owners'
            ],
            link: '#'
        },
        {
            id: 'designdeck',
            title: 'DesignDeck',
            description: 'Portfolio platform for designers with customizable layouts',
            image: 'assets/images/projects/designdeck.jpg',
            tech: ['Figma', 'GSAP', 'UI/UX', 'React'],
            features: [
                'Drag & Drop Layouts',
                'Custom Themes',
                'Client Feedback System',
                'Case Study Templates'
            ],
            link: '#'
        },
        {
            id: 'freelancerhub',
            title: 'FreelancerHub',
            description: 'Dashboard concept for managing freelance projects and clients',
            image: 'assets/images/projects/freelancerhub.jpg',
            tech: ['Dashboard', 'UI/UX', 'React', 'Node.js'],
            features: [
                'Project Timeline',
                'Invoice Generator',
                'Time Tracking',
                'Client Communication'
            ],
            link: '#'
        },
        {
            id: 'cybersafe',
            title: 'CyberSafe UI',
            description: 'Cybersecurity landing page with interactive elements',
            image: 'assets/images/projects/cybersafe.jpg',
            tech: ['HTML', 'CSS', 'Security', 'Animation'],
            features: [
                'Interactive Security Checklist',
                'Threat Visualization',
                'Live Demo Section',
                'Responsive Design'
            ],
            link: '#'
        },
        {
            id: 'aidocs',
            title: 'AI Docs',
            description: 'Clean GPT-style assistant UI for document creation',
            image: 'assets/images/projects/aidocs.jpg',
            tech: ['AI', 'UI Design', 'Prototype', 'Figma'],
            features: [
                'Real-time AI Suggestions',
                'Collaboration Tools',
                'Version History',
                'Export Options'
            ],
            link: '#'
        }
    ];

    // Social Links
    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/Aadithyan-bit', label: 'GitHub' },
        { icon: 'fab fa-twitter', url: 'https://x.com/aadithyan2023', label: 'Twitter' },
        { icon: 'fab fa-instagram', url: 'https://www.instagram.com/just_aadi_05', label: 'Instagram' },
        { icon: 'fab fa-threads', url: 'https://www.threads.com/@just_aadi_05', label: 'Threads' },
        { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn' }
    ];

    // Initialize components
    initTechStack();
    initProjects();
    initSocialLinks();
    initContactForm();

    function initTechStack() {
        const techIconsContainer = document.querySelector('.tech-icons');
        techStack.forEach((tech, index) => {
            const techIcon = document.createElement('div');
            techIcon.className = 'tech-icon';
            techIcon.style.transitionDelay = `${index * 0.1}s`;
            techIcon.innerHTML = `
                <i class="${tech.icon}"></i>
                <span>${tech.name}</span>
            `;
            techIconsContainer.appendChild(techIcon);
        });
    }

    function initProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-project', project.id);
            projectCard.style.transitionDelay = `${index * 0.15}s`;
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <span>View Case Study</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    function initSocialLinks() {
        const socialLinksContainer = document.querySelector('.social-links');
        socialLinks.forEach((social, index) => {
            const link = document.createElement('a');
            link.href = social.url;
            link.target = '_blank';
            link.setAttribute('aria-label', social.label);
            link.style.transitionDelay = `${index * 0.1}s`;
            link.innerHTML = `<i class="${social.icon}"></i>`;
            socialLinksContainer.appendChild(link);
        });
    }

    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = this.querySelector('input[type="text"]').value;
                const email = this.querySelector('input[type="email"]').value;
                const message = this.querySelector('textarea').value;
                
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                console.log({ name, email, message });
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }
    }
});