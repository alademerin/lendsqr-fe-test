export interface User = {
  id: string;
  index: string;
  accountNumber: number;
  picture: string;
  age: number;
  status: string;
  bank: string;
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
  guarantor: [
    {
      name: string;
      phoneNumber: string;
      email: string;
      relationship: string;
    }
  ];
}
