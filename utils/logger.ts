import { join } from 'path';
import { createLogger } from '@lvksh/logger';
import { FileLogger, FileLoggerConfig } from '@lvksh/logger/lib/file-log';

const fileConfig: FileLoggerConfig = {
    mode: 'NEW_FILE',
    path: join(__dirname, '../logs'),
    namePattern: 'test.txt'
}
const methodConfig = {
    OK: 'OK',
    INFO: 'INFO'
}

const log = createLogger(
    methodConfig,
    { divider: ' | ' },
    [FileLogger(fileConfig), console.log]
);

export default log;