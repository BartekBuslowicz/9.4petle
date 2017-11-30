function drawTree(l) {
	l = l*2;
	for ( var i = 0 ; i < l ; i++) {
		var star = '';
		var space = '';
		for (var e = 1 ; e < (l - i)/2 ; e++) {
			space += ' ';
		}
		for (var j = 0 ; j < i ; j++) {
			star += '*';
		}
		if (j % 2 == 1) {
		console.log(space,star);
		}
	}
	
}
drawTree(25);