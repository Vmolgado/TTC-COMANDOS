const comandos = [
     {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv300w,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv300w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv300w,1,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv300w,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "BLOQUEO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv300w,0,,,1,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300W",
        dispositivo: "GV300W",
        descripcion: "HABILITADO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv300w,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv310lau,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv310lau,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv310lau,1,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv310lau,0,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "BLOQUEO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv310lau,0,0,0,1,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "HABILITADO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv310lau,0,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv300,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv300,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv300,1,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "BLOQUEO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv300,0,,,1,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "HABILITADO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv75w,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv75w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv75w,1,,,0,0,0,,,,0,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv75w,0,,,0,0,0,,,,0,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv600mg,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv600mg,3,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv600w,01,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv600w,03,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300W",
        dispositivo: "GL300W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl300w,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300W",
        dispositivo: "GL300W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl300w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300",
        dispositivo: "GL300",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl300,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300",
        dispositivo: "GL300",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl300,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "CV100LG-DASHCAM",
        dispositivo: "CV100LG DASHCAM",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=cv100,1,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "CV100LG-DASHCAM",
        dispositivo: "CV100LG DASHCAM",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=cv100,3,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv55w,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv55w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv55w,1,0,0,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv55w,0,0,0,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv57,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv57,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv57,1,0,0,,,,1,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv57,0,0,0,,,,1,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75MG",
        dispositivo: "GV75MG",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv75m,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75MG",
        dispositivo: "GV75MG",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv75m,3,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gmt100,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gmt100,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gmt100,,,,1,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gmt100,,,,0,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GT301",
        dispositivo: "GT301",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gt301,1,FFFF",
        notas: ""
    },
    {
        idDispositivo: "GT301",
        dispositivo: "GT301",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gt301,3,FFFF",
        notas: ""
    },
    {
        idDispositivo: "GL500",
        dispositivo: "GL500",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl500,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL500",
        dispositivo: "GL500",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl500,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "KNIGHTX-100",
        dispositivo: "KNIGHTX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "KNIGHTX-100",
        dispositivo: "KNIGHTX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-P",
        dispositivo: "TLP1-P",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-P",
        dispositivo: "TLP1-P",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-LF",
        dispositivo: "TLP1-LF",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
     {
        idDispositivo: "TLP1-LF",
        dispositivo: "TLP1-LF",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "APERTURA CANDADO",
        comando: "UNLOCK,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP2-SFB",
        dispositivo: "TLP2-SFB",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP2-SFB",
        dispositivo: "TLP2-SFB",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-SF",
        dispositivo: "TLP1-SF",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-SF",
        dispositivo: "TLP1-SF",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLD2-D",
        dispositivo: "TLD2-D",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLD2-D",
        dispositivo: "TLD2-D",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "WARRIORX-100",
        dispositivo: "WARRIORX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "WARRIORX-100",
        dispositivo: "WARRIORX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "ACTUALIZAR POSICION",
        comando: "COORDS",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "REINICIAR EQUIPO",
        comando: "RESET",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "setio 0,2",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "HABILITADO DE MOTOR",
        comando: "setio 1,2",
        notas: ""
    },
    {
        idDispositivo: "OB22",
        dispositivo: "OB22",
        descripcion: "ACTUALIZAR POSICION",
        comando: "STATUS#",
        notas: ""
    },
    {
        idDispositivo: "OB22",
        dispositivo: "OB22",
        descripcion: "REINICIAR EQUIPO",
        comando: "RESET#",
        notas: ""
    },
    {
        idDispositivo: "AT1",
        dispositivo: "AT1",
        descripcion: "ACTUALIZAR POSICION",
        comando: "STATUS#",
        notas: ""
    },
    {
        idDispositivo: "AT1",
        dispositivo: "AT1",
        descripcion: "REINICIAR EQUIPO",
        comando: "RESET#",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "ACTUALIZAR POSICION",
        comando: "POSITION",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT123456",
        notas: ""
    },
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "ACTUALIZAR POSICION",
        comando: "(P02)",
        notas: ""
    },
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "REINICIAR EQUIPO",
        comando: "(P14)",
        notas: ""
    },
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "APERTURA CANDADO",
        comando: "(P43,123456)",
        notas: ""
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST300CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST300CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST300CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST300CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "ACTUALIZAR POSICION",
        comando: "CMD;IMEI;03;01",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "REINICIAR EQUIPO",
        comando: "CMD;IMEI;03;03",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "DESPERTAR DISPOSITIVO PASO 1",
        comando: "CMD;IMEI;03;05",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "DESPERTAR DISPOSITIVO PASO 2",
        comando: "CMD;IMEI;03;01",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST940",
        dispositivo: "ST940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST910;PRESET;IMEI",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST940",
        dispositivo: "ST940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST910;Reboot;IMEI",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST3940",
        dispositivo: "ST3940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST3940",
        dispositivo: "ST3940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4940",
        dispositivo: "ST4940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4940",
        dispositivo: "ST4940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    }
 ];
