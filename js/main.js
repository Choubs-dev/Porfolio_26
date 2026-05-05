// Données des projets
const projectsData = {
    // Projets scolaires
    'school-1': {
        title: 'Site Web pour Studio Yoga',
        images: [
            '../images/Hugo-image_portfolio/Accueil.png',
            '../images/Hugo-image_portfolio/Cours.png',
            '../images/Hugo-image_portfolio/Horaire.png'
        ],
        description: 'Un site web complet pour un studio de yoga, incluant une page d\'accueil, les horaires des cours, le formulaire de contact et les tarifs.',
        details: 'Technologies: HTML5, CSS3, JavaScript '
    },
    'school-2': {
        title: 'Site de Gestion de Système de Panne',
        images: [
            '../images/pannes/Acceuil.avif',
            '../images/pannes/declaration panne.avif'
        ],
        description: 'Une site responsive pour la gestion de tâches avec synchronisation en temps réel.',
        details: 'Technologies: HTML5, CSS3, JavaScript'
    },
    'school-3': {
        title: 'Base de Données Relationnelle',
        images: [
            '../images/DB/1.png',
            '../images/DB/2.png'
        ],
        description: 'Conception et implémentation d\'une base de données pour une bibliothèque numérique avec interface de gestion.',
        details: 'Technologies: SQL, MySQL, PHP | Durée: 6 semaines'
    },

    'school-4': {
        title: 'Application Java de Gestion MFC',
        images: [
            '../images/un.png',
            '../images/deux.png',
            '../images/pbFor.png'
        ],
        description: 'Conception et implémentation d\'une application Java pour la gestion de   ² maisons de formation continue (MFC).',
        details: 'Technologies: Java, Spring Boot, Eclipse | Durée: 6 semaines '
    },


    // Projets professionnels - Deuxième année en alternance
    'pro-2-1': {
        title: 'Inventaire Matériel Informatique',
        images: [
            '../images/inventaire.avif',
        ],
        description: 'Développement sur excel d\'inventaire pour tous les matériels informatiques.',
        details: 'Technologies: Excel },

    'pro-2-2': {
            title: 'Site WordPress livrets pédagogiques',
            images: [
                '../images/acceuil.png',
                '../images/prendrecontact.png'
            ],
            description: 'Création d\'un site WordPress pour la publication de livrets pédagogiques.',
            details: 'Technologies: WordPress'
        },

        // Projets personnels
        'personal-2': {
            title: 'Introduction à la Cybersécurité',
            images: [
                '../images/Certi.png'
            ],
            description: 'J\'ai obtenu une certification en cybersécurité qui couvre les fondamentaux de la sécurité informatique, les menaces courantes et les meilleures pratiques pour protéger les systèmes et les données.',
            details: 'Certification obtenue en 2026 | Durée: 2 semaines | Compétences acquises: Sécurité des réseaux, gestion des vulnérabilités, cryptographie'
        },

    };

    // Initialisation au chargement du DOM
    document.addEventListener('DOMContentLoaded', function () {
        initializeProjectGallery();
    });

    // Fonction pour initialiser la galerie
    function initializeProjectGallery() {
        // Ajouter les écouteurs d'événements aux cartes de projets
        const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project-id');
        openProjectModal(projectId);
    });
});

// Ajouter l'écouteur pour fermer la modal
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.project-modal-close');

closeBtn.addEventListener('click', function () {
    closeProjectModal();
});

// Fermer la modal en cliquant en dehors du contenu
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Fermer la modal avec la touche Échap
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
}

// Variable globale pour le carrousel
let currentImageIndex = 0;
let currentImages = [];

// Fonction pour ouvrir la modal avec les détails du projet
function openProjectModal(projectId) {
    const project = projectsData[projectId];

    if (!project) {
        console.error('Projet non trouvé:', projectId);
        return;
    }

    // Récupérer les images (support de 'images' pour multiple ou 'image' pour single)
    currentImages = Array.isArray(project.images) ? project.images : [project.image || project.images];
    currentImageIndex = 0;

    // Remplir les données du modal
    document.getElementById('modalImage').src = currentImages[0];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').innerHTML = `<p><strong>Détails du projet:</strong></p><p>${project.details}</p>`;

    // Gérer l'affichage du carrousel
    const imageGallery = document.getElementById('imageGallery');
    if (currentImages.length > 1) {
        imageGallery.style.display = 'flex';
        document.getElementById('totalImages').textContent = currentImages.length;
        document.getElementById('currentImageIndex').textContent = '1';

        // Ajouter les écouteurs pour les boutons de navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.onclick = () => showPreviousImage();
        nextBtn.onclick = () => showNextImage();
    } else {
        imageGallery.style.display = 'none';
    }

    // Afficher le modal
    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';

    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

// Fonction pour afficher l'image précédente
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
}

// Fonction pour afficher l'image suivante
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateModalImage();
}

// Fonction pour mettre à jour l'image affichée
function updateModalImage() {
    document.getElementById('modalImage').src = currentImages[currentImageIndex];
    document.getElementById('currentImageIndex').textContent = currentImageIndex + 1;
}

// Fonction pour fermer la modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';

    // Restaurer le scroll du body
    document.body.style.overflow = 'auto';
}
