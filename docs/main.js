/* main.js */
document.addEventListener('DOMContentLoaded', () => {
    // --- Lightbox Logic ---
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const closeBtn = document.getElementById('lb-close');

    if (lb && lbImg && closeBtn) {
        function openLightbox(src, alt) {
            if (!src || src === 'undefined') return;
            lbImg.src = src;
            lbImg.alt = alt || '';
            lb.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeLightbox() {
            lb.style.display = 'none';
            lbImg.src = '';
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Attach click to all images with class 'preview-img'
        document.querySelectorAll('.preview-img').forEach(el => {
            el.addEventListener('click', () => openLightbox(el.src, el.alt));
        });

        closeBtn.addEventListener('click', closeLightbox);
        
        // Close on background click
        lb.addEventListener('click', (e) => {
            if (e.target === lb) closeLightbox();
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});