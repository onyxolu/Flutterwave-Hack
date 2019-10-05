const API_publicKey = "FLWPUBK-7224ff9f4d623d4f9f0f7ddec072bfd4-X";

function payWithRave() {
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: "user@example.com",
        amount: 2000,
        customer_phone: "234099940409",
        currency: "NGN",
        txref: "rave-123456",
        meta: [
            {
                metaname: "flightID",
                metavalue: "AP1234"
            }
        ],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
            console.log(
                "This is the response returned after a charge",
                response
            );
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
