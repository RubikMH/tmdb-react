import React from "react";
import ConvertTimes from "../helpers/ConvetTimes";

export default function InfoMovie({ ReleaseDate, DataRunTime, genres }) {
  return (
    <div className="info">
      <div className="Date">
        <span className="release_date">{`${ReleaseDate.slice(0, 4)}`}</span>
        <span className="release_date">{ConvertTimes(DataRunTime)}</span>
        <span className="release_date">
          {genres.map((genre) => ` (${genre.name}) `)}
        </span>
      </div>
    </div>
  );
}
