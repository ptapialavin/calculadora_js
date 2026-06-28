 const precioBaseElement = document.querySelector("#precio-base");
        const cantidadElement = document.querySelector("#cantidad");
        const totalPagarElement = document.querySelector("#total-pagar");
        const btnAumentar = document.querySelector("#btn-aumentar");
        const btnDisminuir = document.querySelector("#btn-disminuir");

       
        const precioBase = Number(precioBaseElement.innerHTML);
        let cantidad = 0;

       
        const actualizarInterfaz = () => {
            cantidadElement.innerHTML = cantidad;
            totalPagarElement.innerHTML = cantidad * precioBase;
        };

       
        btnAumentar.onclick = () => {
            cantidad++;
            actualizarInterfaz();
        };

  
        btnDisminuir.onclick = () => {
            cantidad = Math.max(0, cantidad - 1);
            actualizarInterfaz();
        };
   