const safeTag = {
    '\'': '&apos;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
};

console.log(`<b>${fn(process.argv[2])} says</b>: \"${fn(process.argv[3])}\"`);

function fn(x) {
	return Array.from(x).map(ch => {
					if (ch in safeTag) {
						return safeTag[ch];
					} else {
						return ch;
					};
				}).join('');	
}
