import { IoIosStats } from "react-icons/io";
import { useContext} from "react";
import { contextForAuth } from "@/lib/store/authContext";

function Nav(){

  const {user, loading, logout} = useContext(contextForAuth);

    return( 
        <header className="container max-w-2xl px-6 py-6 mx-auto bg-slate-600">
        <div className="flex items-center justify-between">
      {/*User name and profile pic*/}
      {user && !loading && (
          <div className="flex items-center gap-2">
          {/*for profile image*/}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src={user.photoURL} 
            alt={user.displayName}
            referrerPolicy="no-referrer"
          />
          </div>
    
          {/*for user name*/}
          <small>Hi, {user.displayName}</small>
        </div>
      )}
      
  
      {/*right side of nav section*/}
      {user && !loading && (
        <nav className="flex items-center gap-4">
        <div>
          <a href="#chart">
          <IoIosStats className="text-2xl" />
          </a>
        </div>
          <div>
            <button onClick={logout} className="btn btn-danger">Sign Out</button>
          </div>
      </nav>
      )}
      </div>
    </header>
    );
}

export default Nav;