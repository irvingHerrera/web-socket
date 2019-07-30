var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [
    lblTicket1,
    lblTicket2,
    lblTicket3,
    lblTicket4
];
var lblEscritorio = [
    lblEscritorio1,
    lblEscritorio2,
    lblEscritorio3,
    lblEscritorio4
];

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data) {

    console.log(data);
    actualizaHtml( data.ultimosCuatro );

});

socket.on('ultimosCuatro', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');


    actualizaHtml( data.ultimosCuatro );
});

function actualizaHtml( ultimosCuatro ) {
    console.log(ultimosCuatro);
    for (let index = 0; index < ultimosCuatro.length; index++) {
        lblTickets[index].text('Ticket ' + ultimosCuatro[index].numero);
        lblEscritorio[index].text('Escritorio ' + ultimosCuatro[index].escritorio);
    }
}