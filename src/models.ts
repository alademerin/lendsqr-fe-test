export interface User {
  _id: string;
  index: string;
  company: string;
  accountNumber: number;
  picture: string;
  age: number;
  status: string;
  bank: string;
  email: string;
  balance: number;
  sectorOfEmployment: string;
  maritalStatus: string;
  name: string;
  gender: string;
  phoneNumber: string;
  levelOfEducation: string;
  employmentStatus: string;
  typeOfResidence: string;
  yearsOfEmployment: number;
  monthlyIncome: string;
  durationOfEmployment: number;
  loanRepayment: number;
  dateJoined: Date;
  guarantors?: Guarantor[];
}

interface Guarantor {
      name: string;
      phoneNumber: string;
      email: string;
      relationship: string;
}