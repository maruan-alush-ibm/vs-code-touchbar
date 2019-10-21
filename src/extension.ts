import * as vscode from 'vscode';

const terminal = vscode.window.terminals[0];

function sendTextFunc(setting: string){

	let temp = vscode.workspace.getConfiguration('touchbar').get(setting);

	vscode.commands.executeCommand('workbench.action.terminal.focus');
	terminal.show();
	vscode.commands.executeCommand('workbench.action.terminal.clear');
	
	terminal.sendText("npm run " + String(temp));

}


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-code-touchbar" is now active!');

	let NPM_RUN = vscode.commands.registerCommand('extension.NPM_run', () => {

		let temp = vscode.workspace.getConfiguration('touchbar').get("run");
		
		vscode.commands.executeCommand('npm-script.run');
	});

	let NPM_BUILD = vscode.commands.registerCommand('extension.NPM_build', () => {

		sendTextFunc("build");

	});

	let NPM_START = vscode.commands.registerCommand('extension.NPM_start', () => {

		sendTextFunc("start");


	});

	let NPM_TEST = vscode.commands.registerCommand('extension.NPM_test', () => {

		sendTextFunc("test");

	});

	context.subscriptions.push(NPM_RUN, NPM_BUILD, NPM_START, NPM_TEST);
}


export function deactivate() {}
