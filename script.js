/**
 * Tanishka Shrivastav - Portfolio Interactive Engine
 * ImageKit CDN Accelerated & Vercel Optimized
 */

// Project Data Registry with ImageKit CDN URLs
const projectsData = {
  'airbnb-carousel': {
    title: '"They Couldn’t Afford Rent..." — Airbnb Origin Story',
    category: 'Editorial & Social Media Storytelling',
    client: 'E-Cell IIT Bombay (NEC) & LNCTE E-Cell',
    format: '4-Slide Instagram Carousel (4:5 Ratio)',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/doc_They_Couldn_t_Afford_Rent.pdf',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_They_Couldn_t_Afford_Rent_p1.png',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_They_Couldn_t_Afford_Rent_p2.png',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_They_Couldn_t_Afford_Rent_p3.png',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_They_Couldn_t_Afford_Rent_p4.png'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_They_Couldn_t_Afford_Rent_p1.webp',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_They_Couldn_t_Afford_Rent_p2.webp',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_They_Couldn_t_Afford_Rent_p3.webp',
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_They_Couldn_t_Afford_Rent_p4.webp'
    ],
    desc: 'A gripping 4-part visual narrative recounting the humble beginnings of Airbnb. Tanishka combined raw pencil sketch artwork, torn paper textural collage, bold red-and-black contrast, and vintage election cereal cutouts (Obama O’s) to build high viewer retention and educational engagement for E-Cell IIT Bombay\'s National Entrepreneurship Challenge.',
    tags: ['Collage Surrealism', 'Storytelling', 'Instagram Carousel', 'High Retention', 'Hand-drawn Aesthetics']
  },
  'blockchain-blitz': {
    title: 'Blockchain Blitz — Flagship Tech Conclave',
    category: 'Event Branding & Poster Design',
    client: 'LNCTE E-Cell Flagship Event',
    format: 'Digital Poster & Print A3 (4:5 Ratio)',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/doc_LNCTE_ECELL_PRESENTS.pdf',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_LNCTE_ECELL_PRESENTS_p1.png'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_LNCTE_ECELL_PRESENTS_p1.webp'
    ],
    desc: 'Flagship event poster crafted for the college\'s premier blockchain and Web3 summit. Features hypnotic 3D undulating vector waves rendered in cyber-cyan and electric violet, high-readability Swiss typography hierarchy, integrated registration QR code, and clear breakdown of event highlights (Keynote, Panel, Workshop, Networking).',
    tags: ['Cyber Synth', '3D Mesh Waves', 'Event Identity', 'QR Integration', 'Modern Sans Typography']
  },
  'pass-reveal': {
    title: '"Get Your Pass!" — E-Summit \'25 Ticket Launch',
    category: 'Event Promotion & Campaign',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Social Media Announcement Poster',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_poster_1.jpg',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_poster_1.jpg'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_poster_1.webp'
    ],
    desc: 'A pop-brutalist ticket announcement poster designed with graph-paper grid backdrops, torn paper borders, 3D extruded "GET YOUR PASS!" typography, pink event ticket stickers, and a prominent call-to-action pricing card to drive immediate pass conversions.',
    tags: ['Pop Brutalism', 'Sticker Collages', 'Conversion Design', 'Event Passes', 'Tactile Textures']
  },
  'case-study-comp': {
    title: 'Case Study Competition — Spark to Change',
    category: 'Competition Banner & Social Creative',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Instagram Feed & Story Creative',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_poster_whatsapp.jpg',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_poster_whatsapp.jpg'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_poster_whatsapp.webp'
    ],
    desc: 'High-contrast event graphic celebrating the Case Study Competition. Utilizing bold angled typography badges, vibrant purple and radiant yellow complementary colors, 3D floating toruses, and an easily scannable 2-round submission process to boost team registrations.',
    tags: ['3D Accents', 'Bold Angles', 'Prize Badge (₹15,000)', 'Competition Roadmap', 'Vibrant Contrast']
  },
  'the-spark': {
    title: '"The Spark: Finding a Startup Idea" — Editorial Deck',
    category: 'Keynote & Editorial Presentation',
    client: 'LNCTE E-Cell Editorial Media',
    format: '16:9 Presentation Slide & Blog Cover',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/doc_PRESENTATION.pdf.pdf',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_PRESENTATION_p1.png'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_PRESENTATION_p1.webp'
    ],
    desc: 'Editorial 16:9 keynote slide and digital blog header. Showcases a surrealist incandescent lightbulb-head suited figure, film-strip accent, torn paper bottom horizon, and diagonal crimson block cutting through charcoal slate texture.',
    tags: ['16:9 Keynote', 'Surrealist Business Collage', 'Editorial Banner', 'Film Strip Motif', 'Diagonal Layout']
  },
  'comedy-teaser': {
    title: '"Someone Funny Is Coming..." — Comedy Night Teaser',
    category: 'Campaign & Teaser Creative',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'High-Resolution Teaser Poster',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/doc_coming.pdf',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_coming_p1.png'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_coming_p1.webp'
    ],
    desc: 'High-energy retro teaser poster building excitement for the celebrity stand-up comedy performance at E-Summit. Uses a striking canary yellow silhouette on deep starry red, vintage studio microphones with intricate mesh detail, and textured distressed headline typography.',
    tags: ['Retro Pop-Art', 'Mystery Silhouette', 'Vintage Halftone', 'Celebrity Teaser', 'Distressed Type']
  },
  'bulk-reveal': {
    title: '"We\'ve Got Something For You" — Competition Dates',
    category: 'Teaser & Announcement Poster',
    client: 'LNCT Group\'s E-Summit \'25',
    format: 'Announcement Poster',
    pdfUrl: 'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/doc_BULK.pdf',
    slides: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/proj_BULK_p1.png'
    ],
    thumbs: [
      'https://ik.imagekit.io/z7uqdpifg/tanu-portfolio/thumb_BULK_p1.webp'
    ],
    desc: 'Minimalist, luxurious teaser design spotlighting a 3D crimson satin cloth draped gracefully over a mysterious pedestal under dramatic studio lighting. Designed to spark curiosity and conversation before the full event dates launch.',
    tags: ['3D Fabric Physics', 'Crimson Satin', 'Minimalist Drama', 'Teaser Campaign', 'Studio Lighting']
  }
};

// Global state
let currentProjectId = null;
let currentSlideIndex = 0;

// Primary App Initialization
function initApp() {
  initNavbar();
  initFilters();
  initProjectCards();
  initModalEvents();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* -------------------------------------------------------------
   Custom Interactive Cursor Glow (Safe on all viewports)
   ------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const glow = document.getElementById('cursorGlow');
  if (!dot || !glow) return;

  // Only enable on desktop with fine mouse pointer
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    glow.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let glowX = -100;
  let glowY = -100;
  let hasMoved = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!hasMoved) {
      hasMoved = true;
      dot.style.display = 'block';
      glow.style.display = 'block';
      glowX = mouseX;
      glowY = mouseY;
    }

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateGlow() {
    if (hasMoved) {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    }
    requestAnimationFrame(animateGlow);
  }
  requestAnimationFrame(animateGlow);

  const interactives = document.querySelectorAll('a, button, .project-card, .swatch-card, input, textarea, select');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      glow.style.width = '60px';
      glow.style.height = '60px';
      glow.style.borderColor = 'rgba(255, 42, 95, 0.9)';
    });
    el.addEventListener('mouseleave', () => {
      glow.style.width = '38px';
      glow.style.height = '38px';
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
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
      }
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
   Project Card Event Registration
   ------------------------------------------------------------- */
function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const projectId = card.getAttribute('data-id');
      if (projectId && projectsData[projectId]) {
        openProjectModal(projectId);
      }
    });
  });
}

/* -------------------------------------------------------------
   Lightbox Modal & Carousel Controller (Global & Bulletproof)
   ------------------------------------------------------------- */
function initModalEvents() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Mobile swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = modal.querySelector('.modal-media-stage');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    }, { passive: true });
  }
}

function openProjectModal(projectId) {
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

  mainImg.style.opacity = '0.2';
  mainImg.src = project.slides[currentSlideIndex];
  mainImg.alt = `${project.title} - Slide ${currentSlideIndex + 1}`;
  
  mainImg.onload = () => {
    mainImg.style.opacity = '1';
  };
  mainImg.onerror = () => {
    // fallback if cdn is blocked
    mainImg.src = `assets/projects/${project.slides[currentSlideIndex].split('/').pop()}`;
    mainImg.style.opacity = '1';
  };

  // Multiple slides handling
  if (project.slides.length > 1) {
    sliderNav.classList.add('active');
    counter.textContent = `${currentSlideIndex + 1} / ${project.slides.length}`;

    thumbsStrip.innerHTML = '';
    project.thumbs.forEach((thumb, i) => {
      const img = document.createElement('img');
      img.src = thumb;
      img.alt = `Slide ${i + 1}`;
      img.className = `modal-thumb-mini ${i === currentSlideIndex ? 'active' : ''}`;
      img.onclick = (e) => {
        e.stopPropagation();
        renderSlide(i);
      };
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

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

// Expose globals for inline HTML event triggers
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.copyHex = copyHex;

/* -------------------------------------------------------------
   Color Swatch Copy
   ------------------------------------------------------------- */
function copyHex(hex) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(hex).then(() => {
      showToast(`Copied ${hex} to clipboard!`);
    }).catch(() => {
      showToast(`Color code: ${hex}`);
    });
  } else {
    showToast(`Color code: ${hex}`);
  }
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

      const waUrl = `https://wa.me/916264535307?text=${encodeURIComponent(message)}`;
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

      const mailUrl = `mailto:shrivastavat983@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
