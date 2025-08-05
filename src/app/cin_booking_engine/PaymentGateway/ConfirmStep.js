"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { createSignature } from "../../../utilities/signature";

const ConfirmStep = ({ onClose, goNext, status }) => {
  const [responseObject, setResponseObject] = useState(null);
  const [reservationStatus, setReservationStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingResp, setLoadingResp] = useState(false);
  const [isNodata, setNodata] = useState(false);
  const [BookingDetails, setBookingDetails] = useState(null);
  const [totalAdults, setTotalAdults] = useState(null);
  const [totalChildren, setTotalChildren] = useState(null);
  const keyData = "dbKey=alivaa_pg";
  useEffect(() => {
    const storedData = sessionStorage?.getItem("paymentResponse");
    const bookingData = sessionStorage?.getItem("bookingData");
    console.log("stored ConfirmStep Wizard", storedData);
    console.log("bookingData ConfirmStep Wizard", bookingData);
    if (storedData?.length == 0) {
      setNodata(true);
      return;
    }
    try {
      if (bookingData) {
        const parsedBooking = JSON.parse(bookingData);
        //setBookingDetails(parsedBooking);
        const totalAdults = parsedBooking.selectedRoom.reduce((total, room) => {
          return total + (parseInt(room.adults, 10) || 0);
        }, 0);

        const totalChildren = parsedBooking.selectedRoom.reduce(
          (total, room) => {
            return total + (parseInt(room.children, 10) || 0);
          },
          0
        );

        setTotalAdults(totalAdults);
        setTotalChildren(totalChildren);

        console.log("parsedBooking", parsedBooking);
      }
      const parsed = JSON.parse(storedData);
      console.log("parsedData ConfirmStep Wizard", parsed);
      console.log(
        "parsedData ConfirmStep Parsed.partner_id",
        parsed?.partner_id
      );
      parsed.partner_id = String(parsed.partner_id);
      parsed.ipn_flag = String(parsed.ipn_flag);
      if (parsed.status === "error") {
        parsed.currency = "INR";
        parsed.amount = "0.0";
        parsed.pg_transaction_id = "00";
      }
      setResponseObject(parsed);
    } catch (err) {
      console.error("Invalid JSON:", err);
    } finally {
      sessionStorage.removeItem("paymentResponse");
    }
  }, []);

  useEffect(() => {
    if (
      responseObject?.status === "success" ||
      responseObject?.status === "paylater"
    ) {
      handleConfirm();
    }
  }, [responseObject]);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const timestamp = Date.now().toString();
      const secret = "ABDEFGHJKLMOPQRSTUVWXYZ123456789";
      const signature = await createSignature(
        JSON.stringify(responseObject),
        timestamp,
        secret
      );
      //alert(signature);
      const res = await fetch(
        "https://cinbe.cinuniverse.com/api/payment/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-timestamp": timestamp,
            "x-signature": signature,
          },
          body: JSON.stringify({ responseObject, keyData }),
        }
      );

      const data = await res.json();
      //alert(`ResponseData ${JSON.stringify(data)}`);
      setReservationStatus(data.errorMessage);
      const parsedData = JSON.parse(data.result[0].bookingDetailsJson);
      console.log("data.errorMessage Confirm", data.errorMessage);
      console.log("parsedData Confirm", parsedData);
      setBookingDetails(parsedData);

      const totalAdults = parsedData.selectedRoom.reduce((total, room) => {
        return total + (parseInt(room.adults, 10) || 0);
      }, 0);

      const totalChildren = parsedData.selectedRoom.reduce((total, room) => {
        return total + (parseInt(room.children, 10) || 0);
      }, 0);

      setTotalAdults(totalAdults);
      setTotalChildren(totalChildren);
    } catch (err) {
      //alert(err);
      console.error("Client error:", err);
      toast.error("An error occurred.");
    } finally {
      setTimeout(() => {
        //  goNext();
        //  onClose();
        setLoading(false);
        // status(null);
      }, 5000);
    }
  };
  return (
    <>
      {isNodata ? (
        <>
          <i
            className="fa fa-times-circle text-red-600 text-4xl"
            aria-hidden="true"
          ></i>
          <h3 className="text-2xl font-bold text-red-600 mt-4">
            Payment Failed
          </h3>
          <p className="mt-2 text-gray-700">Something went wrong.</p>
        </>
      ) : (
        <div>
          {!isNodata && responseObject?.status === "success" ? (
            <div className="booking-confirmed p-10">
              {reservationStatus === null ? (
                <p className="mt-4 text-blue-600 font-medium">
                  Payment successful! Confirming your room booking...
                </p>
              ) : reservationStatus === "success" ? (
                <>
                  <div className="wizard-step-global-padding">
                    <div className="confirmation-step-new">
                      <div className="brand-top-box">
                        <div className="brand-image">
                          <Image
                            src="/booking-engine-imgs/img/clarks-logo-white.png"
                            height={100}
                            width={200}
                            alt="brand image"
                          />
                        </div>
                      </div>
                      <div className="animated-check-icon text-center py-2">
                        <Image
                          src="/booking-engine-imgs/images/verified.gif"
                          height={100}
                          width={100}
                          alt="confirmation"
                          className="confirm-gif mx-auto"
                        />
                      </div>
                      <div className="reservation-data-box">
                        <div className="confirmation-top">
                          <h3 className="reservation-confrm-title">
                            Reservation Confirmation
                          </h3>
                          <hr />
                          <h6 className="confirmation-number">
                            Your Confirmation Number Is{" "}
                            <span>{responseObject?.reservation_id}</span>{" "}
                          </h6>
                        </div>
                        <div className="confirmation-image">
                          {/* {BookingDetails?.selectedRoom[0].Image} */}
                          {/* {BookingDetails?.selectedRoom[0].Image|| } */}
                          <Image
                            src={
                              BookingDetails?.selectedRoom[0].roomImage ||
                              dummyImage
                            }
                            height={400}
                            width={500}
                            alt="room image"
                          />
                          {/* <Image src="/no_image.jpg" height={400} width={500} alt="room image" /> */}
                        </div>
                        <div className="confirmation-data-box">
                          <div className="c-dis-flex">
                            <ul>
                              <li>
                                <p className="f-12-new">Name</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.formData?.title} &nbsp;
                                  {BookingDetails?.formData?.firstName} &nbsp;
                                  {BookingDetails?.formData?.lastName}{" "}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Check-In</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.selectedStartDate}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Check-Out</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.selectedEndDate}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Room Name</p>
                              </li>
                              <li>
                                {BookingDetails?.selectedRoom?.map(
                                  (room, index) => (
                                    <p className="f-12-new">
                                      {index + 1} {room.roomName}
                                    </p>
                                  )
                                )}
                              </li>

                              <li>
                                <p className="f-12-new">Package Name</p>
                              </li>
                              <li>
                                {BookingDetails?.selectedRoom?.map(
                                  (room, index) => (
                                    <p className="f-12-new">
                                      {index + 1} {room.roomPackage}
                                    </p>
                                  )
                                )}
                              </li>

                              <li>
                                <p className="f-12-new">Guests</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {totalAdults} Adults, {totalChildren}{" "}
                                  Children,{" "}
                                  {BookingDetails?.selectedRoom?.length} Rooms
                                  {/* {BookingDetails.selectedAddonList.map((addon) => (
                        addon.AddonName
                      )
                    )} */}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Add-ons</p>
                              </li>
                              <li>
                                {BookingDetails?.selectedAddonList?.map(
                                  (addon, index) => (
                                    <p className="f-12-new">
                                      {index + 1} {addon.AddonName}
                                    </p>
                                  )
                                )}
                              </li>

                              <li>
                                <p className="f-12-new">Amount Paid</p>
                              </li>
                              <li>
                                <p className="f-12-new font-weightbold">
                                  ₹&nbsp;{BookingDetails?.totalPrice}
                                </p>
                              </li>
                            </ul>
                            <div className="terms-conditionss">
                              <div className="trms-booxx1">
                                <p className="f-12-new">Cancellation Policy</p>
                                <p className="f-12-new">
                                  {BookingDetails?.cancellationPolicyState}
                                </p>
                              </div>
                              <div className="trms-booxx1">
                                <p className="f-12-new">Terms & Conditions</p>
                                <p className="f-12-new">
                                  {BookingDetails?.termsAndConditions}
                                </p>
                              </div>
                            </div>
                            <div className="row conf-hotel-details">
                              <div className="col-6 first-col-conf">
                                <p className="f-12-new">Hotel Details</p>
                              </div>
                              <div className="col-6 second-col-conf">
                                <p className="f-12-new">
                                  {/* Alivaa Hotel Gurugram Sohna Road City Center */}
                                  {BookingDetails?.property?.PropertyName}
                                </p>
                                <p className="f-12-new">
                                  {
                                    BookingDetails?.property?.Address
                                      ?.AddressLine
                                  }
                                  , &nbsp;
                                  {BookingDetails?.property?.Address?.City},
                                  &nbsp;
                                  {BookingDetails?.property?.Address?.State},
                                  &nbsp;
                                  {BookingDetails?.property?.Address?.Country},
                                  &nbsp;
                                  {
                                    BookingDetails?.property?.Address
                                      ?.PostalCode
                                  }
                                </p>
                                <p className="f-12-new">
                                  {BookingDetails?.property?.Address?.Email}
                                </p>
                                <p className="f-12-new">
                                  {BookingDetails?.property?.Address?.Phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Image
                    src="/images/verified.gif"
                    height={100}
                    width={100}
                    alt="confirmation"
                    className="confirm-gif mx-auto"
                  />
                  <h3 className="text-2xl font-bold mt-4 text-green-700">Booking Confirmed</h3>
                  <p className="text-center mt-2">
                    Awesome! Your rooms are booked!
                    <br />
                    We've sent you a confirmation email with all the details.
                    <br />
                    <strong>Reservation ID:</strong> {responseObject?.reservation_id}
                  </p> */}
                </>
              ) : (
                <>
                  <i
                    className="fa fa-times-circle text-red-600 text-4xl"
                    aria-hidden="true"
                  ></i>
                  <h3 className="text-2xl font-bold text-red-600 mt-4">
                    Booking Failed
                  </h3>
                  <p className="mt-2 text-gray-700">
                    We couldn't confirm your booking. Please try again or
                    contact support.
                  </p>
                </>
              )}

              <button
                onClick={() => {
                  onClose();
                  goNext();
                  status(responseObject?.status);
                }}
                disabled={loading}
                className="mt-6 btn btn-primary"
              >
                {loading ? "Saving..." : "Close"}
              </button>
            </div>
          ) : !isNodata && responseObject?.status === "paylater" ? (
            <div className="booking-confirmed text-center p-10">
              {reservationStatus === null ? (
                <p className="text-center mt-4 text-blue-600 font-medium">
                  Payment successful2! Confirming your room booking...
                </p>
              ) : reservationStatus === "success" ? (
                <>
                  <div className="wizard-step-global-padding">
                    <div className="confirmation-step-new">
                      <div className="brand-top-box">
                        <div className="brand-image">
                          <Image
                            src="/booking-engine-imgs/img/clarks-logo-white.png"
                            height={100}
                            width={200}
                            alt="brand image"
                          />
                        </div>
                      </div>
                      <div className="animated-check-icon text-center py-2">
                        <Image
                          src="/booking-engine-imgs/images/verified.gif"
                          height={100}
                          width={100}
                          alt="confirmation"
                          className="confirm-gif mx-auto"
                        />
                      </div>
                      <div className="reservation-data-box">
                        <div className="confirmation-top">
                          <h3 className="reservation-confrm-title">
                            Reservation Confirmation
                          </h3>
                          <hr />
                          <h6 className="confirmation-number">
                            Your Confirmation Number Is{" "}
                            <span>{responseObject?.reservation_id}</span>{" "}
                          </h6>
                        </div>
                        <div className="confirmation-image">
                          {/* {BookingDetails?.selectedRoom[0].Image} */}
                          {/* {BookingDetails?.selectedRoom[0].Image|| } */}
                          <Image
                            src={
                              BookingDetails?.selectedRoom[0].roomImage ||
                              dummyImage
                            }
                            height={400}
                            width={500}
                            alt="room image"
                          />
                          {/* <Image src="/no_image.jpg" height={400} width={500} alt="room image" /> */}
                        </div>
                        <div className="confirmation-data-box">
                          <div className="c-dis-flex">
                            <ul>
                              <li>
                                <p className="f-12-new">Name</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.formData?.title} &nbsp;
                                  {BookingDetails?.formData?.firstName} &nbsp;
                                  {BookingDetails?.formData?.lastName}{" "}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Check-In</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.selectedStartDate}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Check-Out</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {BookingDetails?.selectedEndDate}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Room Name</p>
                              </li>
                              {BookingDetails?.selectedRoom?.map(
                                (room, index) => (
                                  <li key={`room-${index}`}>
                                    {/* {BookingDetails?.selectedRoom?.map(
                                  (room, index) => ( */}
                                    <p className="f-12-new">
                                      {index + 1} {room.roomName}
                                    </p>
                                    {/* )
                                 )} */}
                                  </li>
                                )
                              )}

                              {/* {BookingDetails?.selectedRoom?.map(
                                (room, index) => (
                                  <li>
                                    <p className="f-12-new">
                                      {index + 1} {room.roomName}
                                    </p>
                                  </li>
                                )
                              )} */}
                              <li>
                                <p className="f-12-new">Package Name</p>
                              </li>
                              <li>
                                {BookingDetails?.selectedRoom?.map(
                                  (room, index) => (
                                    <p className="f-12-new">
                                      {index + 1} {room.roomPackage}
                                    </p>
                                  )
                                )}
                              </li>

                              <li>
                                <p className="f-12-new">Guests</p>
                              </li>
                              <li>
                                <p className="f-12-new">
                                  {totalAdults} Adults, {totalChildren}{" "}
                                  Children,{" "}
                                  {BookingDetails?.selectedRoom?.length} Rooms
                                  {/* {BookingDetails.selectedAddonList.map((addon) => (
                        addon.AddonName
                      )
                    )} */}
                                </p>
                              </li>
                              <li>
                                <p className="f-12-new">Add-ons</p>
                              </li>
                              <li>
                                {BookingDetails?.selectedAddonList?.map(
                                  (addon, index) => (
                                    <p className="f-12-new">
                                      {index + 1} {addon.AddonName}
                                    </p>
                                  )
                                )}
                              </li>

                              <li>
                                <p className="f-12-new">Amount Paid</p>
                              </li>
                              <li>
                                <p className="f-12-new font-weightbold">
                                  ₹&nbsp;{BookingDetails?.totalPrice}
                                </p>
                              </li>
                            </ul>
                            <div className="terms-conditionss">
                              <div className="trms-booxx1">
                                <p className="f-12-new">Cancellation Policy</p>
                                <p className="f-12-new">
                                  {BookingDetails?.cancellationPolicyState}
                                </p>
                              </div>
                              <div className="trms-booxx1">
                                <p className="f-12-new">Terms & Conditions</p>
                                <p className="f-12-new">
                                  {BookingDetails?.termsAndConditions}
                                </p>
                              </div>
                            </div>
                            <div className="row conf-hotel-details">
                              <div className="col-6 first-col-conf">
                                <p className="f-12-new">Hotel Details</p>
                              </div>
                              <div className="col-6 second-col-conf">
                                <p className="f-12-new">
                                  {/* Alivaa Hotel Gurugram Sohna Road City Center */}
                                  {BookingDetails?.property?.PropertyName}
                                </p>
                                <p className="f-12-new">
                                  {
                                    BookingDetails?.property?.Address
                                      ?.AddressLine
                                  }
                                  , &nbsp;
                                  {BookingDetails?.property?.Address?.City},
                                  &nbsp;
                                  {BookingDetails?.property?.Address?.State},
                                  &nbsp;
                                  {BookingDetails?.property?.Address?.Country},
                                  &nbsp;
                                  {
                                    BookingDetails?.property?.Address
                                      ?.PostalCode
                                  }
                                </p>
                                <p className="f-12-new">
                                  {BookingDetails?.property?.Address?.Email}
                                </p>
                                <p className="f-12-new">
                                  {BookingDetails?.property?.Address?.Phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <i
                    className="fa fa-times-circle text-red-600 text-4xl"
                    aria-hidden="true"
                  ></i>
                  <h3 className="text-2xl font-bold text-red-600 mt-4">
                    Booking Failed
                  </h3>
                  <p className="mt-2 text-gray-700">
                    We couldn't confirm your booking. Please try again or
                    contact support.
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="booking-confirmed text-center p-10">
              {!isNodata ? (
                <div className="text-center p-10">
                  <i
                    className="fa fa-times-circle text-red-600 text-4xl"
                    aria-hidden="true"
                  ></i>
                  <h1 className="text-3xl font-bold text-red-600 mt-4">
                    Payment Failed
                  </h1>
                  <p className="mt-2">
                    Something went wrong during the payment. Please try again or
                    contact support.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      goNext();
                      status(responseObject?.error_msg);
                    }}
                    disabled={loading}
                    className="mt-6 btn btn-primary"
                  >
                    {loading ? "Saving..." : "Close"}
                  </button>
                </div>
              ) : (
                <div className="text-center p-10">
                  <i
                    className="fa fa-times-circle text-red-600 text-4xl"
                    aria-hidden="true"
                  ></i>
                  <h1 className="text-3xl font-bold text-red-600 mt-4">
                    Step Jumped
                  </h1>
                  <p className="mt-2">
                    Please fill your details at Details Step first and then
                    proceed to Payment.
                  </p>

                  <button
                    onClick={() => {
                      onClose();
                      goNext();
                      status(responseObject?.error_msg);
                    }}
                    disabled={loading}
                    className="mt-6 btn btn-primary"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ConfirmStep;
