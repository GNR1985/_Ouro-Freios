   class Slideshow {
            constructor(slide) {
                this.slide = slide;
                this.items = this.slide.querySelectorAll('.slide-items img');
                this.active = 0;
                this.init();
            }

            prev() {
                this.activeSlide(this.active - 1);
            }

            next() {
                this.activeSlide(this.active + 1);
            }

            activeSlide(index) {
                this.items[this.active].classList.remove('active');
                this.active = (index + this.items.length) % this.items.length;
                this.items[this.active].classList.add('active');
            }

            addNavigation() {
                const prevBtn = this.slide.querySelector('.slide-prev');
                const nextBtn = this.slide.querySelector('.slide-next');
                prevBtn.addEventListener('click', this.prev.bind(this));
                nextBtn.addEventListener('click', this.next.bind(this));
            }

            init() {
                this.addNavigation();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const slide = document.querySelector('[data-slide="slide"]');
            if (slide) {
                new Slideshow(slide);
            }
        });

        // Script para mostrar/ocultar o modal
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }