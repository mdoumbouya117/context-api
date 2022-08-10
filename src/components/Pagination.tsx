import React from 'react'

interface IProps {
    count: number,
    setPage: (index: number) => void
}

export default function Pagination(props: IProps) {
    const { count, setPage } = props
    const [currentPage, setCurrentPage] = React.useState(1)

    const onChangePage = (index: number) => {
      setPage(index)
      setCurrentPage(index)
    }

  return (
    <ul className="pagination-list">
        {[...Array(count)].map((element, index: number) =>
        <li key={index} onClick={() => onChangePage(index+1)} 
        style={{backgroundColor: currentPage === index+1 ? 'black' : '', color: currentPage === index+1 ? 
      'white': ''}}>{index+1}</li>)}
    </ul>
  )
}
