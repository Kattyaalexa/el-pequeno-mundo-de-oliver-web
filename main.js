// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

// ==========================================
// GALERÍA
// ==========================================

const galleryContainer =
    document.getElementById("galleryGrid");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

if (galleryContainer && typeof gallery !== "undefined") {

    gallery.forEach(photo => {

        galleryContainer.innerHTML += `

            <div class="gallery-card">

                <img
                    src="${photo.image}"
                    alt="${photo.title ?? ""}"
                    loading="lazy"
                >

                <div class="gallery-info">

                    <div class="gallery-date">

                        📅 ${new Date(photo.date)
                            .toLocaleDateString(
                                "es-CO",
                                {

                                    day:"numeric",

                                    month:"long",

                                    year:"numeric"

                                }
                            )}

                    </div>

                    ${photo.title ? `

                        <div class="gallery-title">

                            ${photo.title}

                        </div>

                    ` : ""}

                </div>

            </div>

        `;

    });

    // --------------------------------------
    // Lightbox
    // --------------------------------------

    document
        .querySelectorAll(".gallery-card img")
        .forEach(img => {

            img.addEventListener("click", () => {

                lightboxImage.src = img.src;

                lightbox.classList.add("active");

            });

        });

}

// ==========================================
// CERRAR LIGHTBOX
// ==========================================

lightboxClose?.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox?.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});