import addJestHbsExtension from 'jest-hbs-extension';
import { join } from 'path';
// import { ConfigService } from '../src/config/config.service';

// const configService = new ConfigService();
// const viewsPath = configService.get<string>('templates.path');
const viewsPath = join(__dirname, '..', 'views');
addJestHbsExtension(viewsPath);
