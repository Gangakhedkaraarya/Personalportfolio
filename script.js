// Adding a subtle 3D mouse hover effect to elements like the profile picture and buttons
const profilePic = document.querySelector('.profile-pic');
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

// 3D Hover effect for profile picture
profilePic.addEventListener('mouseover', () => {
    profilePic.style.transform = 'scale(1.05)';
});

profilePic.addEventListener('mouseout', () => {
    profilePic.style.transform = 'scale(1)';
});

// 3D Hover effect for buttons and links
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
    });
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-3px)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
    });
});
