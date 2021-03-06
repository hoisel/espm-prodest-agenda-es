﻿var logoUrl = require( './img/Logo.jpg!image' ).src;
/**
 * Agenda controller
 * @param {Object} $log - angular log service.
 * @constructor
 * @returns {void}
 */
function AgendaController( $log ) {
    var vm = this;
    var uiConfig = {
        calendar: {
            dayNames: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
            dayNamesShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
            monthNames: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split( '_' ),
            monthNamesShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split( '_' ),
            height: 450,
            editable: true,
            header: {
                left: 'month basicWeek basicDay',
                center: 'title',
                right: 'today prev,next'
            }
        }
    };

    var eventSources = [
        {
            googleCalendarApiKey: 'AIzaSyDQla3vMpeSZmdLQTCRiw5KaTYC7Z5aG8k',
            url: 'http://www.google.com/calendar/feeds/agendaempreendedora2015%40gmail.com/public/basic',
            currentTimezone: 'America/Sao_Paulo' // an option!
        }
    ];

    vm.logoUrl = logoUrl;
    vm.uiConfig = uiConfig;
    vm.eventSources = eventSources;
    vm.activate = activate;

    ////////////////////////////////////////////////////////////////////////////

    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    function activate() {
        $log.log( 'Agenda Controller ativado' );
    }
}

module.exports = [ '$log', AgendaController ];
