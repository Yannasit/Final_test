import React, { useEffect } from 'react'
import Books from "../components/Books";


function BooksList(props) {
    const handledOnLoad = () => {
        props.handledOnLoad();
    };
    useEffect(() => {
        handledOnLoad();
      }, []);

      function GetAllBooks() {
        return props.books.map(function (book) {
  return (
      <Books
      title={book.title}                              //ชื่อหนังสือ
      authors={book.authors}                          //ผู้แต่ง
      isbn={book.isbn}                                //รหัส isbn
      pageCount={book.pageCount}                      //จำนวนหน้าทั้งหมด
      thumbnailUrl={book.thumbnailUrl}                //รูปภาพ
      shortDescription={book.shortDescription}        //คำอธิบายย่อ
     
    />
  );

});
      }
      return <div className='container' ><div className='row col-12'>{GetAllBooks()}</div></div>;
}

export default BooksList;