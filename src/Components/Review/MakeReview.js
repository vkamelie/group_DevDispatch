import React from "react";
import { Link } from "react-router-dom";
class MakeReview extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <ul>Review Guidelines
                <li>Only Applicants, Students, and Graduates are permitted to leave reviews on DevDispatch.</li>
                <li>Post clear, valuable, and honest information that will be useful and informative to future coding bootcampers. Think about what your bootcamp excelled at and what might have been better.</li>
                <li>Be nice to others; don't attack others.</li>
                <li>Use good grammar and check your spelling.</li>
                <li>Don't post reviews on behalf of other students or impersonate any person, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Don't spam or post fake reviews intended to boost or lower ratings.</li>
                <li>Don't post or link to content that is sexually explicit.</li>
                <li>Don't post or link to content that is abusive or hateful or threatens or harasses others.</li>
                <li>Please do not submit duplicate or multiple reviews. These will be deleted.</li>
                <li>Please note that we reserve the right to review and remove commentary that violates our policies.</li>
            </ul>
            <h3>You must log in to submit a review.</h3>
            <Link to="Review">
            <h3>Click here to log in</h3>
            </Link>
            <h3>Which school are you reviewing?</h3>
            <input placeholder="Select School"></input>
            <h3>Title</h3>
            <input></input>
            <h3>Description</h3>
            <input form></input>
            <h3>Rating</h3>
            <div>RATING BOX</div>
            <div>School Details</div>
            <h3>You must log in to submit a review.</h3>
            <Link to="Review">
            <h3>Click here to log in</h3>
            </Link>
            <button>Submit</button>
        </div> );
    }
}
 
export default MakeReview;