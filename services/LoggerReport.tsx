import React, { useState, useEffect } from "react";

function LogReport() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve logs from localStorage
    const storedLogsJson = localStorage.getItem("logs");
    if (storedLogsJson) {
      const storedLogs = JSON.parse(storedLogsJson);
      setLogs(storedLogs);
    }
  }, []);

  return (
    <div>
      <h2>Log Report</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.data}>
            <strong>{log.level}</strong> - {log.timestamp}: {log.message}
            {log.data && <pre>{JSON.stringify(log.data, null, 2)}</pre>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogReport;
