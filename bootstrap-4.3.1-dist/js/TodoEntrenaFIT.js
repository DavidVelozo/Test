$(document).ready(function() {

    $("#dvRutinas").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvPectorales").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvPiernas").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvEspalda").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvGluteos").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvAbdomen").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvRetos").click(function() {
        DespliegaRecuadro(this.id);
    });

    $("#dvNutricion").click(function() {
        DespliegaRecuadro(this.id);
    });
});

function DespliegaRecuadro(vcPractice) {
    location.href = "RecuadroR.html"
}

function DespliegaRecuadro2(vcPractice) {
    $.ajax({
        url: "RecuadroR.html?iOpcion=" + iOpcion,
        type: "post",
        dataType: "text",
        //data: formData, //form.serialize(),
        cache: false,
        contentType: false,
        async: true,
        processData: false,
        success: function(datos) {

        },
        complete: function(request, status, error) {

            if (!weHaveSuccess) {
                console.log("err-> " + error);
            }
        },
        error: function() {
            alert("error en lectura de info")
            return;
        },
        timeout: 30000
    });

}