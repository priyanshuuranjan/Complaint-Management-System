import React,{useEffect, useState}from "react";
import "./DashBoard.css";
import { Services } from "../../Constant/Services";
import { useNavigate } from "react-router-dom";
import ComplainCard from "../Complain-detail-card/ComplainCard";
import { listComplain } from "../../firebase-service/complain-service";
import { useAuth } from "../Contexts/AuthContext";

export default function DashBoard() {
  const [complainList, setComplainList] = useState();
  const {currentUser: {email}} = useAuth();

  // useNavigate use hua hai ek page se dushre page pe jane k liya
  const navigate = useNavigate();
  function navigateToCreateComplainPage(category) {
    navigate(`/${category}/create-complain`);
  }
  useEffect(() => {
    listComplain(email).then((res) => setComplainList(res))
  }, [email])

  return (
    <>
      <div className="card-body">
        <b className="text-center pt-3">Lodge Your Complain/Request</b>
        <div className="body-item">
          {Object.keys(Services).map((name) => (
            <div
              onClick={() => navigateToCreateComplainPage(name)}
              className="img-resize"
            >
              <img key={name} src={Services[name].image} alt={name} />
              <span>{Services[name].name} </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-centre pt-3 complain-page">
        <p>Your Open Complain/Request</p>
        <div style={{ display: "flex", gap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-between"}}>
        {complainList?.map((complain) => <ComplainCard {...complain} />)}
        </div>
      </div>
    </>
  );
}
