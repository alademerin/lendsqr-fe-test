import './userDetail.scss'
import BackArrow from '../../assets/back.svg'
import Star from '../../assets/star.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { User as UserType } from '../../models'
import { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../../helpers/StringManipulation'

const UserDetail = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [user, setUser] = useState<UserType>()

  const getUserById = async (id: string): Promise<void> => {
    let users = await localStorage.getItem('users')
    if (users) {
      let parsedUsers = (users = await JSON.parse(users))
      if (parsedUsers) {
        const user = await parsedUsers?.find(
          (user: UserType) => user._id === id
        )
        await setUser(user)
      }
    }
  }

  useEffect(() => {
    if (id) {
      getUserById(id)
    }
  }, [])

  return (
    <>
      <div className='back__btn' onClick={() => navigate(-1)}>
        <img src={BackArrow} />
        <p className='backArrow'>Back to Users</p>
      </div>
      <div className='user__details-header'>
        <div>
          <h2 className='title'>User Details</h2>
        </div>
        <div className='action__btn-container'>
          <button className='btn__blacklist'>Blacklist User</button>
          <button className='btn__activate'>Activate User</button>
        </div>
      </div>

      <div className='basicdetails'>
        <div className='basicdetails__first-row'>
          <div className='image__container'>
            <img src={`${user?.picture}${user?.gender}`} />
          </div>
          <div className='username__container'>
            <h3>{user?.name}</h3>
            <p className='userId'>{user?._id}</p>
          </div>
          <div className='usertier__container'>
            <p className='tierText'>User's Tier</p>
            <span className='stars'>
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
            </span>
          </div>
          <div className='account'>
            <p className='account__balance'>₦{user?.balance}</p>
            <p className='account__number'>
              {user?.accountNumber}/ {user?.bank}
            </p>
          </div>
        </div>
        <div className='basicdetails__second-row'>
          <p className='active'>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className='personaldetails__container'>
        <div className='personinfo__container'>
          <p className='title'>Personal Information</p>
          <div className='first__row'>
            <div>
              <div>
                <p className='label'>full name</p>
                <p className='detail'>{user?.name}</p>
              </div>
              <div className='second'>
                <p className='label'>Marital Status</p>
                <p className='detail'>
                  {user?.maritalStatus &&
                    capitalizeFirstLetter(user?.maritalStatus)}
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Phone Number</p>
                <p className='detail'>{user?.phoneNumber}</p>
              </div>
              <div className='second'>
                <p className='label'>Children</p>
                <p className='detail'>{0}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Email Address</p>
                <p className='detail'>{user?.email}</p>
              </div>
              <div className='second'>
                <p className='label'>Type of Residence</p>
                <p className='detail'>{user?.typeOfResidence}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>BVN</p>
                <p className='detail'>{user?.accountNumber}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Gender</p>
                <p className='detail'>
                  {user?.gender && capitalizeFirstLetter(user.gender)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='personinfo__container'>
          <p className='title'>Education and Employment</p>
          <div className='first__row'>
            <div>
              <div>
                <p className='label'>Level of Education</p>
                <p className='detail'>{user?.levelOfEducation}</p>
              </div>
              <div className='second'>
                <p className='label'>Office Email</p>
                <p className='detail'>
                  {user?.employmentStatus === 'Unemployed'
                    ? 'N/A'
                    : user?.email}
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Employment Status</p>
                <p className='detail'>{user?.employmentStatus}</p>
              </div>
              <div className='second'>
                <p className='label'>Monthly Income</p>
                <p className='detail'>{user?.monthlyIncome}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Sector of Employment</p>
                <p className='detail'>
                  {user?.employmentStatus === 'Unemployed'
                    ? 'N/A'
                    : user?.sectorOfEmployment}
                </p>
              </div>
              <div className='second'>
                <p className='label'>Loan repayment</p>
                <p className='detail'>{user?.loanRepayment}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Duration of Employment</p>
                <p className='detail'>{user?.durationOfEmployment}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='personinfo__container'>
          <p className='title'>Socials</p>
          <div className='first__row'>
            <div>
              <div>
                <p className='label'>Twitter</p>
                <p className='detail'>
                  {user?.name &&
                    `@${user.name.split(' ').reverse().join('').toLowerCase()}`}
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Facebook</p>
                <p className='detail'>{user?.name}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='label'>Instagram</p>
                <p className='detail'>
                  {user?.name &&
                    `@${user.name.split(' ').join('').toLowerCase()}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='personinfo__container'>
          <p className='title'>Guarantor</p>
          <div className='first__row'>
            {user?.guarantors && user.guarantors.length > 0 ? (
              <>
                <div>
                  <div>
                    <p className='label'>Full Name</p>
                    <p className='detail'>{user.guarantors[0].name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='label'>Phone Number</p>
                    <p className='detail'>{user.guarantors[0].phoneNumber}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='label'>Email</p>
                    <p className='detail'>{user.guarantors[0].email}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='label'>Relationship</p>
                    <p className='detail'>{user.guarantors[0].relationship}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>No guarantor information available.</p>
            )}
          </div>
        </div>
        <div className='first__row'>
          {user?.guarantors && user.guarantors.length > 0 ? (
            <>
              <div>
                <div>
                  <p className='label'>Full Name</p>
                  <p className='detail'>{user.guarantors[1].name}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className='label'>Phone Number</p>
                  <p className='detail'>{user.guarantors[1].phoneNumber}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className='label'>Email</p>
                  <p className='detail'>{user.guarantors[1].email}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className='label'>Relationship</p>
                  <p className='detail'>{user.guarantors[1].relationship}</p>
                </div>
              </div>
            </>
          ) : (
            <p>No guarantor information available.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default UserDetail
