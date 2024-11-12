function ReportList({ reports, onVerify }) 
{
  if(!Array.isArray(reports)) {
    return <p>No reports found.</p>;
  }
  
    return (
      <div className="space-y-4 mt-6">
        <ul>
          {reports.map((report) => (
            <li key={report.itemno} className="flex justify-between items-center border-b py-3 bg-gray-200 shadow-lg mt-2">
              <img class="w-full max-h-[100px] object-cover md:w-52" src={report.itemphotourl} alt=""/>
              <p className="text-lg font-medium text-gray-700">{report.itemname}</p>
              <p className="text-lg font-medium text-gray-700">MRP: {report.itemprice}</p>
              <p className="text-lg font-medium text-gray-700">{report.itemdescription}</p>
              <button onClick={() => onVerify(report.itemno)} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition duration-200">Verify Report</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default ReportList;
  