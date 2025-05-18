function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Complaint Management</h1>
      <div className="space-x-4">
        <a href="/submit" className="text-blue-500 hover:underline">Submit Complaint</a>
        <a href="/admin" className="text-blue-500 hover:underline">Admin Dashboard</a>
      </div>
    </div>
  );
}

export default App;