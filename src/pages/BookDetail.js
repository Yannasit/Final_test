import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookdetail from "../components/Bookdetail";

function BookDetail(props) {
  const params = useParams();
  useEffect(() => {
    props.getBooksByID(params.isbn);
  }, []);
  function GetBook() {
      return (
        <Bookdetail
          title={props.books[0].title}
          authors={props.books[0].authors}
          isbn={props.books[0].isbn}
          pageCount={props.books[0].pageCount}
          thumbnailUrl={props.books[0].thumbnailUrl}
          shortDescription={props.books[0].shortDescription}
        />
      );
  }
  return <div>{GetBook()}</div>;
}

export default BookDetail;
