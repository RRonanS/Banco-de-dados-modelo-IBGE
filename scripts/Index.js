// Este arquivo .js serve basicamente para ler inputs de arquivos .csv e armazenar sua leitura no local storage
var fileInput2 = document.getElementById("csv-C"),
    data = "teste";
    readFile1 = function () {
        var reader = new FileReader();
        reader.onload = function () {
            data = reader.result;
            if(data.startsWith("cep, estado, cidade, bairro, rua")){
                localStorage.setItem("ceps", data);
            }
            else{
                localStorage.setItem("solicitacoes", data);
            }
            
            
            
        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput2.files[0]);
    };

fileInput2.addEventListener('change', readFile1);

var fileInput3 = document.getElementById("csv-S"),
    data = "teste";
    readFile2 = function () {
        var reader = new FileReader();
        reader.onload = function () {
            data = reader.result;
            localStorage.setItem("solicitacoes", data);
            
            
            
        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput3.files[0]);
    };

fileInput3.addEventListener('change', readFile2);
