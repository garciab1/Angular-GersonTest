import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductsComponent } from './pages/products/products.component'; //Importanto las rutas de los componentes 

//Definir las rutas
export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },

    {
        path: 'Categoria',
        component: CategoriasComponent
    },

    {
        path: 'Producto',
        component: ProductsComponent
    }

];
