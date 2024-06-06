import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});

// load 'app-home' asynchron
import('./app-home');

document.body.appendChild(
  <app-layout parent=".." current=".">
    <app-home />
  </app-layout>,
);
