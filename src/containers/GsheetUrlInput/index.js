import React, {useContext} from 'react';
import {TechRadarContext} from "../../App";

const GsheetUrlInput = () => {

  const {setUrl} = useContext(TechRadarContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(event.target.url.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='url'>
        Google sheet URL
        <input type="url" name="url" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default GsheetUrlInput;
