import { useEffect, useState } from 'react'
import './Table.scss'
import FilterIcon from '../../assets/filter-results-button.svg'
import ActionsIcon from '../../assets/ic-more-vert-18px.svg'

import { timeParse } from 'd3-time-format'

import ViewIcon from '../../assets/np_view_1214519_000000 1.svg'
import BlacklistIcon from '../../assets/np_delete-friend_3248001_000000 1.png'
import ActivateIcon from '../../assets/np_user_2995993_000000 1.png'

import { User } from '../../models'
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'

interface tableHeaders {
  name: string
}

interface TableProps {
  rows: User[]
  loading: boolean
  rowLength: number
}

const headers: tableHeaders[] = [
  { name: 'organization' },
  { name: 'username' },
  { name: 'email' },
  { name: 'phone number' },
  { name: 'date joined' },
  { name: 'status' },
]

const Table = ({ rows, loading, rowLength }: TableProps) => {
  const parseDate = timeParse('%Y-%m-%dT%H:%M:%S %Z')
  const [activeRow, setActiveRow] = useState<string | null>(null)
  const [currentItems, setCurrentItems] = useState<User[]>([])
  const [filteredRows, setFilteredRows] = useState<User[]>([])
  const [pageCount, setPageCount] = useState<number>(0)
  const [itemOffset, setItemOffset] = useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false)

  useEffect(() => {
    if (!loading) setFilteredRows(rows)
  }, [loading])

  const handleActionClicked = (rowId: string) => {
    setActiveRow((prevActiveRow) => (prevActiveRow === rowId ? null : rowId))
  }

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredRows.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  useEffect(() => {
    const endOffset: number = itemOffset + itemsPerPage
    const slicedRows: User[] = filteredRows.slice(itemOffset, endOffset)
    setCurrentItems(slicedRows)
    setPageCount(Math.ceil(filteredRows.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, filteredRows])

  const organizationsSelectOptions = Array.from(
    new Set(rows.map((row) => ({ value: row.company, label: row.company })))
  )

  const statusSelectOptions = [
    { value: 'active', label: 'active' },
    { value: 'pending', label: 'pending' },
    { value: 'inactive', label: 'inactive' },
    { value: 'blacklisted', label: 'blacklisted' },
  ]

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(event.target.value, 10)
    setItemsPerPage(newItemsPerPage)
    setItemOffset(0)
  }

  const FilterComponent = () => {
    interface SearchTerm {
      organization: string | null
      user: string
      email: string
      date: string
      phoneNumber: string
      status: string
    }

    const [searchTerm, setSearchTerm] = useState<SearchTerm>({
      organization: '',
      user: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    })

    const resetSearchTerm = (): void => {
      setSearchTerm({
        organization: '',
        user: '',
        email: '',
        date: '',
        phoneNumber: '',
        status: '',
      })
      const endOffset: number = itemOffset + itemsPerPage
      const slicedRows: User[] = filteredRows.slice(itemOffset, endOffset)
      setFilteredRows(rows)
      setCurrentItems(slicedRows)
      setItemsPerPage(10)
      setPageCount(Math.ceil(filteredRows.length / itemsPerPage))
    }

    const handleSearch = () => {
      const filteredRowsResult: User[] = filteredRows.filter((row: User) => {
        console.log(searchTerm)
        return (
          row.company.includes(searchTerm.organization ?? '') &&
          row.name.toLowerCase().includes(searchTerm.user.toLowerCase()) &&
          row.email.toLowerCase().includes(searchTerm.email.toLowerCase()) &&
          row.dateJoined.toString().includes(searchTerm.date) &&
          row.phoneNumber.includes(searchTerm.phoneNumber) &&
          (searchTerm.status.length ? row.status === searchTerm.status : true)
        )
      })
      const endOffset: number = itemOffset + itemsPerPage
      const slicedRows: User[] = filteredRowsResult.slice(itemOffset, endOffset)
      setFilteredRows(filteredRowsResult)
      setCurrentItems(slicedRows)
      setItemsPerPage(10)
      setPageCount(Math.ceil(filteredRowsResult.length / itemsPerPage))
    }
    return (
      <div className={`filter__container ${!isFilterVisible && 'hideFilter'}`}>
        <p className='filter__container-header'>Organization</p>
        <Select
          value={{
            value: searchTerm.organization,
            label: searchTerm.organization,
          }} // Provide selected value as an object
          options={organizationsSelectOptions}
          onChange={(selectedOption) => {
            setSearchTerm({
              ...searchTerm,
              organization: selectedOption?.value || '',
            })
          }}
        />
        <p className='filter__container-header top'>Username</p>
        <input
          className='filter__container-input'
          placeholder='User'
          value={searchTerm.user}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, user: e.target.value })
          }
        />
        <p className='filter__container-header top'>Email</p>
        <input
          className='filter__container-input '
          placeholder='Email'
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, email: e.target.value })
          }
        />
        <p className='filter__container-header top'>Date</p>
        <input
          className='filter__container-input '
          type='date'
          placeholder='Date'
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, date: e.target.value })
          }
        />
        <p className='filter__container-header top'>Phone Number</p>
        <input
          className='filter__container-input '
          placeholder='Phone Number'
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, phoneNumber: e.target.value })
          }
        />
        <p className='filter__container-header top'>Staus</p>
        <Select
          value={{ value: searchTerm.status, label: searchTerm.status }}
          options={statusSelectOptions}
          onChange={(selectedOption) => {
            setSearchTerm({
              ...searchTerm,
              status: selectedOption?.value || '',
            })
          }}
        />
        <div className='filter__container-buttons'>
          <button
            className='filter__container-buttons_resetbtn'
            onClick={resetSearchTerm}>
            Reset
          </button>
          <button
            className='filter__container-buttons_filterbtn'
            onClick={handleSearch}>
            Filter
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='table__container'>
        {loading ? (
          <div className='loader'>
            <p>Loading Users</p>
            <BarLoader color='#39cdcc' />
          </div>
        ) : (
          <div>
            <div className='mobile__filter-header'>
              <p>Filter by</p>
              <img
                src={FilterIcon}
                onClick={() => setIsFilterVisible(!isFilterVisible)}
              />
            </div>
            <table>
              <thead>
                <tr>
                  {headers.map((header, i) => (
                    <th key={i}>
                      {header.name}
                      <img
                        src={FilterIcon}
                        className='header__filter'
                        onClick={() => setIsFilterVisible(!isFilterVisible)}
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((row: User) => (
                  <tr key={row._id}>
                    <td>{row.company}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNumber}</td>
                    <td>
                      {row.dateJoined
                        ? parseDate(row.dateJoined.toString())?.toLocaleString() // Format the Date as a string
                        : 'N/A'}
                    </td>
                    <td>
                      <div className='tag'>
                        <p
                          className={`tag__text ${
                            row.status === 'active'
                              ? 'activeStatus'
                              : row.status === 'pending'
                              ? 'pending'
                              : row.status === 'blacklisted'
                              ? 'blacklisted'
                              : row.status === 'inactive'
                              ? 'inactive'
                              : ''
                          }`}>
                          {row.status}
                        </p>
                      </div>
                    </td>
                    {/* <div className="actions__container"> */}
                    <td onClick={() => handleActionClicked(row._id)}>
                      <div className='action__btn'>
                        <img src={ActionsIcon} />
                      </div>
                      {activeRow === row._id && (
                        <div className='dropdown'>
                          <Link className='link' to={`user/${row._id}`}>
                            <div className='dropdown__item'>
                              <img src={ViewIcon} />
                              <p> View Details</p>
                            </div>
                          </Link>
                          <div className='dropdown__item'>
                            <img src={BlacklistIcon} />
                            <p> Blacklist User</p>
                          </div>
                          <div className='dropdown__item'>
                            <img src={ActivateIcon} />
                            <p> Activate User</p>
                          </div>
                        </div>
                      )}
                    </td>
                    {/* </div> */}
                  </tr>
                ))}
              </tbody>
              <FilterComponent />
            </table>
          </div>
        )}
      </div>
      <div className='pagContainer'>
        <div className='row__count'>
          <p>Showing </p>
          <select className='itemsPerPage' onChange={handleItemsPerPageChange}>
            <option value={10}>{10}</option>
            <option value={rowLength / 25}>{rowLength / 25}</option>
            <option value={rowLength / 10}>{rowLength / 10}</option>
            <option value={rowLength / 5}>{rowLength / 5}</option>
            <option value={rowLength}>{rowLength}</option>
          </select>
          <p>out of {rowLength} </p>
        </div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page__num'
          previousLinkClassName='page__btn'
          nextLinkClassName='page__btn'
          activeLinkClassName='active'
        />
      </div>
    </>
  )
}

export default Table
