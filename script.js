/**
 * Tanishka Shrivastav - Portfolio Interactive Engine
 * Handles project modal, carousel slides, filter system, color copy, and inquiry forms
 */

// Project Data Registry
const projectsData = {
  'airbnb-carousel': {
    title: '"They Couldn’t Afford Rent..." — Airbnb Origin Story',
    category: 'Editorial & Social Media Storytelling',
    client: 'E-Cell IIT Bombay (NEC) & LNCTE E-Cell',
    format: '4-Slide Instagram Carousel (4:5 Ratio)',
    pdfUrl: 'They Couldn’t Afford Rent.pdf',
    slides: [
      'assets/projects/They Couldn_t Afford Rent_p1.png',
      'assets/projects/They Couldn_t Afford Rent_p2.png',
      'assets/projects/They Couldn_t Afford Rent_p3.png',
      'assets/projects/They Couldn_t Afford Rent_p4.png'
    ],
    thumbs: [
      'assets/thumbs/They Couldn_t Afford Rent_p1.webp',
      'assets/thumbs/They Couldn_t Afford Rent_p2.webp',
      'assets/thumbs/They Couldn_t Afford Rent_p3.webp',
      'assets/thumbs/They Couldn_t Afford Rent_p4.webp'
    ],
    desc: 'A gripping 4-part visual narrative recounting the humble beginnings of Airbnb. Tanishka combined raw pencil sketch artwork, torn paper textural collage, bold red-and-black contrast, and vintage election cereal cutouts (Obama O’s) to build high viewer retention and educational engagement for E-Cell IIT Bombay\'s National Entrepreneurship Challenge.',
    tags: ['Collage Surrealism', 'Storytelling', 'Instagram Carousel', 'High Retention', 'Hand-drawn Aesthetics']
  },
  'blockchain-blitz': {
    title: 'Blockchain Blitz — Flagship Tech Conclave',
    category: 'Event Branding & Poster Design',
    client: 'LNCTE E-Cell Flagship Event',
    format: 'Digital Poster & Print A3 (4:5 Ratio)',
    pdfUrl: 'LNCTE ECELL PRESENTS.pdf',
    slides: [
      'assets/projects/LNCTE ECELL PRESENTS_p1.png'
    ],
    thumbs: [
      'assets/thumbs/LNCTE ECELL PRESENTS_p1.webp'
    ],
    desc: 'Flagship event poster crafted for the college\'s premier blockchain and Web3 summit. Features hypnotic 3D undulating vector waves rendered in cyber-cyan and electric violet, high-readability Swiss typography hierarchy, integrated registration QR code, and clear breakdown of event highlights (Keynote, Panel, Workshop, Networking).',
    tags: ['Cyber Synth', '3D Mesh Waves', 'Event Identity', 'QR Integration', 'Modern Sans Typography']
  },
  'pass-reveal': {
    title: '"Get Your Pass!" — E-Summit \'25 Ticket Launch',
    category: 'Event Promotion & Campaign',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Social Media Announcement Poster',
    pdfUrl: '1.jpg.jpeg',
    slides: [
      'assets/projects/poster_1.jpg'
    ],
    thumbs: [
      'assets/thumbs/poster_1.webp'
    ],
    desc: 'A pop-brutalist ticket announcement poster designed with graph-paper grid backdrops, torn paper borders, 3D extruded "GET YOUR PASS!" typography, pink event ticket stickers, and a prominent call-to-action pricing card to drive immediate pass conversions.',
    tags: ['Pop Brutalism', 'Sticker Collages', 'Conversion Design', 'Event Passes', 'Tactile Textures']
  },
  'case-study-comp': {
    title: 'Case Study Competition — Spark to Change',
    category: 'Competition Banner & Social Creative',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Instagram Feed & Story Creative',
    pdfUrl: 'WhatsApp Image 2026-10-07 at 10.54.09 PM.jpeg',
    slides: [
      'assets/projects/poster_whatsapp.jpg'
    ],
    thumbs: [
      'assets/thumbs/poster_whatsapp.webp'
    ],
    desc: 'High-contrast event graphic celebrating the Case Study Competition. Utilizing bold angled typography badges, vibrant purple and radiant yellow complementary colors, 3D floating toruses, and an easily scannable 2-round submission process to boost team registrations.',
    tags: ['3D Accents', 'Bold Angles', 'Prize Badge (₹15,000)', 'Competition Roadmap', 'Vibrant Contrast']
  },
  'the-spark': {
    title: '"The Spark: Finding a Startup Idea" — Editorial Deck',
    category: 'Keynote & Editorial Presentation',
    client: 'LNCTE E-Cell Editorial Media',
    format: '16:9 Presentation Slide & Blog Cover',
    pdfUrl: 'PRESENTATION.pdf.pdf',
    slides: [
      'assets/projects/PRESENTATION_p1.png'
    ],
    thumbs: [
      'assets/thumbs/PRESENTATION_p1.webp'
    ],
    desc: 'Editorial 16:9 keynote slide and digital blog header. Showcases a surrealist incandescent lightbulb-head suited figure, film-strip accent, torn paper bottom horizon, and diagonal crimson block cutting through charcoal slate texture.',
    tags: ['16:9 Keynote', 'Surrealist Business Collage', 'Editorial Banner', 'Film Strip Motif', 'Diagonal Layout']
  },
  'comedy-teaser': {
    title: '"Someone Funny Is Coming..." — Comedy Night Teaser',
    category: 'Campaign & Teaser Creative',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'High-Resolution Teaser Poster',
    pdfUrl: 'coming.pdf',
    slides: [
      'assets/projects/coming_p1.png'
    ],
    thumbs: [
      'assets/thumbs/coming_p1.webp'
    ],
    desc: 'High-energy retro teaser poster building excitement for the celebrity stand-up comedy performance at E-Summit. Uses a striking canary yellow silhouette on deep starry red, vintage studio microphones with intricate mesh detail, and textured distressed headline typography.',
    tags: ['Retro Pop-Art', 'Mystery Silhouette', 'Vintage Halftone', 'Celebrity Teaser', 'Distressed Type']
  },
  'bulk-reveal': {
    title: '"We\'ve Got Something For You" — Competition Dates',
    category: 'Teaser & Announcement Poster',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Announcement Poster',
    pdfUrl: 'BULK.pdf',
    slides: [
      'assets/projects/BULK_p1.png'
    ],
    thumbs: [
      'assets/thumbs/BULK_p1.webp'
    ],
    desc: 'Minimalist, luxurious teaser design spotlighting a 3D crimson satin cloth draped gracefully over a mysterious pedestal under dramatic studio lighting. Designed to spark curiosity and conversation before the full event dates launch.',
    tags: ['3D Fabric Physics', 'Crimson Satin', 'Minimalist Drama', 'Teaser Campaign', 'Studio Lighting']
  }
};

// State Variables
let currentProjectId = null;
let currentSlideIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavbar();
  initFilters();
  initProjectCards();
  initModal();
  initContactForm();
});

/* -------------------------------------------------------------
   Custom Interactive Cursor Glow
   ------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const glow = document.getElementById('cursorGlow');
  if (!dot || !glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    requestAnimationFrame(animateGlow);
  }
  requestAnimationFrame(animateGlow);

  // Hover scale on interactive elements
  const interactives = document.querySelectorAll('a, button, .project-card, .swatch-card, input, textarea, select');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      glow.style.width = '64px';
      glow.style.height = '64px';
      glow.style.borderColor = 'rgba(255, 42, 95, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      glow.style.width = '40px';
      glow.style.height = '40px';
      glow.style.borderColor = 'rgba(255, 42, 95, 0.45)';
    });
  });
}

/* -------------------------------------------------------------
   Navbar & Mobile Menu
   ------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* -------------------------------------------------------------
   Category Filter System
   ------------------------------------------------------------- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   Project Card Clicks
   ------------------------------------------------------------- */
function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-id');
      if (projectId && projectsData[projectId]) {
        openModal(projectId);
      }
    });
  });
}

/* -------------------------------------------------------------
   Lightbox Modal & Carousel Controller
   ------------------------------------------------------------- */
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('slidePrevBtn');
  const nextBtn = document.getElementById('slideNextBtn');

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
  });
}

function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  currentProjectId = projectId;
  currentSlideIndex = 0;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalClient = document.getElementById('modalClient');
  const modalFormat = document.getElementById('modalFormat');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTagsContainer');
  const modalPdfBtn = document.getElementById('modalPdfBtn');

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalClient.textContent = project.client;
  modalFormat.textContent = project.format;
  modalDesc.textContent = project.desc;

  if (project.pdfUrl) {
    modalPdfBtn.href = project.pdfUrl;
    modalPdfBtn.style.display = 'inline-flex';
  } else {
    modalPdfBtn.style.display = 'none';
  }

  // Populate tags
  modalTags.innerHTML = '';
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  // Setup slider
  renderSlide(0);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function renderSlide(index) {
  const project = projectsData[currentProjectId];
  if (!project) return;

  currentSlideIndex = index;
  const mainImg = document.getElementById('modalMainImg');
  const sliderNav = document.getElementById('sliderNav');
  const counter = document.getElementById('slideCounter');
  const thumbsStrip = document.getElementById('modalThumbsStrip');

  mainImg.style.opacity = '0.3';
  setTimeout(() => {
    mainImg.src = project.slides[currentSlideIndex];
    mainImg.alt = `${project.title} - Slide ${currentSlideIndex + 1}`;
    mainImg.style.opacity = '1';
  }, 100);

  // If multiple slides, show controls and thumbs
  if (project.slides.length > 1) {
    sliderNav.classList.add('active');
    counter.textContent = `${currentSlideIndex + 1} / ${project.slides.length}`;

    thumbsStrip.innerHTML = '';
    project.thumbs.forEach((thumb, i) => {
      const img = document.createElement('img');
      img.src = thumb;
      img.alt = `Thumb ${i + 1}`;
      img.className = `modal-thumb-mini ${i === currentSlideIndex ? 'active' : ''}`;
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        renderSlide(i);
      });
      thumbsStrip.appendChild(img);
    });
  } else {
    sliderNav.classList.remove('active');
    thumbsStrip.innerHTML = '';
  }
}

function nextSlide() {
  const project = projectsData[currentProjectId];
  if (!project || project.slides.length <= 1) return;
  const nextIdx = (currentSlideIndex + 1) % project.slides.length;
  renderSlide(nextIdx);
}

function prevSlide() {
  const project = projectsData[currentProjectId];
  if (!project || project.slides.length <= 1) return;
  const prevIdx = (currentSlideIndex - 1 + project.slides.length) % project.slides.length;
  renderSlide(prevIdx);
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function closeModalAndContact() {
  closeModal();
}

/* -------------------------------------------------------------
   Color Swatch Copy
   ------------------------------------------------------------- */
function copyHex(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Copied ${hex} to clipboard!`);
  }).catch(() => {
    showToast(`Color code: ${hex}`);
  });
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* -------------------------------------------------------------
   Contact Form & Inquiry Sender
   ------------------------------------------------------------- */
function initContactForm() {
  const waBtn = document.getElementById('sendWhatsAppBtn');
  const mailBtn = document.getElementById('sendEmailBtn');

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!data) return;

      const message = `Hello Tanishka! My name is ${data.name}.\n\n` +
        `I am reaching out regarding a design project:\n` +
        `• Project Type: ${data.projectType}\n` +
        `• Timeline: ${data.timeline || 'Flexible'}\n` +
        `• Brief: ${data.details}\n\n` +
        `Looking forward to collaborating with you!`;

      const waUrl = `https://wa.me/917643921187?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp with your brief...');
    });
  }

  if (mailBtn) {
    mailBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!data) return;

      const subject = `Design Inquiry: ${data.projectType} - ${data.name}`;
      const body = `Hi Tanishka,\n\n` +
        `My name is ${data.name}.\n\n` +
        `Project Type: ${data.projectType}\n` +
        `Timeline: ${data.timeline || 'Flexible'}\n\n` +
        `Project Brief:\n${data.details}\n\n` +
        `Best regards,\n${data.name}`;

      const mailUrl = `mailto:tanishkashrivastav@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailUrl;
      showToast('Opening email client...');
    });
  }
}

function getFormData() {
  const name = document.getElementById('clientName').value.trim();
  const projectType = document.getElementById('projectType').value;
  const timeline = document.getElementById('timeline').value.trim();
  const details = document.getElementById('projectDetails').value.trim();

  if (!name) {
    showToast('Please enter your name or organization.');
    document.getElementById('clientName').focus();
    return null;
  }

  if (!details) {
    showToast('Please provide a brief description of your project.');
    document.getElementById('projectDetails').focus();
    return null;
  }

  return { name, projectType, timeline, details };
}
