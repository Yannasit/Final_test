import React from 'react'
import { Link } from 'react-router-dom';

function Books({ title, authors, isbn, pageCount, thumbnailUrl, shortDescription }) {
  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={thumbnailUrl} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <Link to={`/Bookdetail/${isbn}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
          <p className="card-text">ผู้แต่ง : {authors}</p>
          <p className="card-text">รหัส isbn : {isbn}</p>
          <p className="card-text">คำอธิบาย : {shortDescription}</p>
          <p className="card-text"><small className="text-muted">จำนวนหน้าทั้งหมด : {pageCount}</small></p>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Books;