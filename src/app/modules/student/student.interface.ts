// import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fattherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LOcalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'felmale';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LOcalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};