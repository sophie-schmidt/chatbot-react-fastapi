import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons'

import Moment from 'moment';

/*
    Sidebar Component
    Renders the sidebar with search functionality and a list of conversations.
*/
export function Sidebar(props?:unknown) {
    return (
        <div className="">

          {/* Search for Conversations box */}
        <div className="search-box h-10 text-slate-300">
          <div className="flex justify-between px-5 border-b border-slate-100 pb-4">
            <form className="flex justify-center items-center">
              <FontAwesomeIcon icon={faSearch} className="pr-2" />
              <input type="text" name="search" id="search" placeholder="Chercher une conversation" className="font-light focus:outline-none" />
            </form>
            <div>
              <button className="relative">
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faPlus} className="absolute -top-2 text-sm"/>
              </button>
            </div>
          </div>
        </div> {/* End Search for Conversations box */}

        {/* Conversations list */}
        <div className="user-list overflow-y-auto h-screen bg-white">

           {/* Single conversation item */}
          <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer">
            <div className="pr-4">
              <img src="https://cdn-icons-png.flaticon.com/512/1391/1391034.png" width="30" />
            </div>
            <div>
              <h3 className="text-violet-500 tex-md">Sujet alpha</h3>
              <p className="text-sm text-gray-400 font-light overflow-hidden h-5">{ Moment('2025-05-09T19:30').format('LLL') }</p>
            </div>
          </div> {/* End Single conversation item */}

           {/* Single v item */}
          <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer">
            <div className="pr-4">
              <img src="https://cdn-icons-png.flaticon.com/512/1391/1391034.png" width="30" />
            </div>
            <div>
              <h3 className="text-violet-500 tex-md">Problématique n°5</h3>
              <p className="text-sm text-gray-400 font-light overflow-hidden h-5">{ Moment('2025-03-16T09:12').format('LLL') }</p>
            </div>
          </div> {/* End Single conversation item */}


        </div> {/* End Conversations list */}
      </div>
    );
}