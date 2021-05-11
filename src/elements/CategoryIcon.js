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
		case 'accounts & payments':
			return <IconoCuentasYPagos />;
		case 'home':
			return <IconoHogar />;
		case 'transport':
			return <IconoTransporte />;
		case 'clothes':
			return <IconoRopa />;
		case 'health & care':
			return <IconoSaludEHigiene />;
		case 'purchases':
			return <IconoCompras />;
		case 'entertainment':
			return <IconoDiversion />;
		default:
		break;
	}
}
 
export default CategoryIcon;