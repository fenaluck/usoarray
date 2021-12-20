// creando variables desde array

let Radiologia = [
                {Hora: '11:00', Especialista:'IGNACIO SCHULZ', Paciente:'FRANCISCA ROJAS', Rut:	'9878782-1', Prevision:'FONASA'},
                {Hora: '11:30',	Especialista:'FEDERICO SUBERCASEAUX', Paciente:'PAMELA ESTRADA', Rut: '15345241-3', Prevision:'ISAPRE'},
                {Hora: '15:00',	Especialista:'FERNANDO WURTHZ', Paciente:'ARMANDO LUNA', Rut:'16445345-9', Prevision:'ISAPRE'},
                {Hora: '15:30',	Especialista:'ANA MARIA GODOY', Paciente:'MANUEL GODOY', Rut:'17666419-0', Prevision:'FONASA'},
                {Hora: '16:00',	Especialista:'PATRICIA SUAZO', Paciente: 'RAMON ULLOA', Rut:'14989389-K', Prevision:'FONASA'},

            ]
let Traumatologia = [
                {Hora: '8:00', Especialista:'MARIA PAZ ALTUZARRA', Paciente:'PAULA SANCHEZ', Rut:'15554774-5', Prevision:'FONASA'},
                {Hora:'10:00', Especialista:'RAUL ARAYA', Paciente:'ANGÉLICA NAVAS', Rut:'15444147-9', Prevision:'ISAPRE'},
                {Hora:'10:30', Especialista:'MARIA ARRIAGADA', Paciente:'ANA KLAPP', Rut:'17879423-9', Prevision:'ISAPRE'},
                {Hora:'11:00', Especialista:'ALEJANDRO BADILLA', Paciente:'FELIPE MARDONES', Rut:'1547423-6', Prevision:'ISAPRE'},
                {Hora:'11:30', Especialista:'CECILIA BUDNIK', Paciente:'DIEGO MARRE', Rut:'16554741-K',	Prevision:'FONASA'},
                {Hora:'12:00', Especialista:'ARTURO CAVAGNARO', Paciente:'CECILIA MENDEZ', Rut:'9747535-8', Prevision:'ISAPRE'},
                {Hora:'12:30', Especialista:'ANDRES KANACRI', Paciente:'MARCIAL SUAZO',	Rut:'11254785-5', Prevision:'ISAPRE'},

            ];
            
let Dental = [
                {Hora: " 8:30", Especialista: 'ANDREA ZUÑIGA ', Paciente:'MARCELA RETAML', Rut:'1123425-6', Prevision:'ISAPRE'} ,
                {Hora: "11:00", Especialista: 'MARIA PIA ZAÑARTU', Paciente:'ANGEL MUÑOZ', Rut:'9878789-2', Prevision:'ISAPRE'},
                {Hora: "11:30", Especialista: 'SCARLETT WITTING', Paciente:'MARIO KAST', Rut:'7998789-5', Prevision:'FONASA'},
                {Hora: "13:00", Especialista: 'FRANCISCO VON TEUBER', Paciente:'KARIN FERNANDZ', Rut:'18887662-K', Prevision:'FONASA'},
                {Hora: "13:30", Especialista: 'EDUARDO VIÑUELA', Paciente:'HUGO SANCHEZ', Rut:'17665461-4', Prevision:'FONASA'},
                {Hora: "14:00", Especialista: 'RAQUEL VILLASECA', Paciente:'ANA SEPULVEDA',	Rut:'14441281-0', Prevision:'ISAPRE'},

            ];

//cargar pagina
//creando funciones para llenado de tablas

//carga de tablas
let tablaRadio = ''
for (item_radiologia of Radiologia) {
    tablaRadio += `<tr>
                        <td>${item_radiologia.Hora}</td>
                        <td>${item_radiologia.Especialista}</td>
                        <td>${item_radiologia.Paciente}</td>
                        <td>${item_radiologia.Rut}</td>
                        <td>${item_radiologia.Prevision}</td>
                     </tr> `
}       
document.querySelector("#filas-radio").innerHTML=tablaRadio;
//buscar primer paciente de la tabla
let primeraAtencion = Radiologia[0].Paciente + " - ".concat(Radiologia[0].Prevision)
document.querySelector("#primera-radio").innerHTML=primeraAtencion;
    
//buscar ultimo paciente de la tabla
let ultimaAtencion = Radiologia.filter(H => H.Hora == "16:00").map(p => p.Paciente);
document.querySelector("#ultima-radio").innerHTML= ultimaAtencion + " - ".concat(Radiologia[0].Prevision);

//Primera y ultima atencion Especialista
document.querySelector("#primer-especialr").innerHTML = Radiologia[0].Especialista;
document.querySelector("#ultimo-especialr").innerHTML = Radiologia.filter(H => H.Hora == "16:00").map(p => p.Especialista);



//segunda tabla
let tablaTraumatologica = ''
for (item_traumatologia of Traumatologia) {
    tablaTraumatologica += `<tr>
                            <td>${item_traumatologia.Hora}</td>
                            <td>${item_traumatologia.Especialista}</td>
                            <td>${item_traumatologia.Paciente}</td>
                            <td>${item_traumatologia.Rut}</td>
                            <td>${item_traumatologia.Prevision}</td>
                            </tr> `
}       
document.querySelector("#filas-trauma").innerHTML=tablaTraumatologica;


//buscar primer paciente de la tabla
let primeraAtencionT = Traumatologia[0].Paciente + " - ".concat(Traumatologia[0].Prevision)
document.querySelector("#primera-trauma").innerHTML=primeraAtencionT;
    
//buscar ultimo paciente de la tabla
let ultimaAtencionT = Traumatologia.filter(H => H.Hora == "12:30").map(p => p.Paciente);
document.querySelector("#ultima-trauma").innerHTML= ultimaAtencionT + " - ".concat(Traumatologia[0].Prevision)
//Primera y ultima atencion Especialista
document.querySelector("#primer-especialt").innerHTML = Traumatologia[0].Especialista;
document.querySelector("#ultimo-especialt").innerHTML = Traumatologia.filter(H => H.Hora == "12:30").map(p => p.Especialista);

//tercera Tabla
let tablaDental = ''
for (item_Dental of Dental) {
    tablaDental += `<tr>
                            <td>${item_Dental.Hora}</td>
                            <td>${item_Dental.Especialista}</td>
                            <td>${item_Dental.Paciente}</td>
                            <td>${item_Dental.Rut}</td>
                            <td>${item_Dental.Prevision}</td>
                            </tr> `
}       
document.querySelector("#filas-dental").innerHTML = tablaDental;

//buscar primer paciente de la tabla
let primeraAtenciond = Dental[0].Paciente.concat(" - ",Dental[0].Prevision);
document.querySelector("#primera-dental").innerHTML = primeraAtenciond;
//buscar ultimo paciente de la tabla
ultimaAtenciond = Dental.filter(H => H.Hora == "14:00").map(p => p.Paciente);
document.querySelector("#ultima-dental").innerHTML = ultimaAtenciond + " - ".concat(Dental[0].Prevision);

//Primera y ultima atencion Especialista
document.querySelector("#primer-especial").innerHTML = Dental[0].Especialista;
document.querySelector("#ultimo-especial").innerHTML = Dental.filter(H => H.Hora == "14:00").map(p => p.Especialista);

