import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../helper/Table";

export const ZygonPointTable = () => {
  const [zygonEntries, setZygonEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/zygonInfo/ZygonTable");
        // Access the statusCode array from the response
        if (response.data && response.data.statusCode) {
          setZygonEntries(response.data.statusCode);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Zygon Event Results</h2>
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <Table className="w-full min-w-[500px] md:min-w-full border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="p-2 text-xs md:text-sm">Event Name</TableHead>
              <TableHead className="p-2 text-xs md:text-sm">Year</TableHead>
              <TableHead className="p-2 text-xs md:text-sm">Winner's Name</TableHead>
              <TableHead className="p-2 text-xs md:text-sm">Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {zygonEntries.length > 0 ? (
              zygonEntries.map((entry) => (
                <TableRow key={entry._id} className="text-center border-t">
                  <TableCell className="p-2 text-xs md:text-base">{entry.EventName}</TableCell>
                  <TableCell className="p-2 text-xs md:text-base">{entry.Year}</TableCell>
                  <TableCell className="p-2 text-xs md:text-base">{entry.WinnersName}</TableCell>
                  <TableCell className="p-2 text-xs md:text-base">{entry.Position}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" className="text-center p-4">
                  No results available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};   