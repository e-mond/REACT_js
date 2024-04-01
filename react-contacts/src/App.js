import React, { useState } from 'react';
import Contacts from './Component/Contacts.js';
import ContactsForm from './Component/ContactsForm.js';
import './styles.css'

  function App() {
    const [contacts, setContacts] = useState([
      { name: "Cristiano Ronaldo", phoneNumber: "+351-123-456-7890", location: "Lisbon, Portugal" },
      { name: "Lionel Messi", phoneNumber: "+34-987-654-3210", location: "Rosario, Argentina" },
      { name: "Robert Lewandowski", phoneNumber: "+48-123-456-7890", location: "Warsaw, Poland" },
      { name: "Kylian Mbappé", phoneNumber: "+33-987-654-3210", location: "Paris, France" },
      { name: "Virgil van Dijk", phoneNumber: "+31-123-456-7890", location: "Amsterdam, Netherlands" },
      { name: "Kevin De Bruyne", phoneNumber: "+32-987-654-3210", location: "Brussels, Belgium" },
      { name: "Ciro Immobile", phoneNumber: "+39-123-456-7890", location: "Rome, Italy" },
      { name: "Erling Haaland", phoneNumber: "+47-987-654-3210", location: "Oslo, Norway" },
      { name: "Gareth Bale", phoneNumber: "+44-123-456-7890", location: "Cardiff, Wales" },
      { name: "Luka Modrić", phoneNumber: "+385-987-654-3210", location: "Zagreb, Croatia" },
      { name: "Sergio Ramos", phoneNumber: "+34-123-456-7890", location: "Madrid, Spain" },
      { name: "Harry Kane", phoneNumber: "+44-987-654-3210", location: "London, England" },
      { name: "Eden Hazard", phoneNumber: "+32-987-654-3210", location: "Brussels, Belgium" }
    ]); 
     // Function to add a new contact
    const handleAddContact = (newContact) => {
      setContacts([...contacts, newContact]);
    };
  
    return (
      <div>
         <ContactsForm onAddContact={handleAddContact} />
        <Contacts contacts={contacts} />
      </div>
    );
  }

export default App;
