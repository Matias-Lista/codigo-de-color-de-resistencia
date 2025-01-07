const banda1 = document.getElementById('banda-1');
const banda2 = document.getElementById('banda-2');
const banda3 = document.getElementById('banda-3');
const banda4 = document.getElementById('banda-4');

const bandas = [banda1, banda2, banda3, banda4]

const banda1_input = document.getElementById('banda-1-input')
const banda2_input = document.getElementById('banda-2-input')
const banda3_input = document.getElementById('banda-3-input')
const banda4_input = document.getElementById('banda-4-input')

const calculo = document.getElementById('calculo')
const resultado_elemento = document.getElementById('resultado')

const aria_desc = document.getElementById('resistencia-desc')

const negro 	 = '#000'
const marron   = '#724729'
const rojo 	 = '#ba2525'
const naranja  = '#e08224'
const amarillo = '#ffec00'
const verde    = '#4b8241'
const azul 	 = '#434a9b'
const violeta  = '#6f4d87'
const gris 	 = '#878787'
const blanco 	 = "#fff"
const oro 	 = "#b7960d"
const plata 	 = "#e0e0e0"
const rosa 	 = "#d85ae2"
const ninguno  = "#d4b598"

const colores_bandas = [negro, marron, rojo, naranja, amarillo, verde, azul, violeta, gris, blanco, oro, plata, rosa, ninguno]
const colores_tolerancia = [marron, rojo, naranja, amarillo, verde, azul, violeta, gris, oro, plata, ninguno]
const multiplicadores = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01, 0.001]
const tolerancia = ["1%", "2%", "0.05%", "0.02%", "0.5%", "0.25%", "0.1%", "0.01%", "5%", "10%", "20%"]

const aria_bandas = [
	["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco"],
	["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco"],
	["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco", "Oro", "Plata", "Rosa"],
	["Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Oro", "Plata", "Ningun color"]
]

const resultado = [1, 0, 0, 8]

function update (banda, valor, esTolerancia = false) {

	const colores = esTolerancia ? colores_tolerancia : colores_bandas;

	// Actualizar valores si el botón no está presionado.
	if (resultado[banda - 1] != colores[valor]) {

		// Actualizar el botón seleccionado visualmente.
		const boton_anterior = this.parentElement.getElementsByClassName('active')[0]
		boton_anterior.ariaPressed = 'false'
		boton_anterior.classList.remove('active')

		this.classList.add('active')
		this.ariaPressed = "true"


		// Actualizar banda del SVG.
		bandas[banda - 1].setAttribute('fill', colores[valor])

		// Actualizar banda del SVG.
		resultado[banda - 1] = valor
	}


	const digitos = `${resultado[0]}${resultado[1]}`;
	const factor = multiplicadores[resultado[2]];
	const margen_de_error = tolerancia[resultado[3]];

	calculo.innerHTML = `${+digitos} * ${conversor(factor)}Ω`;
	resultado_elemento.innerHTML = `${conversor(digitos * factor)}Ω ± ${margen_de_error}`;

	aria_desc.innerHTML = `Banda 1 ${aria_bandas[0][resultado[0]]}, Banda 2 ${aria_bandas[1][resultado[1]]}, Banda 3 ${aria_bandas[2][resultado[2]]}, Banda 4 ${aria_bandas[3][resultado[3]]}`;
}

bandas_btns = document.getElementsByClassName('band-btn')
for (var i = 0; i < bandas_btns.length; i++) {
	bandas_btns[i].addEventListener('click', function () {
		const banda = this.parentElement.getAttribute('attr-banda')
		const valor = this.getAttribute('attr-value')
		const esTolerancia = (valor == 4) ? true : false;

		update.bind(this)(banda, valor, esTolerancia);
	});
}
