import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../helper/Button";
import { Input } from "../../helper/Input";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

export const UpdateZygonPage = () => {
  const { rowId } = useParams();
  const [form, setForm] = useState({
    EventName: "",
    Year: "",
    WinnersName: "",
    Position: "",
  });
  const [error, setError] = useState("");
  const [zygonEntries, setZygonEntries] = useState([]);
  
  const predefinedEvents = ["Event 1", "Event 2", "Event 3", "Event 4"];
  const years = [1, 2, 3, 4];
  const positions = [1, 2, 3];

  useEffect(() => {
    // Fetch existing entries and populate the form for updating
    const fetchZygonEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/zygonInfo/ZygonTable`);
        const entryToUpdate = response.data.find(entry => entry._id === rowId);
        if (entryToUpdate) {
          setForm(entryToUpdate); // Pre-populate the form with existing data
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch entry");
      }
    };
    fetchZygonEntry();
  }, [rowId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`http://localhost:8000/api/v1/zygonInfo/UpdateZygonTable/${rowId}`, form);
      toast.success("Zygon Table Information updated successfully!");
      setForm({ EventName: "", Year: "", WinnersName: "", Position: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Admin: Update Zygon Entry</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-2">
        {/* Event Name Dropdown */}
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <select
            name="EventName"
            value={form.EventName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Event</option>
            {predefinedEvents.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        {/* Year Dropdown */}
        <div>
          <label className="block text-sm font-medium">Year</label>
          <select
            name="Year"
            value={form.Year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Winner's Name Input */}
        <Input
          placeholder="Winner's Name"
          name="WinnersName"
          value={form.WinnersName}
          onChange={handleChange}
          required
        />

        {/* Position Dropdown */}
        <div>
          <label className="block text-sm font-medium">Position</label>
          <select
            name="Position"
            value={form.Position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Position</option>
            {positions.map((position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button type="submit">Update</Button>
      </form>

      <div className="mt-4">
        <p>
          Want to add a new entry?{" "}
          <Link to="/Admin" className="text-blue-500 underline">
            Create Zygon Entry
          </Link>
        </p>
      </div>
    </div>
  );
};