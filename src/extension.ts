import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-code-touchbar" is now active!');

	let NPM_RUN = vscode.commands.registerCommand('extension.NPM_run', () => {

		//let x = getConfiguration('touchbar').get('testSetting');
		//console.log(x);

		vscode.commands.executeCommand('npm-script.run');
	});

	let NPM_BUILD = vscode.commands.registerCommand('extension.NPM_build', () => {
		
		vscode.commands.executeCommand('npm-script.build');
	});

	context.subscriptions.push(NPM_RUN, NPM_BUILD);
}


export function deactivate() {}
