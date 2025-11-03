import { Sidebar } from "@components/sideBar";
import { Main } from "@components/main";
import Moment from 'moment';

import { ConversationStore } from "@stores/conversationStore";


/*	SinglePageApp Component
	Renders the main chat application layout with sidebar and main chat area.
*/
export default async function SinglePageApp() {

   	Moment.locale(process.env.locale || 'en');
	const initialConversation = await ConversationStore.getConversation$();

	return (
		<div className="flex">
			<div className="basis-2/6 pt-3 bg-white border-r border-slate-100">
				<Sidebar />
			</div>
			<Main initialConversation={initialConversation} />
		</div>
	);
}
