import React, { useState } from 'react'
// import { BiCustomize } from 'react-icons/bi';
import {v4 as uuidv4} from 'uuid';
export default function Contct() {
const [Nom, setNom] = useState('');
const [Tel, setTel] = useState('');
const [Ville, setVille] = useState('');
const [contacts,setcontacts]=useState([
    {id:uuidv4(),Nom:"ahmed alami",Tel:"0658748966",Ville:"Rabat"},
    {id:uuidv4(),Nom:"salma llali",Tel:"0658748966",Ville:"Rabat"},
    {id:uuidv4(),Nom:"karim harraki",Tel:"0658748966",Ville:"Rabat"},
    {id:uuidv4(),Nom:"moad salimi",Tel:"0658748966",Ville:"Rabat"}
])
const [contact,setcontact]=useState('');
const newContact=()=>{
    let Tcontacts=[...contacts];
    let infocontact={};
    infocontact.id=uuidv4();
    infocontact.Nom=contact;
    infocontact.Tel=contact;
    infocontact.Ville=contact;
    Tcontacts.push(infocontact);
    setNom('');
    setTel('');
    setVille ('');
    setcontacts(Tcontacts);
    setcontact('');
}
  return (
    <div>
      
      nom:
      <input type="text" value={Nom} onChange={e => setNom(e.target.value)} />
      Tel:
      <input type="text" value={Tel} onChange={e => setTel(e.target.value)} />
      Ville:
      <input type="text" value={Ville} onChange={e => setVille(e.target.value)} />
    <input type= 'button' value='new contact' onClick={newContact} />
   
    
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.Nom} {' '}
            {contact.Tel}{' '}
            {contact.Ville}{' '}
            <button >Edit</button>{' '}
            <button >Delete</button>
          </li>
        ))}
      </ul>
     
    </div>
  </div>
  )
}
