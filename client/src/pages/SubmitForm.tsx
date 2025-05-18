import { useState } from 'react';

function SubmitForm() {
  const [formData, setFormData] = useState({ name: '', email: '', complaint: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/complaints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Submit a Complaint</h2>
        <input type="text" name="name" required placeholder="Name" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <input type="email" name="email" required placeholder="Email" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <textarea name="complaint" required placeholder="Your complaint" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        {submitted && <p className="mt-4 text-green-600">Complaint submitted successfully!</p>}
      </form>
    </div>
  );
}

export default SubmitForm;