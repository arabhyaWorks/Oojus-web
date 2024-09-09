import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ref, get, set, push } from "firebase/database";
import database from "../../firebase/config";  // Make sure you have Firebase config setup

const PaymentScreen = () => {
  const router = useRouter();
  const {htmlContent, productData} = router.query;  // Assuming you're passing htmlContent and productData as query params
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Add the message event listener on load
    window.addEventListener('message', handleMessage);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    // Security check: Ensure the event is coming from a trusted source if needed
    // if (event.origin !== 'http://trusted-source.com') return;

    const data = event.data;
    console.log('Extracted order_status:', data);

    if (data === 'Success') {
      console.log('Payment successful');
      if (!isOrderPlaced) {
        addOrder();
        setIsOrderPlaced(true);
      }
      router.push('/success');
    } else if (data === 'Failure' || data === 'Aborted') {
      console.log('Payment failed or aborted');
      router.push('/failed');
    } else {
      console.log('Payment failed with unknown status:', data);
      router.push('/failed');
    }
  };

  const addOrder = () => {
    // Assuming Firebase setup is correct
    const bookingRef = ref(database, `/bookings/${productData.bookingId}`);
    set(bookingRef, productData);

    const userRef = ref(database, `/users/${productData.userId}/bookings`);
    push(userRef, productData);
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        onLoad={() => console.log('Iframe Loaded')}  // You can track when the iframe is loaded
      ></iframe>
    </div>
  );
};

export default PaymentScreen;