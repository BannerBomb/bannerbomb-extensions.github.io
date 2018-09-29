class ServerFolders extends DI.Structures.Plugin {
	constructor() {
		super({
			name: "ServerFolders",
			version: "5.7.6",
			author: "BannerBomb",
			description: "Adds the feature to create folders to organize your servers. Right click a server > 'ServerFolders' > 'Create Server' to create a server. To add servers to a folder hold 'Ctrl' and drag the server onto the folder, this will add the server to the folderlist and hide it in the serverlist. To open  folder click the folder. A folder can only be opened when it has at least one server in it. To remove a server from a folder, open the folder and either right click the server > 'Serverfolders' > 'Remove Server from Folder' or hold 'Del' and click the server in the folderlist."
		}, `body{};`);
		this.labels = {};
	};
};

DI.PluginManager.load(ServerFolders);
