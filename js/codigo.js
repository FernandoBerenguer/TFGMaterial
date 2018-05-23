function Cliente(sDni, sNombre, sApellidos, sDireccion, sProvincia, sLocalidad, iCP, sUsuario, sPassword, sTipoUsuario) {
    this.sDni = sDni;
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sDireccion = sDireccion;
    this.sProvincia = sProvincia;
    this.sLocalidad = sLocalidad;
    this.iCP = iCP;
    this.sUsuario = sUsuario;
    this.sPassword = sPassword;
    this.sTipoUsuario = sTipoUsuario;
    this.bActivo = true;
}

function Producto(iCodBarras, sNombre ,sDescripcion, bDisponible, iCategoria, fPrecioVenta) {
    this.iCodBarras = iCodBarras;
    this.sNombre = sNombre;
    this.sDescripcion = sDescripcion;
    this.bDisponible = bDisponible;
    this.iCategoria = iCategoria;
    this.fPrecioVenta = fPrecioVenta;
    this.bActivo = true;
}

function Categoria(iID, sNombre) {
    this.iID = iID;
    this.sNombre = sNombre;
}
