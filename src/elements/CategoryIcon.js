import React from 'react';

import {ReactComponent as IconoComida} from './../imagenes/cat_comida.svg';
import {ReactComponent as IconoCompras} from './../imagenes/cat_compras.svg';
import {ReactComponent as IconoCuentasYPagos} from './../imagenes/cat_cuentas-y-pagos.svg';
import {ReactComponent as IconoDiversion} from './../imagenes/cat_diversion.svg';
import {ReactComponent as IconoHogar} from './../imagenes/cat_hogar.svg';
import {ReactComponent as IconoRopa} from './../imagenes/cat_ropa.svg';
import {ReactComponent as IconoSaludEHigiene} from './../imagenes/cat_salud-e-higiene.svg';
import {ReactComponent as IconoTransporte} from './../imagenes/cat_transporte.svg';

const CategoryIcon = ({id}) => {
	switch(id){
		case 'food':
			return <IconoComida />;
		case 'accounts and payments':
			return <IconoCompras />;
		case 'home':
			return <IconoCuentasYPagos />;
		case 'transport':
			return <IconoDiversion />;
		case 'clothes':
			return <IconoHogar />;
		case 'health & care':
			return <IconoRopa />;
		case 'purchases':
			return <IconoSaludEHigiene />;
		case 'entertainment':
			return <IconoTransporte />;
		default:
		break;
	}
}
 
export default CategoryIcon;