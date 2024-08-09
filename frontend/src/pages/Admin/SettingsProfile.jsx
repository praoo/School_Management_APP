// SettingsProfile.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from '../../styles/SettingsProfileStyles'; // Import styled components from SettingsProfileStyles.js

const SettingsProfile = () => {
  const teacherInfo = {
    name: 'Prabhat Kumar Singh',
    email: 'prabhat@example.com',
    phone: '8303401111',
    address: 'Kanpur',
    qualification: 'Btech',
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details:-</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Phone:</ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
          <ProfileLabel>Address:</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>
          <ProfileLabel>Qualification:</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>
        
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;