import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-code-touchbar" is now active!');

	let NPM_run = vscode.commands.registerCommand('extension.NPM_run', () => {
		
		vscode.commands.executeCommand('npm-script.run');
	});

	let NPM_build = vscode.commands.registerCommand('extension.NPM_build', () => {
		
		vscode.commands.executeCommand('npm-script.build');
	});

	context.subscriptions.push(NPM_run, NPM_build);
}


export function deactivate() {}
