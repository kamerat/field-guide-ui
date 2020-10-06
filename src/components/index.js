import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
import SideBar from './SideBar.vue';
import Container from './Container.vue';
import fgContent from './fg-content.vue';
import HeaderLarge from './HeaderLarge.vue';
import HeaderMedium from './HeaderMedium.vue';
import TextLarge from './TextLarge.vue';
import fgDivider from './fg-divider.vue';
import ImageContainer from './ImageContainer.vue';
import fgCode from './fg-code.vue';
import fgCard from './fg-card.vue';
import fgTable from './fg-table.vue';

require('typeface-roboto-condensed');

const Components = {
  HelloWorld,
  SideBar,
  Container,
  fgContent,
  HeaderLarge,
  HeaderMedium,
  TextLarge,
  fgDivider,
  ImageContainer,
  fgCode,
  fgCard,
  fgTable,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
