import { useState } from "react";
import logo from './assets/Logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/usuarios', formValues);
      console.log(response.data);
      // reset the form after successful submission
      setFormValues({
        name: '',
        email: '',
        phone: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background-auth">
      <div className="logo">
        <img src={logo} alt="Logo da empresa Where To Go"/>
      </div>
      <form id="form-auth" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />

        <label>Email</label>
        <input type="text" name="email" value={formValues.email} onChange={handleInputChange} />

        <label>Telefone</label>
        <input type="number" name="phone" value={formValues.phone} onChange={handleInputChange} />

        <label>Senha</label>
        <input type="password" name="password" value={formValues.password} onChange={handleInputChange} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
