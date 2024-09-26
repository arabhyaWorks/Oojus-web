// pages/api/ccavenue-handle.js
import CCAvenue from '../../utils/CCAvenue';

export default async function handler(req, res) {

    switch (req.method) {
        case "POST":
            try {
                // Decrypt the Response Data from Request Body
                let data = CCAvenue.redirectResponseToJson(req.body.encResp);
                
                // Handle Redirect as per Payment Status
                if (data.order_status === "Success") {
                    res.redirect(302, "/success");
                } else {
                    res.redirect(302, "/failed");
                }
            } catch (error) {
                // Handling Errors if anything Issue/Problem while Payment
                console.error('Error processing CCAvenue request:', error);
                res.redirect(302, "/failed");
            }
            break;

        default:
            res.status(405).end('Method Not Allowed');
            break;
    }
}