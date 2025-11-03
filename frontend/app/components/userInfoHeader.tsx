import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'

import { fetchUser } from '@api/user_endpoints';

/*
    UserInfoHeader Component
    Displays user information and action icons in the chat header.
*/ 
export function UserInfoHeader() {
  const user = fetchUser();
    return (
        <div className="bg-white user-info-header px-5 py-3">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={user.avatar} width="40" />
              <h3 className="text-gray-400 tex-md pl-4">{user.first_name} {user.last_name}</h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMessage} className="text-violet-300"/>
              <a href='#' target='_self' title={`Inviter ${user.first_name} en visio`}><FontAwesomeIcon icon={faVideo} className="text-gray-200 ml-3 hover:text-violet-300"/></a>
              <a href='#' target='_self' title={`Appeler ${user.first_name}`}><FontAwesomeIcon icon={faPhone} className="text-gray-200 ml-3 hover:text-violet-300"/></a>
            </div>
          </div>
        </div> /* <!-- End User info header --> */
    );
}