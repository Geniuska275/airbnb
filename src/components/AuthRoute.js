import {Route,Navigate} from "react-router-dom";
import {connect} from "react-redux";

const AuthRoute=({children,authenticated})=>{
  
  if(!authenticated){
    return(<Navigate to="/login"/>)
  }
  return children
}
const mapStateToProps=({session})=>({   authenticated:session.authenticated
}
)
export default connect(mapStateToProps)(AuthRoute)