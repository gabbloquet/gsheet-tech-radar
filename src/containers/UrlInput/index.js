import React from 'react';

const UrlInput = ({label, setUrl}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(event.target.url.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='url'>
        {label}
        <input type="url" name="url" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UrlInput;
