import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import AppNavigation from "./components/AppNavigation";

const GET_TIMELINE = gql`
  query getTimeline {
    timeline: getTimeline {
      timelineItems {
        id
        title
        amount
        currency
        type
        timestamp
      }
    }
  }
`;

const TimeLineItem = ({ item }) => {
  return (
    <li
      style={{
        padding: "0.99rem 0.77rem",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        borderBottom: "solid 1px rgba(0, 0, 0, 0.075)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "2rem",
          width: "100%"
        }}
      >
        <p style={{ display: "flex", flexGrow: "1" }}>${item.title}</p>
        <div
          style={{ display: "flex", flexGrow: "0" }}
        >{`${item.amount} ${item.currency}`}</div>
      </div>
    </li>
  );
};

const TimeLine = () => (
  <Query query={GET_TIMELINE}>
    {({ loading, error, data }) => {
      if (loading) {
        return "Loading...";
      }

      if (error) {
        return error.message;
      }

      return (
        <ul style={{ listStyle: "none", padding: "0" }}>
          {data.timeline.timelineItems.map((item) => (
            <TimeLineItem item={item} />
          ))}
        </ul>
      );
    }}
  </Query>
);

const App = () => (
  <div>
    {<AppNavigation />}
    <h2>Earlier this month</h2>
    <div
      style={{ border: "solid 1px rgba(0, 0, 0, 0.075)", borderRadius: "8px" }}
    >
      <TimeLine />
    </div>
  </div>
);

export default App;
