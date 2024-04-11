import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const EPISODES_BY_IDS = gql`
  query EpisodesByIds($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      created
    }
  }
`;

function AnimationList() {
  const [episodeIds, setEpisodeIds] = useState("");

  const { loading, error, data } = useQuery(EPISODES_BY_IDS, {
    variables: {
      ids: episodeIds,
    },
    skip: !episodeIds,
  });

  const handleInputChange = (event) => {
    setEpisodeIds(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Check if data is undefined or null before accessing episodesByIds
  const episodes = data ? data.episodesByIds : [];

  return (
    <div>
      <h2>Enter Episode IDs</h2>
      <input
        type="text"
        value={episodeIds}
        onChange={handleInputChange}
        placeholder="Enter comma-separated episode IDs"
      />
      <div>
        <h2>Episodes Details</h2>
        {episodes.map((episode) => (
          <div key={episode.id}>
            <p>
              <strong>ID:</strong> {episode.id}
            </p>
            <p>
              <strong>Name:</strong> {episode.name}
            </p>
            <p>
              <strong>Air Date:</strong> {episode.air_date}
            </p>
            <p>
              <strong>Episode:</strong> {episode.episode}
            </p>
            <p>
              <strong>Created:</strong> {episode.created}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimationList;
