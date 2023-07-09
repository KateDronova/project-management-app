import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import mongoose from 'mongoose';
// import { PORT } from './constants';

// import * as serverService from './services/server.service';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// (async () => {
//   try {
//     await mongoose.connect('mongodb+srv://katedronova96:<yYujTxv9s$jMwK#>@cluster0.sozh3oq.mongodb.net/managerApp');
//     // await mongoose.connect('mongodb+srv://katedronova96:<yYujTxv9s$jMwK#>@cluster0.sozh3oq.mongodb.net/?retryWrites=true&w=majority');
//     serverService.server.listen(process.env.PORT || PORT, function () {
//       console.log('Сервер ожидает подключения...');
//     })
//   } catch (error) {
//     console.log(error);
//   }
// })();


// process.on('SIGINT', async () => {
//   await mongoose.disconnect();
//   process.exit();
// });
