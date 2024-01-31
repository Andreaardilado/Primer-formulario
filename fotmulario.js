const submitForm = (e) =>{
    e.preventDefault ( ); //preventDefault: permite que la página no se me regargue con el 
    const form = document.querySelector("#miformulario");
    const formData = new FormData(form);
    const jsonData = {};
    console.log("Form data entries", formData.entries());
    for (let [key/*propiedad en este caso sería el name, correo*/, value/*valor de lo que el usuario ingrea*/] of formData.entries()) {
        jsonData[key] = value;
    }
    console.log("json", jsonData)
}