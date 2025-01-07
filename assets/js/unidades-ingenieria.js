function redondear (n, decimales) {
	const f = Math.pow(10, decimales)
	return Math.trunc(n * f) / f
}

function conversor (numero) {
	let resultado;
	const escalas = [
		0.000000001, // micro (u)
		0.000001, // nano (n)
		0.001, // mili (m)
		1, // unidad base (sin prefijo)
		1000, // kilo (k) 1.000
		1000000, // Mega (M) 1.000.000
		1000000000, // Giga (G) 1.000.000.000
		1000000000000, // Tera (T) 1.000.000.000.000
		1000000000000000, // Peta (P) 1.000.000.000.000.000
		1000000000000000000, // Exa (E)  1.000.000.000.000.000.000
		1000000000000000000000, // Zeta (Z) 1.000.000.000.000.000.000.000
		1000000000000000000000000 // Yota (Y) 1.000.000.000.000.000.000.000.000
	]

	const escalas_letras = [
		"u",
		"n",
		"m",
		"",
		"k",
		"M",
		"G",
		"T",
		"P",
		"E",
		"Z",
		"Y"
	]

	for (var i = 11; i >= 0; i--) {

		if (numero % escalas[i] != numero) {

			resultado = redondear(numero / escalas[i], 1) + escalas_letras[i]
			break;
		}
	}

	return resultado;
}
