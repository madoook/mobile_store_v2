import angular from "angular";
import uiRouter from 'angular-ui-router';
import routerConfig from './app.routes';

import {MainPageComponent} from './main/main.component';
import {AboutPageComponent} from './about/about.component';
import {CatalogPageComponent} from './catalog/catalog.component';
import {NavbarComponent} from './common/widgets/navbar/navbar.component';
import {CatalogItemComponent} from './common/widgets/catalog-item/catalog-item.component';
import {DetailsPageComponent} from './details/details.component';
import {SlideshowComponent} from './common/widgets/slideshow/slideshow.component';

import {ThumbnailsDirective} from './common/widgets/slideshow/thumbnails.directive'

import {PhoneService} from './common/services/phone.service';


import "./variables.styl";
import "./app.styl";


angular.module("client", [
    uiRouter
    ])
    .component('mainPage', MainPageComponent)
    .component('aboutPage', AboutPageComponent)
    .component('catalogPage', CatalogPageComponent)
    .component('detailsPage', DetailsPageComponent)
    .component('navbar', NavbarComponent)
    .component('catalogItem', CatalogItemComponent)
    .component('slideshow', SlideshowComponent)
    .service('phoneService', PhoneService)
    .directive('thumbnails', ThumbnailsDirective)
    .config(routerConfig);