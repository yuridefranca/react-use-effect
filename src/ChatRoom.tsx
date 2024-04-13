import { useEffect } from 'react';

function createConnection(chatRoomId: string, serverUrl: string) {
	return {
		connect() {
			console.log('✅ Connecting to room', chatRoomId, 'at', serverUrl);
		},
		disconnect() {
			console.log('❌ Disconnecting from room', chatRoomId);
		},
	};
}

export function ChatRoom({ chatRoomId }: { chatRoomId: string }) {
  console.log('chat room started')
	const serverUrl = 'http://localhost:3000';

	useEffect(() => {
		const connection = createConnection(chatRoomId, serverUrl);
		connection.connect();

		return () => {
      connection.disconnect()
    };
	}, [chatRoomId]);

	return (
		<div>
			<h1>Chat Room: {chatRoomId}</h1>
			<p>Connected to server at {serverUrl}</p>
		</div>
	);
}
