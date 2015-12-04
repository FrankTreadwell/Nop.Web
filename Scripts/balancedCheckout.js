$(document).ready(function () {
    $('#cc-submit').click(function (e) {
        e.preventDefault();

        var payload = {
            name: $('#cc-name').val(),
            number: $('#cc-number').val(),
            expiration_month: $('#cc-ex-month').val(),
            expiration_year: $('#cc-ex-year').val(),
            cvv: $('#ex-cvv').val(),
            address: {
                postal_code: $('#ex-postal-code').val()
            }
        };

        // Create credit card
        balanced.card.create(payload, handleResponse);
    });
});

function handleResponse(response) {
    if (response.status_code === 201) {
        var fundingInstrument = response.cards != null ? response.cards[0] : response.bank_accounts[0];
        // Call your backend
        jQuery.post("http://localhost:2020/api/payments", {
            uri: fundingInstrument.href
        }, function (r) {
            // Check your backend response
            switch (r.status) {
                case 201:
                    alert("201");
                    //TODO: CHECK for errors

                    //TODO: If no errors, redirect to Confirm
                    window.location.href = r.redirectURL;
                    //TODO: Else, notify user somehow.
                    break;
                case 400:
                case 402:
                case 404:
                case 500:
                default:
                    break;
            }
            if (r.status === 201) {
                //TODO: Code navigation to the confirm page.
                // Your successful logic here from backend ruby
                location:
            } else {
                // Your failure logic here from backend ruby
            }
        });
    } else {
        // Failed to tokenize, your error logic here
    }
}