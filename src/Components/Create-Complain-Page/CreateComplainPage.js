import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Complain-detail-card/Card.css";
import { useNavigate } from "react-router-dom";
import { createComplain } from "../../firebase-service/complain-service";
import { useAuth } from "../Contexts/AuthContext";

export default function CreateComplainPage() {
  // this is use to make url like wise jaise wifi pe click liye to wifi ka path open hoga..
  const { category } = useParams();
  const {currentUser} = useAuth();

  //navigate work
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleHostelChange = (event) => {
    setHostel(event.target.value);
  };
  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleCreateCard = async () => {
    const details = {
      category,
      description,
      hostel,
      room,
      status: "open",
      createdAt: new Date().toLocaleString(),  // taking local time 
      createdBy: currentUser.email,
    };
     await createComplain(details);
     navigate("/dashboard");
  };

  return (
    <>
      <section className="text-area">
        <div className="container my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card">
                <div className="w-100">
                  <h2>Create Your Complain </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="multiple-cards">
        <div className="create-card">


          <textarea
            className="form-control"
            id="form4Example3"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>

          <textarea
            className="form-control"
            id="form4Example"
            value={hostel}
            placeholder="Enter your Hostel Name"
            onChange={handleHostelChange}
          ></textarea>

          <textarea
            className="form-control"
            id="form4Example"
            value={room}
            placeholder="Enter your room No."
            onChange={handleRoomChange}
          ></textarea>

          <button onClick={handleCreateCard}>Create Complain</button>
        </div>
        </div>
    </>
  );
}
