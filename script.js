// const images = ["./images/bring-her-back.jpeg", "./images/the naked gun.jpeg", "./images/i know what you did last summer.jpeg", "./images/mission impossible - the final reckoning.jpeg", "./images/smurfs.jpeg", "./images/how to train your dragon.jpeg"]

// let index = 0;
// const home = document.getElementById("home");

//   function changeBg() {
//     home.style.backgroundImage = `url(${images[index]})`;
//     index = (index + 1) % images.length;
//   }

//   changeBg(); // initial load
//   setInterval(changeBg, 5000); // change every 5 seconds

// Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Smooth Scroll
        function scrollToMovies() {
            document.getElementById('showtimes').scrollIntoView({ behavior: 'smooth' });
        }

        // Booking Modal
        function openBookingModal(movieName) {
            const modal = document.getElementById('booking-modal');
            const content = document.getElementById('booking-content');
            content.innerHTML = `
                <p class="text-gray-400 mb-4">Booking for: <span class="text-red-500 font-bold">${movieName}</span></p>
                
                <div class="space-y-4">
                    <select class="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none">
                        <option>Select Showtime</option>
                        <option>10:30 AM - Screen 1</option>
                        <option>2:45 PM - Screen 1</option>
                        <option>6:30 PM - Screen 1</option>
                        <option>9:45 PM - Screen 1</option>
                    </select>
                    
                    <div class="space-y-2">
                        <p class="text-sm text-gray-400">Select number of tickets:</p>
                        <div class="flex space-x-2">
                            <button class="px-4 py-2 bg-gray-800 rounded hover:bg-red-500">1</button>
                            <button class="px-4 py-2 bg-gray-800 rounded hover:bg-red-500">2</button>
                            <button class="px-4 py-2 bg-gray-800 rounded hover:bg-red-500">3</button>
                            <button class="px-4 py-2 bg-gray-800 rounded hover:bg-red-500">4</button>
                        </div>
                    </div>
                    
                    <button class="w-full ticket-btn text-white py-3 rounded-lg font-semibold">
                        Proceed to Checkout
                    </button>
                </div>
            `;
            modal.classList.remove('hidden');
        }

        function closeBookingModal() {
            document.getElementById('booking-modal').classList.add('hidden');
        }

        // Contact Form
        function handleContactForm(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            event.target.reset();
        }

        // Trailer Modal Functions
        function openTrailerModal(title, trailerUrl) {
            const modal = document.getElementById('trailer-modal');
            const iframe = document.getElementById('trailer-iframe');
            const titleElement = document.getElementById('trailer-title');
            
            iframe.src = trailerUrl;
            // console.log(iframe.src)
            titleElement.textContent = `${title} - Official Trailer`;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeTrailerModal() {
            const modal = document.getElementById('trailer-modal');
            const iframe = document.getElementById('trailer-iframe');
            
            iframe.src = '';
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('trailer-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeTrailerModal();
            }
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Showtimes day switching
        // function switchDay(day) {
        //     // Hide all showtimes
        //     document.getElementById('today-showtimes').classList.add('hidden');
        //     document.getElementById('tomorrow-showtimes').classList.add('hidden');
        //     document.getElementById('after-tomorrow-showtimes').classList.add('hidden');
            
        //     // Reset all buttons
        //     document.getElementById('today-btn').classList.remove('bg-red-600');
        //     document.getElementById('today-btn').classList.add('bg-gray-700');
        //     document.getElementById('tomorrow-btn').classList.remove('bg-red-600');
        //     document.getElementById('tomorrow-btn').classList.add('bg-gray-700');
        //     document.getElementById('after-tomorrow-btn').classList.remove('bg-red-600');
        //     document.getElementById('after-tomorrow-btn').classList.add('bg-gray-700');
            
        //     // Show selected day and highlight button
        //     document.getElementById(`${day}-showtimes`).classList.remove('hidden');
        //     document.getElementById(`${day}-btn`).classList.remove('bg-gray-700');
        //     document.getElementById(`${day}-btn`).classList.add('bg-amber-500');
        // }

        // Set today as default on page load
        // window.addEventListener('DOMContentLoaded', () => {
        //     switchDay('today');
        // });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.movie-card').forEach(card => {
            observer.observe(card);
        });