import Router from "koa-router";
import * as postsCtrl from './posts.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

posts.get('/:id', postsCtrl.checkObjectId,postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
posts.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
//posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, posts.routes());
export default posts;
