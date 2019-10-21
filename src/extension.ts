import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-code-touchbar" is now active!');

	let NPM_RUN = vscode.commands.registerCommand('extension.NPM_run', () => {

		let x = vscode.workspace.getConfiguration('touchbar').get('testSetting');

		vscode.commands.executeCommand('npm-script.' + String(x));
	});

	let NPM_BUILD = vscode.commands.registerCommand('extension.NPM_build', () => {
		
		vscode.commands.executeCommand('npm-script.build');
	});

	context.subscriptions.push(NPM_RUN, NPM_BUILD);
}


export function deactivate() {}
