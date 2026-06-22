/**
 * Michael Weichenberger - Portfolio Core Script
 * Fokus: Hochperformante Scroll-Animationen via IntersectionObserver
 */

document.addEventListener("DOMContentLoaded", () => {
    // Wählen aller Karten-Elemente (Skills und Projekte)
    const cards = document.querySelectorAll('.card');

    // Sicherheits-Check: Falls keine Karten existieren, bricht das Skript sauber ab
    if (cards.length === 0) return;

    // Konfiguration des IntersectionObservers
    const observerOptions = {
        root: null,         // Nutzt den Browser-Viewport als Referenz
        rootMargin: "0px",  // Keine zusätzlichen Margins
        threshold: 0.15     // Startet die Animation, sobald 15% der Karte sichtbar sind
    };

    // Erstellen des hochperformanten Beobachters
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fügt die CSS-Klasse für den hardwarebeschleunigten Fade-In hinzu
                entry.target.classList.add('visible');

                // Senior-Performance-Tipp: Nach dem Einblenden die Überwachung stoppen
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Zuweisung des Beobachters an jedes einzelne Karten-Element
    cards.forEach(card => {
        cardObserver.observe(card);
    });
});