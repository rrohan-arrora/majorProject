import { useOktaAuth } from "@okta/okta-react/";
import { Link } from "react-router-dom";

export const LibraryService = () => {
    const { authState } = useOktaAuth();

    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="diaply-4 fw-bold">
                        Can't find what are you looking for?
                    </h1>
                    <p className="lead">
                        If you cannot find what you are looking for,
                        send our library admin's personal message!
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        {authState?.isAuthenticated ?
                            <Link className='btn main-color btn-lg text-white'
                                type="button" to="/#">Library Services </Link>

                            :

                            <Link className='btn main-color btn-lg text-white'
                                to="/login">Sign Up </Link>
                        }
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
            </div>

        </div>
    );
}