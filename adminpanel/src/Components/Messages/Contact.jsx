import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5012/api/contact');
        if (response.data && Array.isArray(response.data.contactMessages)) {
          setContacts(response.data.contactMessages);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);



  return (
    <div className="messages-container">
      <h1>Contacts Inbox</h1>
      {contacts.length > 0 ? (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Interested In</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Project Details</th>
              <th>city</th>
              <th>service needed</th>
              <th>website</th>
              <th>Budget</th>
              <th>Heard About Us</th>
              <th>Created At</th>
              <th>Reply on Gmail</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.companyName ?? 'N/A'}</td>
                <td>{contact.interestedIn ?? 'N/A'}</td>
                <td>{contact.name ?? 'N/A'}</td>
                <td>{contact.phoneNumber ?? 'N/A'}</td>
                <td>{contact.email ?? 'N/A'}</td>
                <td>{contact.details ?? 'N/A'}</td>
                <td>{contact.city ?? 'N/A'}</td>
                <td>{contact.service ?? 'N/A'}</td>
                <td>{contact.website ?? 'N/A'}</td>
                
                <td>{contact.budget ?? 'N/A'}</td>
                <td>{contact.heardAboutUs ?? 'N/A'}</td>
                <td>{contact.createdAt ? new Date(contact.createdAt).toLocaleString() : 'N/A'}</td>
                <td>
  <a 
                   href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Regarding your inquiry&body=Hello ${contact.name},%0D%0A%0D%0AI would like to discuss your inquiry about ${contact.interestedIn}.&from=aaadigitalltd@gmail.com`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                  className="email-link"
  >
                  {contact.email ?? 'N/A'}
  </a>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{loading ? 'Loading contacts...' : 'No contacts found'}</p>
      )}
    </div>
  );
};

export default Contact;
