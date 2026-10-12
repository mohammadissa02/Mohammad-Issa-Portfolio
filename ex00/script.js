'use strict';

const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');
const currentYear = document.querySelector('#current-year');

// Event lifecycle: click -> browser fires event -> callback runs -> data-theme changes -> CSS variables update.
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const isLightTheme = nextTheme === 'light';

    document.documentElement.dataset.theme = nextTheme;
    themeToggle.setAttribute('aria-pressed', String(isLightTheme));
    themeToggle.setAttribute('aria-label', isLightTheme ? 'Switch to dark theme' : 'Switch to light theme');
    themeIcon.textContent = isLightTheme ? '◑' : '◐';
    themeLabel.textContent = isLightTheme ? 'Dark mode' : 'Light mode';
});

// Front-end demo only: validates basic input and does not send/store the message.
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    formFeedback.textContent = `Thanks, ${name}. The form passed the browser-side checks, but this demo does not send messages.`;
    contactForm.reset();
});


// Recover the profile photo if it was saved beside index.html instead of in /assets,
// or if the image uses a common alternate extension/capitalization.
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    const profileImageCandidates = [
        'assets/profile.jpg',
        'assets/profile.jpeg',
        'profile.jpeg',
        'assets/profile.png',
        'profile.png',
        'assets/profile.webp',
        'profile.webp',
        'assets/profile.JPG',
        'profile.JPG',
        'assets/profile-placeholder.svg'
    ];
    let profileImageCandidateIndex = 0;

    profileImage.addEventListener('error', () => {
        if (profileImageCandidateIndex >= profileImageCandidates.length) {
            profileImage.style.display = 'none';
            return;
        }
        profileImage.src = profileImageCandidates[profileImageCandidateIndex++];
    });
}

// Keep the footer year current.
currentYear.textContent = new Date().getFullYear();
