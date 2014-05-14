var esprima = require('esprima'),
	merle = require('merle'),
	escodegen = require('escodegen');

// um, i guess this is good enough... :/
// where can i find this function?
function _isRequire(node){
	if (!node) return false;
	if (node.type !== 'CallExpression') return false;
	if (!node.callee || node.callee.type !== 'Identifier') return false;
	if (node.callee.name !== 'require') return false;

	return true;
}

function _transform(strCode, fn){
	var ast = esprima.parse(strCode);

	merle(ast, function(){
		if (!_isRequire(this.value)) return;

		fn.call(this);
	});

	return escodegen.generate(ast);
}

module.exports = _transform;
