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
      }
    }
  });
}, observerOptions);

// Initialize observer on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Observe elements for animation
  document
    .querySelectorAll(
      ".section-card, .project-card, .education-card, .soft-skill-card, .achievement-card"
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

  //Setup skill tag animations
  setupSkillTagAnimation();

  setupActiveNavigation();
});

// Setup certifications
function setupCertifications() {
  const certifications = [
    "MLOps Specialization offered by Duke University"
    "Google Data Analytics Professional Certificate",
    "Google Business Intelligence Professional Certificate",
    "Deep Learning Specialization - DeepLearning.AI",
    "Machine Learning Specialization - Stanford University",
    "Applied Machine Learning in Python - University of Michigan",
    "AI/ML Engineer - Stage 1 & 2 - SLIIT",
    "Machine Learning in Production - DeepLearning.AI",
    "Machine Learning on Google Cloud Specialization",
    "Google Advanced Data Analytics Professional Certificate",
    "Microsoft Power BI Data Analyst Professional Certificate",
    "Generative AI with Large Language Models - DeepLearning.AI",
    "Mathematics for Machine Learning and Data Science Specialization - DeepLearning.AI",
    "Introduction to Statistics - Stanford University",
    "Introduction to Data Science in Python - University of Michigan",
    "Google AI Essentials - Google",
    "AWS Fundamentals Specialization - Amazon Web Services (AWS)",
    "Introduction to Machine Learning on AWS",
    "Azure Fundamentals - Simplilearn",
    "Exploratory Data Analysis for Machine Learning - IBM",
    "Databases and SQL for Data Science with Python - IBM",
    "TensorFlow - Keras Bootcamp - OpenCV University",
    "Introduction to Git and GitHub - Google",
  ];

  const certScroll = document.getElementById("certScroll");
  const showMoreCertsBtn = document.getElementById("showMoreCerts");

  if (certScroll && showMoreCertsBtn) {
    // Clear any existing content
    certScroll.innerHTML = "";

    // Create certification items
    certifications.forEach((cert) => {
      const certDiv = document.createElement("div");
      certDiv.className = "cert-item";
      certDiv.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-certificate text-primary me-3"></i>
                <p class="mb-0">${cert}</p>
            </div>
        `;
      certScroll.appendChild(certDiv);
    });

    let isExpanded = false;

    // Initially show first 3 certifications (increased from 2)
    const initialVisibleCount = 3;
    const certItems = document.querySelectorAll(".cert-item");

    // Make first few certificates visible initially
    certItems.forEach((cert, index) => {
      if (index < initialVisibleCount) {
        setTimeout(() => {
          cert.classList.add("visible");
        }, index * 200);
      }
    });

    // Setup show more/less functionality
    showMoreCertsBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      certScroll.classList.toggle("expanded");

      if (isExpanded) {
        // Show all certifications with staggered animation
        certItems.forEach((item, index) => {
          if (index >= initialVisibleCount) {
            setTimeout(() => {
              item.classList.add("visible");
            }, (index - initialVisibleCount) * 100);
          }
        });
      } else {
        // Hide certifications beyond the initial count
        certItems.forEach((item, index) => {
          if (index >= initialVisibleCount) {
            item.classList.remove("visible");
          }
        });
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

// Setup active navigation highlighting on scroll
function setupActiveNavigation() {
  const navLinks = document.querySelectorAll(".floating-nav a");
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Offset for better triggering
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to current section's nav link
    if (current) {
      const activeLink = document.querySelector(
        `.floating-nav a[href="#${current}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", updateActiveNav);

  // Set initial active state
  updateActiveNav();
}

// Setup project reveal functionality
function setupProjectReveal() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenProjects = document.querySelectorAll(".hidden-project");
  let projectsVisible = false;

  if (showMoreBtn && hiddenProjects.length > 0) {
    showMoreBtn.addEventListener("click", () => {
      projectsVisible = !projectsVisible; // Toggle state first

      hiddenProjects.forEach((project, index) => {
        setTimeout(() => {
          if (projectsVisible) {
            project.classList.add("show");
            project.style.display = "block";
          } else {
            project.classList.remove("show");
            setTimeout(() => {
              project.style.display = "none";
            }, 500);
          }
        }, index * 200);
      });

      showMoreBtn.innerHTML = projectsVisible
        ? 'Show Less <i class="fas fa-chevron-up ms-2"></i>'
        : 'Show More Projects <i class="fas fa-chevron-down ms-2"></i>';

      showMoreBtn.classList.add("animate__animated", "animate__pulse");
      setTimeout(() => {
        showMoreBtn.classList.remove("animate__animated", "animate__pulse");
      }, 1000);

      // Optional: scroll to projects section when collapsing
      if (!projectsVisible) {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    // On load, ensure hidden projects are hidden
    hiddenProjects.forEach((project) => {
      project.classList.remove("show");
      project.style.display = "none";
    });
  }
}

// Update this function or add it if it doesn't exist
document.addEventListener("DOMContentLoaded", () => {
  // Existing code...

  // Setup floating navigation with achievement section
  setupFloatingNav();
});

// Add this new function to script.js
function setupFloatingNav() {
  // This assumes you have a floating-nav element in your HTML with nav links
  const navLinks = document.querySelectorAll(".floating-nav a");
  const sections = document.querySelectorAll("section");

  // Add active class to the current section's nav icon
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

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


