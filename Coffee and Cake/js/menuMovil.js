var propMenu = {

	burger_menu: document.getElementById('burger_menu'),

	slideMenu: document.getElementById('slideMenu'),

	menu_activo: false,

	elementos_menu: document.querySelectorAll('#slideMenu .menu-principal a')

}

var metMenu = {

	inicio: function(){

		propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

		for (var i = 0; i < propMenu.elementos_menu.length; i++) {

			propMenu.elementos_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
	},

	toggleMenu: function(){

		if (propMenu.menu_activo == false) {

			propMenu.menu_activo = true;

			propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
		}

		else {

			propMenu.menu_activo = false;

			propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
		}
	},

	ocultarMenu: function(){

		propMenu.menu_activo = false;

		propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
	}	
}

metMenu.inicio();