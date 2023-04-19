import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = (window.location.pathname).split("/")[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:1111/api/books/${bookId}`;
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            // deserialize the json response obtained 
            const loadedBook: BookModel = {
                id: parseInt(bookId),
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copies_available: responseJson.copies_available,
                category: responseJson.category,
                img: responseJson.img,
            };

            setBook(loadedBook);
            setIsLoading(false);
        }
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <div className="contaner m-5">
                <p>Loading...</p>
            </div>
        )
    }
    if (httpError) {
        return (
            <div className="contaner m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div>
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-2">
                        {book?.img ?
                            <img src={book?.img} alt="Book" width="226" height="349" />
                            :
                            <img src={require('./../../Images/BooksImages/new-book-1.png')} width="226" height="349" alt="Book" />
                        }
                    </div>
                    <div className="col-4 col-md-4 container">
                        <div className="ml-2">
                            <h2>{book?.title}</h2>
                            <h5 className="text-primary">{book?.author}</h5>
                            <p className="lead">{book?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {book?.img ?
                        <img src={book?.img} alt="Book" width="226" height="349" />
                        :
                        <img src={require('./../../Images/BooksImages/new-book-1.png')} width="226" height="349" alt="Book" />
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{book?.title}</h2>
                        <h5 className="text-primary">{book?.author}</h5>
                        <p className="lead">{book?.description}</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}