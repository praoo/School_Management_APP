// Exam.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
  ExamBox,
} from '../../styles/ExamStyles';

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exam/getall');
      const data = response.data.exam; // Access the 'exam' array inside the response
      console.log('BEFORE Updated examData:', data);
      setExamData(Array.isArray(data) ? data : []); // Ensure examData is an array
      console.log('Updated examData:', data);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = { name, registrationNumber, className, marks: parseInt(marks) };
    try {
      const response = await axios.post('http://localhost:4000/api/v1/exam', newExam);
      // Ensure response data is always an object
      if (typeof response.data === 'object') {
        setExamData([...examData, response.data]);
        setName('');
        setRegistrationNumber('');
        setClassName('');
        setMarks('');
      } else {
        console.error('Error: API response data is not an object');
      }
    } catch (error) {
      console.error('Error adding exam:', error);
      // Display error toast message
      toast.error('Error adding EXAM');
    }
  };

  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  };

  return (
    <ExamContainer>
      <ToastContainer />
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details:-</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks: {calculateTotalMarks()}</h2>
        <h3>Exam Details:</h3>
        <ul>
          {Array.isArray(examData) && examData.length > 0 ? (
            examData.map((exam, index) => (
              <ExamBox key={index}>
                Name: {exam.name}<br />
                Registration Number: {exam.registrationNumber}<br />
                Class: {exam.className}<br />
                Marks: {exam.marks}
              </ExamBox>
            ))
          ) : (
            <ExamBox>No exams found</ExamBox>
          )}
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default Exam;
