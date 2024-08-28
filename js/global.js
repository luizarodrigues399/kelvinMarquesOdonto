function irParaElemento(nomeClasse){

    document.querySelector(`.${nomeClasse}`).scrollIntoView();
}

function irParaElementoEFechar(nomeClasse){

    document.querySelector(`.${nomeClasse}`).scrollIntoView();

    document.querySelector('.sidebar').classList.toggle("abrir-sidebar");
}

function toggleSidebar() {

    document.querySelector('.sidebar').classList.toggle("abrir-sidebar");
}

function direcionarWhatsapp(){

    window.open("https://api.whatsapp.com/send/?phone=553188662466&text=Quero+saber+mais+sobre+suas+consultas+odontologicas&type=phone_number&app_absent=0", "_blank");
}

function direcionarMaps(){

    window.open("https://www.google.com/maps/place/R.+do+Ouro,+857+-+Serra,+Belo+Horizonte+-+MG,+30220-000/@-19.9386845,-43.9221018,17z/data=!4m6!3m5!1s0xa699be9f1a0c69:0x639437a205f594f4!8m2!3d-19.9385332!4d-43.9199989!16s%2Fg%2F11c0y4f6_y?entry=ttu", "_blank");
}