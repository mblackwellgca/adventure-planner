import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { QUERY_THOUGHTS } from "../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      {/* <div className="flex-row justify-center"> */}
      {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        > */}
      <Card>
        <CardContent>
          <ThoughtForm />
        </CardContent>
      </Card>
      {/* </div> */}
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Card>
            <CardContent>
              <ThoughtList thoughts={thoughts} title="Discussions..." />
            </CardContent>
          </Card>
        )}
      </div>

      {/* </div> */}
    </main>
  );
};

export default Profile;
