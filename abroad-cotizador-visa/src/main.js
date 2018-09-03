import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		reglas: []
	}
});

// app.on('state', ({ changed, current, previous }) => {
// 	console.log('state changed', current);
// });

// app.on('update', ({ changed, current, previous }) => {
// 	console.log('DOM updated after state change', current);
// });

// app.on('destroy', () => {
// 	console.log('this app is being destroyed');
// });

export default app;