import React from "react";
// import axios from "axios";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { withAuth0 } from '@auth0/auth0-react';
import Header from "../LandingPage/Header";
//import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profileData: {},
  //     user: this.props.auth0.user
  //   };
  // }

  // getData = async () => {
  //   const responseData = await axios
  //     .get(`$(process.env.REACT_APP_PORT}/user?email=${this.state.user.email}`) //params to be extracted and added here
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  //   this.setState({
  //     profileData: responseData.data,
  //   });
  // };
  // componentDidMount() {
  //   this.getData();
  // }
  render() {
    const { user } = this.props.auth0;
    // console.log(this.state.user)
    return (
      <>
        <Header />
        <div className="vh-80" style={{ backgroundColor: 'white' }}>
      <MDBContainer className="container py-5 h-100 ">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' , border:'1px solid orange', backgroundColor :'orange'}}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px'  , margin:'auto'}} />
                </div>
                <MDBTypography tag="h4" color="white">   {user.name} </MDBTypography>
                <MDBCardText className="mb-4" style={{color:'white'}}>
                {user.email} <span className="mx-2"></span>
                </MDBCardText>
                <MDBBtn style={{  margin:'auto'}} rounded size="lg" className="btn btn-outline-warning  bg-white btn-lg">
                  Add Blog
                </MDBBtn>
                <MDBBtn style={{  margin:'auto' , marginLeft:'5vh'}} rounded size="lg" className="btn btn-outline-warning  bg-white btn-lg">
                  Add Service
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

      </>
    );
  }
}
export default withAuth0(UserProfile);
// {true &&

//   <MDBCard>
//     <MDBRipple
//       rippleColor="light"
//       rippleTag="div"
//       className="bg-image hover-overlay"
//     >
//       <MDBCardImage src='https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png' fluid alt="..." />
//       <a href='/'>
//         <div
//           className="mask"
//           style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//         ></div>
//       </a>
//     </MDBRipple>
//     <MDBCardBody>
//       <MDBCardTitle>Welcome {user.name} !</MDBCardTitle>
//       {/* <MDBCardText>
//             Some quick example text to build on the card title and make
//             up the bulk of the card's content.
//           </MDBCardText> */}
//       <MDBBtn href="#">Add Service</MDBBtn>
//       <MDBBtn href="#">Add Artical</MDBBtn>
//     </MDBCardBody>
//   </MDBCard>

// }