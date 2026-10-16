
// Toggle Mobile Menu
        function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }

        // Handle Donation Click
        function donateAction(amount) {
            // Map amounts to Stripe links
            const stripeLinks = {
                5: "https://donate.stripe.com/14AfZhbis19uf2AcSlfYY0j",
                10: "https://donate.stripe.com/8x214n3Q03hCg6E7y1fYY0k",
                25: "https://donate.stripe.com/eVqcN52LW5pK07GbOhfYY0l",
                50: "https://donate.stripe.com/fZu00jfyI05q1bK3hLfYY0m",
                100: "https://donate.stripe.com/bJeaEXaeobO81bKdWpfYY0n",
                250: "https://donate.stripe.com/6oU00jcmw9G09Igg4xfYY0o",
                500: "https://donate.stripe.com/6oU28r1HSbO8g6EaKdfYY0p",
                1000: "https://donate.stripe.com/6oU3cv86gaK45s03hLfYY0r",
                2500: "https://donate.stripe.com/3cIdR9fyI6tOdYw4lPfYY0q"
            };

            // Default to 25 if amount is unknown
            const stripeLink = stripeLinks[amount] || stripeLinks[25];

            // For demo: log and alert
            //console.log("Redirecting to Stripe: " + stripeLink);
            //alert("This button is connected to the Stripe Payment Link.\n\n(In a live version, you would be redirected to the payment page.)");

            window.location.href = stripeLink;
        }

        // Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // If it's a download link (contains the filename), don't prevent default
                if (this.getAttribute('href').includes('.pdf')) return;

                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });