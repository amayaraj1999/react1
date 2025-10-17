import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [className, setClassName] = useState("");
  const [formError, setFormError] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRoll, setEditRoll] = useState("");
  const [editClassName, setEditClassName] = useState("");
  const [editError, setEditError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // Check unique roll
  const isRollUnique = (rollToCheck, excludeId = null) => {
    return !students.some(
      (s) =>
        s.roll.toLowerCase() === rollToCheck.toLowerCase() &&
        s.id !== excludeId
    );
  };

  // Add student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !roll || !className) {
      setFormError("All fields are required");
      return;
    }
    if (!isRollUnique(roll)) {
      setFormError("Roll number must be unique");
      return;
    }
    const newStudent = {
      id: students.length + 1,
      name,
      roll,
      className,
    };
    setStudents([...students, newStudent]);
    setName("");
    setRoll("");
    setClassName("");
    setFormError("");
  };

  // Delete student
  const handleDelete = (id) => {
    const student = students.find((s) => s.id === id);
    if (
      window.confirm(`Are you sure you want to delete "${student.name}"?`)
    ) {
      setStudents(students.filter((s) => s.id !== id));
      if (editingId === id) handleCancelEdit();
    }
  };

  // Edit student
  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditRoll(student.roll);
    setEditClassName(student.className);
    setEditError("");
  };

  // Save edited student
  const handleSaveEdit = () => {
    if (!editName || !editRoll || !editClassName) {
      setEditError("All fields are required");
      return;
    }
    if (!isRollUnique(editRoll, editingId)) {
      setEditError("Roll number must be unique");
      return;
    }
    const updated = students.map((s) =>
      s.id === editingId
        ? { ...s, name: editName, roll: editRoll, className: editClassName }
        : s
    );
    setStudents(updated);
    handleCancelEdit();
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditRoll("");
    setEditClassName("");
    setEditError("");
  };

  // Filter students
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management</h1>

      {/* Add Form */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      {formError && <p className="error">{formError}</p>}

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      {/* Student Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>
                  {editingId === student.id ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {editingId === student.id ? (
                    <input
                      value={editRoll}
                      onChange={(e) => setEditRoll(e.target.value)}
                    />
                  ) : (
                    student.roll
                  )}
                </td>
                <td>
                  {editingId === student.id ? (
                    <input
                      value={editClassName}
                      onChange={(e) => setEditClassName(e.target.value)}
                    />
                  ) : (
                    student.className
                  )}
                </td>
                <td>
                  {editingId === student.id ? (
                    <>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(student)}>Edit</button>
                      <button onClick={() => handleDelete(student.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {editError && <p className="error">{editError}</p>}
    </div>
  );
}
