import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from '../../styles/StudentsStyles';

const Students = () => {
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      setStudents(response.data.students || []);  // Use fallback to an empty array
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.name.trim() && newStudent.registrationNumber.trim() && newStudent.grade.trim()) {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/students', newStudent);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', registrationNumber: '', grade: '' });
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students:-</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students?.map((student, index) => {
              // Check if student is defined
              if (!student) return null;

              // Use the existing properties if they exist
              const { id, _id, name, registrationNumber, grade } = student;
              
              return (
                <StudentItem key={id || _id || index}>
                  {name || 'Unnamed'} - {registrationNumber || 'No Reg. Number'} - {grade || 'No Grade'}
                </StudentItem>
              );
            })}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
