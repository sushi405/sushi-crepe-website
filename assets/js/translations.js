// Initialize language from localStorage or default to French
let currentLanguage = localStorage.getItem('language') || 'fr';

// Set initial HTML lang attribute
document.documentElement.lang = currentLanguage;

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Function to switch language
function switchLanguage(lang) {
    // Update current language
    currentLanguage = lang;
    
    // Save to localStorage
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    updateTranslations();
}

// Function to update all translations
function updateTranslations() {
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For input elements, update placeholder
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'A' && element.hasAttribute('title')) {
                // For links with titles, update both text and title
                element.textContent = translations[currentLanguage][key];
                element.title = translations[currentLanguage][key];
            } else {
                // For regular elements, update text content
                element.textContent = translations[currentLanguage][key];
            }
        }
    });

    // Update elements with data-translate-html attribute (for HTML content)
    document.querySelectorAll('[data-translate-html]').forEach(element => {
        const key = element.getAttribute('data-translate-html');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    // Update meta tags
    document.querySelectorAll('meta[data-translate-content]').forEach(meta => {
        const key = meta.getAttribute('data-translate-content');
        if (translations[currentLanguage][key]) {
            meta.content = translations[currentLanguage][key];
        }
    });

    // Update any custom components that need translation
    if (window.updateReviews) {
        window.updateReviews();
    }
}

// Add click handlers to language switcher buttons
document.addEventListener('DOMContentLoaded', () => {
    // Initial translation
    updateTranslations();

    // Set up language switcher buttons
    const frButton = document.getElementById('fr-lang');
    const enButton = document.getElementById('en-lang');

    if (frButton) {
        frButton.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('fr');
        });
    }

    if (enButton) {
        enButton.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage('en');
        });
    }

    // Update active state of language buttons
    updateLanguageButtons();
});

// Function to update language button states
function updateLanguageButtons() {
    const frButton = document.getElementById('fr-lang');
    const enButton = document.getElementById('en-lang');

    if (frButton && enButton) {
        if (currentLanguage === 'fr') {
            frButton.classList.add('active');
            enButton.classList.remove('active');
        } else {
            enButton.classList.add('active');
            frButton.classList.remove('active');
        }
    }
}

// Translations object
const translations = {
    en: {
        contactDirect: "Questions? Call us directly.",
        // Navigation
        brandName: "Sushi Crêpe & Coffee shop",
        home: "Home",
        about: "About",
        contact: "Contact",
        orderNow: "Order Now",
        previous: "Previous",
        next: "Next",
        languageToggle: "FR",

        // Hero Section
        welcome: "Welcome to Sushi Crêpe & Coffee Shop",
        description: "Experience a unique fusion of flavors! From irresistible crepes to gourmet coffee, embark on a culinary journey that will awaken your senses.",

        // About Section
        aboutTitle: "Our passion, your pleasure",
        aboutDescription: "Located in the heart of Lennoxville, Sherbrooke, Sushi Crêpe & Coffee Shop offers a unique gourmet experience combining creativity, quality, and irresistible flavors.",
        aboutText: "Discover our specialties: sweet and savory crêpes, our signature sushi crêpes, and a selection of delicious drinks, all carefully prepared for your enjoyment. And there is more to come! New sweet creations, a variety of desserts, and delicious ice cream will soon join our menu. At Sushi Crêpe, there is always something delicious to enjoy!",

        // Delivery Section
        delivery: "Order for Delivery",
        deliveryDesc: "Choose your preferred delivery service",
        uberDesc: "Fast and reliable delivery",
        doorDesc: "Convenient local delivery",
        skipDesc: "Canada's most reliable delivery",

        // Birthday Section
        birthdayTitle: "Birthday Special",
        birthdayDesc: "Sign up for a special birthday surprise!",
        birthdayName: "Full Name",
        birthdayEmail: "Email",
        birthDate: "Birth Date",
        birthdaySubmit: "Sign Up",
        birthdaySuccess: "Thanks for signing up!",
        birthdayError: "Please fill in all fields.",
        invalidEmail: "Please enter a valid email",
        futureDateError: "Birth date cannot be in the future",

        // Contact Section
        contactUs: "Contact Us",
        findUs: "Find Us",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        contactSuccess: "Message sent successfully!",
        contactError: "Error sending message. Please try again.",
        address: "178 Queen St, Sherbrooke, QC J1M 1J9",
        phone: "Phone",
        hours: "Opening Hours",
        closed: "Closed",

        // Business Hours
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        mondayHours: "9:00 AM - 11:00 PM",
        tuesdayHours: "9:00 AM - 11:00 PM",
        wednesdayHours: "9:00 AM - 11:00 PM",
        thursdayHours: "9:00 AM - 1:00 AM (next day)",
        fridayHours: "9:00 AM - 1:00 AM (next day)",
        saturdayHours: "9:00 AM - 1:00 AM (next day)",
        sundayHours: "9:00 AM - 11:00 PM",

        // Gift Card Section
        giftCardTitle: "Gift Cards",
        giftCardDescription: "Give the gift of a unique culinary experience with our gift cards! Perfect for any occasion.",
        giftCardInstructions: "How it works:\n1. Click the button below\n2. Choose your desired amount\n3. The gift card will be sent by email immediately after purchase",
        buyGiftCard: "Buy a Gift Card",
        buyLabel: "Buy",

        // Reviews Section
        googleReviews: "Google Reviews",
        reviewsDesc: "What our customers say about us",
        seeAllReviews: "See all reviews on Google",
        weekAgo: "a week ago",
        weeksAgo: "weeks ago",
        monthAgo: "a month ago",

        // Footer
        copyright: " 2025 Sushi Crêpe Inc. All rights reserved.",
        followUs: "Follow Us",
        newsletter: "Newsletter",
        subscribeText: "Subscribe to our newsletter",
        subscribe: "Subscribe",
        emailPlaceholder: "Your email",
        socialMedia: "Follow us on social media",
    },
    fr: {
        contactDirect: "Une question ? Appelez-nous directement.",
        // Navigation
        brandName: "Sushi Crêpe & Coffee shop",
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        orderNow: "Commander",
        previous: "Précédent",
        next: "Suivant",
        languageToggle: "EN",

        // Hero Section
        welcome: "Bienvenue chez Sushi Crêpe & Coffee Shop",
        description: "Découvrez une fusion unique de saveurs ! Des crêpes irrésistibles au café gourmet, embarquez dans un voyage culinaire qui éveillera vos sens.",

        // About Section
        aboutTitle: "Notre passion, votre plaisir",
        aboutDescription: "Situé au cœur de Lennoxville, à Sherbrooke, Sushi Crêpe & Coffee Shop vous propose une expérience gourmande unique, alliant créativité, qualité et saveurs irrésistibles.",
        aboutText: "Découvrez nos spécialités : crêpes sucrées et salées, nos fameux sushi crêpes et une sélection de boissons gourmandes, préparés avec soin pour votre plaisir. Et ce n’est pas tout ! De nouvelles créations sucrées, une variété de desserts et de délicieuses glaces viendront bientôt enrichir notre menu. Chez Sushi Crêpe, le plaisir gourmand est toujours au rendez-vous !",

        // Delivery Section
        delivery: "Commander en livraison",
        deliveryDesc: "Choisissez votre service de livraison préféré",
        uberDesc: "Livraison rapide et fiable",
        doorDesc: "Livraison locale pratique",
        skipDesc: "Service de livraison fiable",

        // Birthday Section
        birthdayTitle: "Offre d'anniversaire",
        birthdayDesc: "Inscrivez-vous pour une surprise spéciale !",
        birthdayName: "Nom complet",
        birthdayEmail: "Courriel",
        birthDate: "Date de naissance",
        birthdaySubmit: "S'inscrire",
        birthdaySuccess: "Merci de votre inscription !",
        birthdayError: "Veuillez remplir tous les champs.",
        invalidEmail: "Veuillez entrer un courriel valide",
        futureDateError: "La date ne peut pas être dans le futur",

        // Contact Section
        contactUs: "Nous contacter",
        findUs: "Nous trouver",
        name: "Nom",
        email: "Courriel",
        message: "Message",
        send: "Envoyer",
        contactSuccess: "Message envoyé avec succès !",
        contactError: "Erreur d'envoi. Veuillez réessayer.",
        address: "178 rue Queen, Sherbrooke, QC J1M 1J9",
        phone: "Téléphone",
        hours: "Heures d'ouverture",
        closed: "Fermé",

        // Business Hours
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        mondayHours: "9h00 - 23h00",
        tuesdayHours: "9h00 - 23h00",
        wednesdayHours: "9h00 - 23h00",
        thursdayHours: "9h00 - 1h00 (lendemain)",
        fridayHours: "9h00 - 1h00 (lendemain)",
        saturdayHours: "9h00 - 1h00 (lendemain)",
        sundayHours: "9h00 - 23h00",

        // Gift Card Section
        giftCardTitle: "Cartes-Cadeaux",
        giftCardDescription: "Offrez une expérience culinaire unique avec nos cartes-cadeaux! Parfait pour toutes les occasions.",
        giftCardInstructions: "Comment ça fonctionne:\n1. Cliquez sur le bouton ci-dessous\n2. Choisissez le montant désiré\n3. La carte-cadeau sera envoyée par courriel immédiatement après l'achat",
        buyGiftCard: "Acheter une Carte-Cadeau",
        buyLabel: "Acheter",

        // Reviews Section
        googleReviews: "Avis Google",
        reviewsDesc: "Ce que nos clients disent de nous",
        seeAllReviews: "Voir tous les avis sur Google",
        weekAgo: "il y a une semaine",
        weeksAgo: "il y a des semaines",
        monthAgo: "il y a un mois",

        // Footer
        copyright: " 2025 Sushi Crêpe Inc. Tous droits réservés.",
        followUs: "Suivez-nous",
        newsletter: "Infolettre",
        subscribeText: "Abonnez-vous à notre infolettre",
        subscribe: "S'abonner",
        emailPlaceholder: "Votre courriel",
        socialMedia: "Suivez-nous sur les réseaux sociaux",
    }
};
