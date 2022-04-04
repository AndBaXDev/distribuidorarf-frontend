import { config } from "config";

export const environment = {
  production: true,
  apiURL: config.apiUrl,
  BASE_URL: 'https://distribuidorarf-test.herokuapp.com',
  SERVICE_LOGIN_API: 'auth/login',
  API_USER: '$2a$10$DxmWIbRRh7XfGuMUPG3NWuPa0Km.SGB1xZX10h8rbSrDsLxtSjSDu',
  API_PASS: '$2a$10$IJUBNcP/iErqDeAErUK4geppyO8pw2ua6maopcRKFh5MFYG1qY9Ri',
  SERVICE_PROVINCIAS: 'provincias',
  SERVICE_CANTONES: 'cantones',
  SERVICE_TIPOS_IDENTIFICACION: 'tipos-identificacion',
  SERVICE_TERMINOS: "terminos",
  SERVICE_TIPOS_PERSONA: "tipos-persona",
  SERVICE_FUNCIONES: "funciones",
  SERVICE_PERSONAS: "personas",
  SERVICE_CATEGORIAS: "categorias",
  SERVICE_MARCAS: "marcas",
  SERVICE_PRODUCTOS: 'productos',
  SERVICE_PROVEEDORES: "proveedores",
  SERVICE_PRECIOS_PRODUCTO: "precios-productos",
  SERVICE_DETALLES_PRODUCTO: "detalles-productos",
  SERVICE_IMAGENES_PRODUCTO: "imagenes-prducto",
  AZURESASTOKEN: 'sp=racwdli&st=2022-03-17T18:40:05Z&se=2032-03-18T02:40:05Z&spr=https&sv=2020-08-04&sr=c&sig=W%2BVCKSAuPdyhMIwfn2hl0tQeP9hz2ToZd%2F%2BeJZqsufk%3D',
  AZUREACCOUNTNAME: 'distribuidorarf',
  AZURECONTAINERNAME: 'productos',
  SERVICE_GALERIA_PRODUCTO: "galeria-productos"
};