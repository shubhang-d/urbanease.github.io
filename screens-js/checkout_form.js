
        function validateForm() {
            
            var fname = document.getElementById('fname').value;
            var email = document.getElementById('email').value;
            var adr = document.getElementById('adr').value;
            var city = document.getElementById('City').value;
            var landmark = document.getElementById('lm').value;
            var state = document.getElementById('state').value;
            var zip = document.getElementById('zip').value;
            var cname = document.getElementById('cname').value;
            var ccnum = document.getElementById('ccnum').value;
            var expmonth = document.getElementById('expmonth').value;
            var expyear = document.getElementById('expyear').value;
            var cvv = document.getElementById('cvv').value;

           
            if (fname === '' || email === '' || adr === '' || city === '' || landmark === '' ||
                state === '' || zip === '' || cname === '' || ccnum === '' || expmonth === '' ||
                expyear === '' || cvv === '') {
                alert('All fields must be filled out');
                return false;
            }
            // Validate specific fields
            if (!/^\d{16}$/.test(ccnum)) {
                alert('Invalid credit card number. Please enter 16 digits.');
                return false;
            }

            if (!/^\d{2}$/.test(expmonth) || parseInt(expmonth) < 1 || parseInt(expmonth) > 12) {
                alert('Invalid expiration month. Please enter a valid two-digit month (01-12).');
                return false;
            }

            if (!/^\d{2}$/.test(expyear) || parseInt(expyear) < new Date().getFullYear()) {
                alert('Invalid expiration year. Please enter a valid two-digit future year.');
                return false;
            }

            if (!/^\d{3}$/.test(cvv)) {
                alert('Invalid CVV. Please enter a 3-digit number.');
                return false;
            }

            if (!/^\d{5}$/.test(zip)) {
                alert('Invalid ZIP code. Please enter a 5-digit number.');
                return false;
            }

            

            return true; // Form is valid
        }
            // Additional validation can be added for specific fields (e.g., email format, card number format, etc.)

            // return true; 