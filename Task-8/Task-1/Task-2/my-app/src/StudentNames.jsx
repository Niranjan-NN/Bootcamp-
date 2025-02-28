export default function StudentNames({ name }) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-blue-600 text-2xl font-semibold p-6 bg-white rounded-2xl shadow-lg border border-blue-300">
          Student Name: {name}
        </div>
      </div>
    );
  }
  