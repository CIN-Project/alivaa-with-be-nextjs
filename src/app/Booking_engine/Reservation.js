import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    PropertyId: "25950",
    apikey: process.env.NEXT_PUBLIC_API_KEY_POSTDATA,
    action: "reservation_info",
    reservation_datetime: "",
    reservation_id: "",
    totalamountaftertax: "",
    totaltax: "",
    promocode: "",
    payment_required: "",
    payment_type: "",
    currencycode: "",
    status: "",
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReservation = async () => {
    const data = JSON.stringify({
      PropertyId: formData.PropertyId,
      apikey: formData.apikey,
      action: formData.action,
      reservations: {
        reservation: [
          {
            reservation_datetime: formData.reservation_datetime,
            reservation_id: formData.reservation_id,
            totalamountaftertax: formData.totalamountaftertax,
            totaltax: formData.totaltax,
            promocode: formData.promocode,
            payment_required: formData.payment_required,
            payment_type: formData.payment_type,
            currencycode: formData.currencycode,
            status: formData.status,
            customer: {
              first_name: formData.first_name,
              last_name: formData.last_name,
              email: formData.email,
              telephone: formData.telephone,
              address: formData.address,
              city: formData.city,
              country: formData.country,
              zip: formData.zip,
            },
          },
        ],
      },
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://csbe-api.staah.net/?RequestType=reservation",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY_POSTDATA,
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      setLoading(true);
      setError(null);
      const res = await axios.request(config);
      setResponse(JSON.stringify(res.data, null, 2));
      console.log(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Reservation Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleReservation();
        }}
      >
        <label>
          Reservation Date/Time:
          <input
            type="datetime-local"
            name="reservation_datetime"
            value={formData.reservation_datetime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reservation ID:
          <input
            type="text"
            name="reservation_id"
            value={formData.reservation_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Amount (After Tax):
          <input
            type="number"
            name="totalamountaftertax"
            value={formData.totalamountaftertax}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Tax:
          <input
            type="number"
            name="totaltax"
            value={formData.totaltax}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Promo Code:
          <input
            type="text"
            name="promocode"
            value={formData.promocode}
            onChange={handleChange}
          />
        </label>
        <label>
          Payment Required:
          <input
            type="number"
            name="payment_required"
            value={formData.payment_required}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Payment Type:
          <select
            name="payment_type"
            value={formData.payment_type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Channel Collect">Channel Collect</option>
            <option value="Direct Pay">Direct Pay</option>
          </select>
        </label>
        <label>
          Currency Code:
          <input
            type="text"
            name="currencycode"
            value={formData.currencycode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </label>
        <h3>Customer Details</h3>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telephone:
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ZIP Code:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{response}</pre>
        </div>
      )}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
};

export default ReservationForm;
