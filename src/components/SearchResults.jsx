import React from "react";
import { Alert } from "antd";
import { Cards } from "./Cards";

export const SearchResults = (data, username) => {
  const userdata = data.data;
  return (
    <>
      {username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            // message={`${data.username}'s Gists`}
            description={`Total ${userdata.length} Gists found for ${data.username}`}
            type="success"
            
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <ul className="paddingData">
            {userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};
