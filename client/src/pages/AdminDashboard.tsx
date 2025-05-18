import { useEffect, useState } from 'react';

interface Complaint {
  id: string;
  name: string;
  email: string;
  complaint: string;
  status: string;
  created_at: string;
}

function AdminDashboard() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/complaints');
    const data = await res.json();
    setComplaints(data);
  };

  const toggleStatus = async (id: string) => {
    await fetch(`http://localhost:3000/api/complaints/${id}`, { method: 'PATCH' });
    fetchData();
  };

  const deleteComplaint = async (id: string) => {
    await fetch(`http://localhost:3000/api/complaints/${id}`, { method: 'DELETE' });
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full table-auto bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Complaint</th>
            <th className="p-2">Submitted</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id} className="border-t">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.complaint}</td>
              <td className="p-2">{new Date(c.created_at).toLocaleString()}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => toggleStatus(c.id)} className="bg-yellow-500 text-white px-2 py-1 rounded">Toggle</button>
                <button onClick={() => deleteComplaint(c.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
