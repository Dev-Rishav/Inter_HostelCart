function ReportList({ reports, onVerify }) 
{
  if(!Array.isArray(reports)) {
    return <p>No reports found.</p>;
  }
    return (
      <div className="space-y-4">
        <ul>
          {reports.map((report) => (
            <li key={report.id} className="flex justify-between items-center border-b py-3">
              <p className="text-lg font-medium text-gray-700">{report.description}</p>
              <button onClick={() => onVerify(report.id)} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition duration-200">Verify Report</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default ReportList;
  