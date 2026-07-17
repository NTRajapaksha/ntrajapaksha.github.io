// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      if (entry.target.classList.contains("section-card")) {
        // Animate skill progress bars
        entry.target
          .querySelectorAll(".skill-progress")
          .forEach((bar, index) => {
            setTimeout(() => {
              const style = bar.getAttribute("style");
              if (style && style.match(/width:\s*(\d+)%/)) {
                bar.style.width = style.match(/width:\s*(\d+)%/)[1] + "%";
              }
            }, index * 200);
          });

        // Animate education cards
        entry.target
          .querySelectorAll(".education-card")
          .forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 300);
          });

        // Animate soft skill cards
        entry.target
          .querySelectorAll(".soft-skill-card")
          .forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          });

        // Animate project cards
        entry.target
          .querySelectorAll(".project-card")
          .forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          });

        // Animate achievement cards
        entry.target
          .querySelectorAll(".achievement-card")
          .forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          });

        // Animate article cards
        entry.target
          .querySelectorAll(".article-card")
          .forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          });
      }
    }
  });
}, observerOptions);

// Initialize observer on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Observe elements for animation
  document
    .querySelectorAll(
      ".section-card, .project-card, .education-card, .soft-skill-card, .achievement-card, .article-card"
    )
    .forEach((element) => {
      observer.observe(element);
    });

  // Animate social buttons
  const socialBtns = document.querySelectorAll(".social-btn");
  socialBtns.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("visible");
    }, 1500 + index * 200);
  });

  // Animate profile image
  setTimeout(() => {
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
      profileImg.classList.add("visible");
    }
  }, 800);

  // Certification data
  setupCertifications();

  // Setup smooth scrolling
  setupSmoothScroll();

  // Setup project reveal functionality
  setupProjectReveal();

  // Setup article reveal functionality
  setupArticleReveal();

  setupSkillTagAnimation();

  setupActiveNavigation();

  // Setup project filtering
  setupProjectFilters();

  // Setup mobile scroll glow effect
  if (window.innerWidth <= 768) {
    setupMobileGlow();
  }

  // Initialize New Libraries
  initTypewriter();
  initParticles();
  
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
});

// Setup certifications
function setupCertifications() {
  const certifications = [
    { 
      title: "Microsoft Certified: Azure Data Scientist Associate certification", 
      logo: "images/logos/ms.webp", 
      link: "#", 
      description: "Demonstrates expertise in applying data science and machine learning to implement and run machine learning workloads on Azure."
    },
    { title: "MLOps Specialization offered by Duke University", logo: "images/logos/duke.png", link: "#" },
    { title: "Google Data Analytics Professional Certificate", logo: "images/logos/google.webp", link: "#" },
    { title: "Google Business Intelligence Professional Certificate", logo: "images/logos/google.webp", link: "#" },
    { title: "Deep Learning Specialization - DeepLearning.AI", logo: "images/logos/dl.webp", link: "#" },
    { title: "Machine Learning Specialization - Stanford University", logo: "images/logos/stanford.png", link: "#" },
    { title: "Applied Machine Learning in Python - University of Michigan", logo: "images/logos/michigan.png", link: "#" },
    { title: "AI/ML Engineer - Stage 1 & 2 - SLIIT", logo: "images/logos/sliit.jpeg", link: "#" },
    { title: "Machine Learning in Production - DeepLearning.AI", logo: "images/logos/dl.webp", link: "#" },
    { title: "Machine Learning on Google Cloud Specialization", logo: "images/logos/google.webp", link: "#" },
    { title: "Google Advanced Data Analytics Professional Certificate", logo: "images/logos/google.webp", link: "#" },
    { title: "Microsoft Power BI Data Analyst Professional Certificate", logo: "images/logos/ms.webp", link: "#" },
    { title: "Generative AI with Large Language Models - DeepLearning.AI", logo: "images/logos/dl.webp", link: "#" },
    { title: "Mathematics for Machine Learning and Data Science Specialization - DeepLearning.AI", logo: "images/logos/dl.webp", link: "#" },
    { title: "Introduction to Statistics - Stanford University", logo: "images/logos/stanford.png", link: "#" },
    { title: "Introduction to Data Science in Python - University of Michigan", logo: "images/logos/michigan.png", link: "#" },
    { title: "Google AI Essentials - Google", logo: "images/logos/google.webp", link: "#" },
    { title: "AWS Fundamentals Specialization - Amazon Web Services (AWS)", logo: "images/logos/aws.jpg", link: "#" },
    { title: "Introduction to Machine Learning on AWS", logo: "images/logos/aws.jpg", link: "#" },
    { title: "Azure Fundamentals - Simplilearn", logo: "images/logos/sl.webp", link: "#" },
    { title: "Exploratory Data Analysis for Machine Learning - IBM", logo: "images/logos/ibm.webp", link: "#" },
    { title: "Databases and SQL for Data Science with Python - IBM", logo: "images/logos/ibm.webp", link: "#" },
    { title: "TensorFlow - Keras Bootcamp - OpenCV University", logo: "images/logos/opencv.webp", link: "#" },
    { title: "Introduction to Git and GitHub - Google", logo: "images/logos/google.webp", link: "#" },
  ];

  const certScroll = document.getElementById("certScroll");
  const showMoreCertsBtn = document.getElementById("showMoreCerts");

  if (certScroll && showMoreCertsBtn) {
    // Clear any existing content
    certScroll.innerHTML = "";

    // Create certification items
    certifications.forEach((cert) => {
      const certDiv = document.createElement("div");
      certDiv.className = "cert-item mb-3 p-3 rounded bg-glass d-flex align-items-center justify-content-between";
      
      const logoHtml = cert.logo 
        ? `<img src="${cert.logo}" alt="Logo" style="width: 45px; height: 45px; object-fit: contain;" class="me-3 bg-white rounded p-1">` 
        : `<div class="me-3 d-flex align-items-center justify-content-center bg-white rounded" style="width: 45px; height: 45px;"><i class="fas fa-certificate text-primary fa-lg"></i></div>`;
      
      certDiv.innerHTML = `
            <div class="d-flex align-items-center">
                ${logoHtml}
                <div>
                  <p class="mb-0 fw-medium">${cert.title}</p>
                  ${cert.description ? `<small class="text-white-50 d-block mt-1" style="font-size: 0.85rem; line-height: 1.4;">${cert.description}</small>` : ''}
                </div>
            </div>
            <div class="d-flex gap-2 ms-3 flex-shrink-0 flex-wrap justify-content-end mt-2 mt-sm-0">
                ${cert.pdf ? `<a href="${cert.pdf}" class="btn btn-sm btn-outline-info rounded-pill" target="_blank" rel="noopener noreferrer">View Certificate</a>` : ''}
                <a href="${cert.link}" class="btn btn-sm btn-outline-light rounded-pill ${cert.link === '#' ? 'd-none' : ''}" target="_blank" rel="noopener noreferrer">Show credential</a>
            </div>
        `;
      certScroll.appendChild(certDiv);
    });

    let isExpanded = false;
    const initialVisibleCount = 3;
    const certItemsElements = document.querySelectorAll(".cert-item");
    const certItems = Array.from(certItemsElements);

    // Initial state: first 3 are visible
    certItems.forEach((cert, index) => {
      if (index < initialVisibleCount) {
        setTimeout(() => {
          cert.classList.add("visible");
          cert.style.opacity = "1";
          cert.style.transform = "translateY(0)";
        }, index * 200);
      }
    });

    const hiddenCerts = certItems.slice(initialVisibleCount);
    
    // Create animatable wrapper for hidden certs
    const wrapper = document.createElement("div");
    wrapper.className = "certs-wrapper";
    wrapper.style.overflow = "hidden";
    wrapper.style.transition = "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    wrapper.style.height = "0px";

    // Move hidden certs into wrapper
    hiddenCerts.forEach(cert => {
      cert.style.display = "block";
      cert.style.opacity = "0";
      cert.style.transform = "translateY(10px)";
      cert.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      wrapper.appendChild(cert);
    });

    certScroll.appendChild(wrapper);

    // Setup show more/less functionality
    showMoreCertsBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      certScroll.classList.toggle("expanded");

      if (isExpanded) {
        // Expand
        wrapper.style.height = wrapper.scrollHeight + "px";

        // Stagger fade in
        hiddenCerts.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 50 + index * 30);
        });

        setTimeout(() => {
          if (isExpanded) wrapper.style.height = "auto";
        }, 400);

      } else {
        // Contract
        wrapper.style.height = wrapper.scrollHeight + "px";
        
        // Scroll back up gently
        const certSection = document.getElementById("certifications");
        if (certSection) {
          certSection.scrollIntoView({ behavior: "smooth" });
        }

        // Force reflow
        wrapper.offsetHeight;

        // Fade all out
        hiddenCerts.forEach((item) => {
          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";
        });

        // Shrink height
        wrapper.style.height = "0px";
      }

      showMoreCertsBtn.innerHTML = isExpanded
        ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
        : 'Show More <i class="fas fa-chevron-down ms-2"></i>';
    });
  }
}

// Setup smooth scrolling
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Setup active navigation highlighting on scroll (Optimized for mobile)
function setupActiveNavigation() {
  const navLinks = document.querySelectorAll(".floating-nav a");
  const sections = Array.from(document.querySelectorAll("section[id]"));
  
  let sectionData = [];
  
  function calculatePositions() {
    sectionData = sections.map(section => ({
      id: section.getAttribute("id"),
      top: section.offsetTop - 150,
      bottom: section.offsetTop + section.offsetHeight - 150
    }));
  }

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    let currentId = "";

    for (let i = 0; i < sectionData.length; i++) {
        if (scrollY >= sectionData[i].top && scrollY < sectionData[i].bottom) {
            currentId = sectionData[i].id;
            break;
        }
    }

    // Only update DOM if changed
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
          if(!link.classList.contains("active")) {
              link.classList.add("active");
              
              // Auto scroll logic for mobile carousel
              if (window.innerWidth <= 768) {
                  const navScroll = document.querySelector('.floating-nav .nav-scroll');
                  if (navScroll && navScroll.contains(link)) {
                      // Calculate the relative position to center the active link
                      const linkLeft = link.offsetLeft;
                      const scrollCenter = navScroll.clientWidth / 2;
                      const linkCenter = link.clientWidth / 2;
                      
                      navScroll.scrollTo({
                          left: linkLeft - scrollCenter + linkCenter,
                          behavior: 'smooth'
                      });
                  }
              }
          }
      } else {
          if(link.classList.contains("active")) link.classList.remove("active");
      }
    });
  }

  // Initial calculation
  // Use setTimeout to ensure DOM is fully painted and sized
  setTimeout(() => {
      calculatePositions();
      updateActiveNav();
  }, 100);

  // Listen for scroll events with requestAnimationFrame and passive flag
  let ticking = false;
  window.addEventListener("scroll", () => {
      if (!ticking) {
          window.requestAnimationFrame(() => {
              updateActiveNav();
              ticking = false;
          });
          ticking = true;
      }
  }, { passive: true });
  
  // Recalculate on resize
  window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
          calculatePositions();
          updateActiveNav();
      });
  }, { passive: true });
}

// Setup project reveal functionality
function setupProjectReveal() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const projectsContainer = document.getElementById("projectsContainer");
  
  if (!showMoreBtn || !projectsContainer) return;

  const allProjects = Array.from(projectsContainer.querySelectorAll(".project-item"));
  const VISIBLE_COUNT = 4;
  
  if (allProjects.length <= VISIBLE_COUNT) {
    showMoreBtn.style.display = "none";
    return;
  }
  
  allProjects.forEach((project, index) => {
    if (index >= VISIBLE_COUNT) {
      project.classList.add("hidden-project");
    }
  });

  const hiddenProjectsElements = document.querySelectorAll(".hidden-project");
  let projectsVisible = false;

  if (showMoreBtn && hiddenProjectsElements.length > 0) {
    // Convert to array for manipulation
    const hiddenProjects = Array.from(hiddenProjectsElements);
    const originalRow = hiddenProjects[0].closest(".row");

    // Create animatable wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "projects-wrapper";
    wrapper.style.overflow = "hidden";
    wrapper.style.transition = "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    wrapper.style.height = "0px";
    wrapper.style.padding = "0 4px"; // Prevent card border clipping at edges

    // Create an inner row to maintain Bootstrap grid behavior
    const innerRow = document.createElement("div");
    innerRow.className = "row g-4 justify-content-center mt-0";

    // Move hidden projects to inner row
    hiddenProjects.forEach((project) => {
      // Initialize state
      project.style.display = "block";  // Block layout is required for scrollHeight calculation
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
      project.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      innerRow.appendChild(project);
    });

    wrapper.appendChild(innerRow);
    // Insert wrapper into the DOM directly after the primary row
    originalRow.parentNode.insertBefore(wrapper, originalRow.nextSibling);

    showMoreBtn.addEventListener("click", () => {
      projectsVisible = !projectsVisible;

      if (projectsVisible) {
        // Expand phase:
        const targetHeight = innerRow.scrollHeight;
        wrapper.style.height = targetHeight + "px";

        // Stagger fade in
        hiddenProjects.forEach((project, index) => {
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
          }, 50 + index * 40); // Fast, smooth stagger
        });

        // Set to auto after transition so resizing doesn't crop, and switch overflow
        // to visible so card box-shadows/borders are not clipped
        setTimeout(() => {
          if (projectsVisible) {
            wrapper.style.height = "auto";
            wrapper.style.overflow = "visible";
          }
        }, 500);

      } else {
        // Collapse phase:
        // Switch overflow back to hidden first so animation clips correctly
        wrapper.style.overflow = "hidden";
        // Set fixed height first from auto to trigger CSS transition
        wrapper.style.height = innerRow.scrollHeight + "px";

        // Optionally smooth scroll to the top of projects section so you don't lose context
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }

        // Force reflow
        wrapper.offsetHeight; 

        // Fade all out simultaneously 
        hiddenProjects.forEach((project) => {
          project.style.opacity = "0";
          project.style.transform = "translateY(20px)";
        });

        // Collapse wrapper smoothly
        wrapper.style.height = "0px";
      }

      showMoreBtn.innerHTML = projectsVisible
        ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
        : 'Show More Projects <i class="fas fa-chevron-down ms-2"></i>';

      showMoreBtn.classList.add("animate__animated", "animate__pulse");
      setTimeout(() => {
        showMoreBtn.classList.remove("animate__animated", "animate__pulse");
      }, 1000);
    });
  }
}

// Setup article reveal functionality
function setupArticleReveal() {
  const showMoreBtn = document.getElementById("showMoreArticlesBtn");
  const articlesContainer = document.getElementById("articlesContainer");

  if (!showMoreBtn || !articlesContainer) return;

  const allArticles = Array.from(articlesContainer.querySelectorAll(".col-md-6"));

  if (allArticles.length <= 4) {
    showMoreBtn.style.display = "none";
    return;
  }

  showMoreBtn.style.display = "inline-block";
  let articlesVisible = false;

  const hiddenArticles = allArticles.slice(4);

  const wrapper = document.createElement("div");
  wrapper.className = "articles-wrapper w-100";
  wrapper.style.overflow = "hidden";
  wrapper.style.transition = "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  wrapper.style.height = "0px";

  const innerRow = document.createElement("div");
  innerRow.className = "row justify-content-center w-100 m-0";

  hiddenArticles.forEach(article => {
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";
    article.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    innerRow.appendChild(article);
  });

  wrapper.appendChild(innerRow);
  articlesContainer.appendChild(wrapper);

  // Recalculate on resize
  window.addEventListener("resize", () => {
    if (articlesVisible) {
      wrapper.style.height = innerRow.scrollHeight + "px";
    }
  }, { passive: true });

  showMoreBtn.addEventListener("click", () => {
    articlesVisible = !articlesVisible;

    if (articlesVisible) {
      const targetHeight = innerRow.scrollHeight;
      wrapper.style.height = targetHeight + "px";

      hiddenArticles.forEach((article, index) => {
        setTimeout(() => {
          article.style.opacity = "1";
          article.style.transform = "translateY(0)";
        }, 50 + index * 40);
      });
    } else {
      wrapper.style.height = innerRow.scrollHeight + "px";
      void wrapper.offsetHeight; // Force reflow

      hiddenArticles.forEach(article => {
        article.style.opacity = "0";
        article.style.transform = "translateY(20px)";
      });

      wrapper.style.height = "0px";
    }

    showMoreBtn.innerHTML = articlesVisible
      ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
      : 'Show More Articles <i class="fas fa-chevron-down ms-2"></i>';

    showMoreBtn.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => {
      showMoreBtn.classList.remove("animate__animated", "animate__pulse");
    }, 1000);
  });
}

// Setup project filtering functionality
// Setup project filtering functionality
// Setup project filtering functionality
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const wrapper = document.querySelector(".projects-wrapper");
  const projectsContainer = document.getElementById("projectsContainer");
  let isFilteredMode = false;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      if (filterValue === "all") {
        if (showMoreBtn) showMoreBtn.style.display = "inline-block";
        
        if (isFilteredMode && wrapper) {
            const innerRow = wrapper.querySelector(".row");
            if (innerRow && projectsContainer) {
                const hiddenProjects = document.querySelectorAll(".project-item.hidden-project");
                hiddenProjects.forEach(p => innerRow.appendChild(p));
            }
            wrapper.style.display = "block";
            isFilteredMode = false;
        }

        const isExpanded = showMoreBtn && showMoreBtn.innerHTML.includes('Show Less');

        const projectItems = document.querySelectorAll(".project-item");
        projectItems.forEach(item => {
          if (item._hideTimeout) clearTimeout(item._hideTimeout);
          
          item.style.display = "block";
          
          if (item.classList.contains("hidden-project")) {
            // Restore proper opacity/transform state based on whether "Show More" is currently expanded
            setTimeout(() => {
                if (isExpanded) {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0) scale(1)";
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "translateY(20px)";
                }
            }, 20);
          } else {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0) scale(1)";
            }, 20);
          }
        });

        if (wrapper) {
            if (isExpanded) {
                wrapper.style.height = "auto";
                wrapper.style.overflow = "visible";
            } else {
                wrapper.style.height = "0px";
                wrapper.style.overflow = "hidden";
            }
        }

      } else {
        if (showMoreBtn) showMoreBtn.style.display = "none";
        
        if (!isFilteredMode && wrapper) {
            const innerRow = wrapper.querySelector(".row");
            if (innerRow && projectsContainer) {
                while(innerRow.firstChild) {
                    projectsContainer.appendChild(innerRow.firstChild);
                }
            }
            wrapper.style.display = "none";
            isFilteredMode = true;
        }

        const projectItems = document.querySelectorAll(".project-item");
        projectItems.forEach(item => {
          if (item._hideTimeout) clearTimeout(item._hideTimeout);

          if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0) scale(1)";
            }, 20);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.8)";
            item._hideTimeout = setTimeout(() => {
              item.style.display = "none";
            }, 400); 
          }
        });
      }
    });
  });
}

// Removed redundant and unoptimized setupFloatingNav listener

function setupSkillTagAnimation() {
  const skillTags = document.querySelectorAll(".skill-tag");

  skillTags.forEach((tag, index) => {
    setTimeout(() => {
      tag.style.opacity = "0";
      tag.style.transform = "translateY(20px)";
      tag.style.transition = "all 0.5s ease";

      setTimeout(() => {
        tag.style.opacity = "1";
        tag.style.transform = "translateY(0)";
      }, index * 100);
    }, 500);
  });
}

function setupMobileGlow() {
  const glowObserverOptions = {
    threshold: 0.3,
    rootMargin: "-25% 0px -25% 0px"
  };

  const glowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-glow");
      } else {
        entry.target.classList.remove("active-glow");
      }
    });
  }, glowObserverOptions);

  document
    .querySelectorAll(".project-card, .article-card, .achievement-card, .skill-item, .cert-item")
    .forEach((el) => {
      glowObserver.observe(el);
    });
}

// ===== NEW LIBRARY INITIALIZATIONS =====

function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  if (typewriterElement && typeof Typewriter !== 'undefined') {
    new Typewriter(typewriterElement, {
      strings: ['Data Scientist', 'AI/ML Engineer', 'Problem Solver'],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50
    });
  }
}

function initParticles() {
  if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Completely disable particles on mobile for performance
    const particleCount = 80;
    
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": particleCount, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00f2fe" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4facfe",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
  }
}


