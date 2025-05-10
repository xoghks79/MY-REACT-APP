import React, { useEffect, useState } from 'react';

function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Spring Boot에서 온 메시지:</h1>
      <p>{message}</p>
    </div>
  );
}

export default About;