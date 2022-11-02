$(function () {
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);
});

function precioSabor() {
  let sabor = document.getElementById("sabores").value;
  let saborPrecio = document.getElementById("sabor");

	console.log(sabor)

  switch (sabor) {
    case '1':
      saborPrecio.value = "10";
      break;
    case '2':
      saborPrecio.value = "20";
	  break;
    case '3':
      saborPrecio.value = "30";
      break;
    case '4':
      saborPrecio.value = "40";
      break;
    case '5':
      saborPrecio.value = "50";
      break;
    case '6':
      saborPrecio.value = "60";
      break;
    case '7':
      saborPrecio.value = "70";
      break;

    default:
	  saborPrecio.value = "";
      break;
  }
}

function precioAdorno() 
{
	let adorno = document.getElementById("adornos").value;
	let adornoPrecio = document.getElementById("adorno");
  
	switch (adorno) {
	  case '1':
		adornoPrecio.value = "10";
		break;
	  case '2':
		adornoPrecio.value = "20";
		break;
	  case '3':
		adornoPrecio.value = "30";
		break;
	  case '4':
		adornoPrecio.value = "40";
		break;  
	  default:
		adornoPrecio.value = "";
		break;
	}
}