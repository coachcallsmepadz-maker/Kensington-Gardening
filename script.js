document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const nav = document.querySelector('.nav-glass');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hero Initial Setup Animation
    const heroTl = gsap.timeline();

    heroTl.from('.nav-glass', { y: -100, opacity: 0, duration: 1.5, ease: 'power4.out' })
        .from('.hero-bg', { scale: 1.1, duration: 2, ease: 'power2.out' }, '-=1.2')
        .from('.hero-content .fade-up', {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=1.5')
        .from('.scroll-prompt', { opacity: 0, y: 20, duration: 1 }, '-=0.5');


    // Parallax Effects via GSAP

    // Hero Background Deep Parallax
    gsap.to('.hero-bg', {
        yPercent: 30, // Move it down as we scroll down
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Inner Image Parallax (Quality Section)
    gsap.utils.toArray('.parallax-window').forEach(window => {
        const bg = window.querySelector('.parallax-bg');
        gsap.to(bg, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: window,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Services Background Parallax
    gsap.to('.services-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.services-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Booking Background Parallax
    gsap.to('.booking-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.booking-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });


    // Standard Scroll Reveals

    // Fade-ups
    gsap.utils.toArray('section .fade-up:not(.hero-section .fade-up)').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Fade Right
    gsap.utils.toArray('.fade-in-left').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%", toggleActions: "play none none reverse" },
            x: -40, opacity: 0, duration: 1.2, ease: "power3.out"
        });
    });

    // Fade Left
    gsap.utils.toArray('.fade-in-right').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%", toggleActions: "play none none reverse" },
            x: 40, opacity: 0, duration: 1.2, ease: "power3.out"
        });
    });
});
