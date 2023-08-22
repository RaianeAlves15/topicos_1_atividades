function reajusteSalarial(nome, salario) {
	let salarioFinal = salario;

	if (salario >= 1500) {
		salarioFinal = salario + (salario * 0.05);
	}

	console.log("Funcionário: " + nome);
	console.log("Salário Final: R$" + salario);
}

module.exports = reajusteSalarial;