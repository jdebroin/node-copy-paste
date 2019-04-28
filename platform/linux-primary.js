exports.copy = { command: "xclip", args: [ "-selection", "primary" ] };
exports.paste = { command: "xclip", args: [ "-selection", "primary", "-o" ] };
exports.paste.full_command = [ exports.paste.command ].concat(exports.paste.args).join(" ");
exports.encode = function(str) { return new Buffer(str, "utf8"); };
exports.decode = function(chunks) {
	if(!Array.isArray(chunks)) { chunks = [ chunks ]; }

	return Buffer.concat(chunks).toString("utf8");
};
